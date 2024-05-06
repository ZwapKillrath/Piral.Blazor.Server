﻿using NuGet.Packaging;
using System.Text.Json.Nodes;

namespace Piral.Blazor.Orchestrator;

internal class MfPackageService(IPiralConfig config, IModuleContainerService container, ISnapshotService snapshot, IEvents events, IData data) : IMfPackageService
{
    private readonly IPiralConfig _config = config;
    private readonly IModuleContainerService _container = container;
    private readonly ISnapshotService _snapshot = snapshot;
    private readonly IEvents _events = events;
    private readonly IData _data = data;

    public async Task<MicrofrontendPackage> LoadMicrofrontend(MfPackageMetadata entry)
    {
        var packages = await CollectPackages(entry);
        return new NugetMicrofrontendPackage(entry, packages, _config, _container, _events, _data);
    }

    private async Task<List<PackageArchiveReader>> CollectPackages(MfPackageMetadata entry)
    {
        var id = entry.MakePackageId();
        var dependencies = await _snapshot.ListDependencies(id);
        var result = new List<PackageArchiveReader>();

        foreach (var dependency in dependencies)
        {
            var depId = dependency.MakePackageId();
            var reader = await _snapshot.LoadPackage(depId);

            if (reader is not null)
            {
                result.Add(reader);
            }
        }

        return result;
    }
}

