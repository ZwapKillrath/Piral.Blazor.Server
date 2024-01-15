﻿using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.RenderTree;
using System.Diagnostics.CodeAnalysis;
using System.Reflection;

namespace Piral.Blazor.Orchestrator;

internal class MfComponentActivator : IComponentActivator
{
	private readonly IModuleContainerService _container;
	private readonly object _cachedInitializers;
	private readonly Type _ctiType;
	private readonly Func<Type, Action<IServiceProvider, IComponent>> _createInitializer;

    public MfComponentActivator(IModuleContainerService container)
	{
		_container = container;

		var cf = typeof(Renderer).Assembly.GetType("Microsoft.AspNetCore.Components.ComponentFactory")!;
		_cachedInitializers = cf.GetField("_cachedComponentTypeInfo", BindingFlags.Static | BindingFlags.NonPublic)!.GetValue(null)!;
		_ctiType = cf.GetNestedType("ComponentTypeInfoCacheEntry", BindingFlags.NonPublic)!;
		_createInitializer = cf.GetMethod("CreatePropertyInjector", BindingFlags.NonPublic | BindingFlags.Static)!.CreateDelegate<Func<Type, Action<IServiceProvider, IComponent>>>();
	}

	public IComponent CreateInstance([DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] Type componentType)
	{
		if (!typeof(IComponent).IsAssignableFrom(componentType))
		{
			throw new ArgumentException($"The type {componentType.FullName} does not implement {nameof(IComponent)}.", nameof(componentType));
		}

		var child = (IComponent)Activator.CreateInstance(componentType)!;

		if (!CacheContainsKey(componentType))
		{
			var origin = componentType.Assembly;
			var provider = _container.GetProvider(origin);
			var initializer = _createInitializer(componentType);

			// local DI has been found - use it
			if (provider is not null)
			{
				AddInitializerToCache(componentType, provider, initializer);
			}
		}

		return child;
	}

	private bool CacheContainsKey(Type componentType)
	{
		return (bool)_cachedInitializers.GetType().GetMethod("ContainsKey")!.Invoke(_cachedInitializers, [componentType])!;
	}

	private void AddInitializerToCache(Type componentType, IScopeResolver resolver, Action<IServiceProvider, IComponent> initializer)
	{
		Action<IServiceProvider, IComponent> propInjection = (scope, cmp) =>
		{
			var provider = resolver.Resolve(scope);
			initializer(provider, cmp);
		};
		var cti = Activator.CreateInstance(_ctiType, null, propInjection);
		_cachedInitializers.GetType().GetMethod("TryAdd")!.Invoke(_cachedInitializers, [componentType, cti]);
	}
}
