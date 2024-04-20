import{_ as e,c as a,o as i,a2 as s}from"./chunks/framework.DC83J3Ln.js";const g=JSON.parse('{"title":"Command Line Tooling","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started/server/tooling.md","filePath":"getting-started/server/tooling.md","lastUpdated":1713652950000}'),t={name:"getting-started/server/tooling.md"},l=s('<h1 id="command-line-tooling" tabindex="-1">Command Line Tooling <a class="header-anchor" href="#command-line-tooling" aria-label="Permalink to &quot;Command Line Tooling&quot;">​</a></h1><p>The dotnet tool (CLI) for working with Piral.Blazor.Server-based applications.</p><nav class="table-of-contents"><ul><li><a href="#installation">Installation</a></li><li><a href="#running">Running</a><ul><li><a href="#create-emulator">Create Emulator</a></li><li><a href="#prefill-cache">Prefill Cache</a></li><li><a href="#publish-micro-frontend">Publish Micro Frontend</a></li></ul></li></ul></nav><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>To install the tool globally run the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Piral.Blazor.Cli</span></span></code></pre></div><p>This will install the <code>piral-blazor-server</code> tool in the standard binary directory. Now you should be able to use it already.</p><h2 id="running" tabindex="-1">Running <a class="header-anchor" href="#running" aria-label="Permalink to &quot;Running&quot;">​</a></h2><p>You can invoke the the tool by running the following command:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">piral-blazor-server</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">comman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>where <code>&lt;command</code> is one of the following commands:</p><ul><li><code>create-emulator</code></li><li><code>prefill-cache</code></li><li><code>publish-microfrontend</code></li></ul><p>The following sections go into details on these commands.</p><h3 id="create-emulator" tabindex="-1">Create Emulator <a class="header-anchor" href="#create-emulator" aria-label="Permalink to &quot;Create Emulator&quot;">​</a></h3><p>The command <code>piral-blazor-server create-emulator</code> can be used to create an emulator NuGet package for the current Piral.Blazor server (also referred to as app shell).</p><p>Example:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">piral-blazor-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create-emulator</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dist</span></span></code></pre></div><p>Creates an emulator (NuGet package) in the <code>dist</code> directory. The <code>csproj</code> file for the example above is assumed to be in the working directory.</p><h3 id="prefill-cache" tabindex="-1">Prefill Cache <a class="header-anchor" href="#prefill-cache" aria-label="Permalink to &quot;Prefill Cache&quot;">​</a></h3><p>The command <code>piral-blazor-server prefill-cache</code> can be used to prefill the cache. This is useful when you want to operate on a static / pre-configured set of micro frontends. Also, it helps to improve the startup performance. Usually, this command would be used in a CI/CD pipeline, i.e., before the server is actually started or run somewhere.</p><p>Example:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">piral-blazor-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prefill-cache</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --environment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Production</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./App</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./App/.cache</span></span></code></pre></div><p>Prefills the cache using the <code>appsettings.Production.json</code> and <code>appsettings.json</code> files from the <code>App</code> subdirectory of the current working directory. Puts the files in the <code>App/.cache</code> directory.</p><h3 id="publish-micro-frontend" tabindex="-1">Publish Micro Frontend <a class="header-anchor" href="#publish-micro-frontend" aria-label="Permalink to &quot;Publish Micro Frontend&quot;">​</a></h3><p>The command <code>piral-blazor-server publish-microfrontend</code> can be used to build and publish a micro frontend. This builds, packs, and publishes the micro frontend as a NuGet package.</p><p>Example:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">piral-blazor-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publish-microfrontend</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./SomeMf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://feed.piral.cloud/api/v1/nuget/myfeed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> abcdef1234</span></span></code></pre></div><p>Builds, packs, and publishes the project found in the <code>SomeMf</code> directory of the current working directory. Uses the given URL as NuGet feed. The authentication is based on the provided key.</p>',28),n=[l];function o(r,h,p,d,c,k){return i(),a("div",null,n)}const m=e(t,[["render",o]]);export{g as __pageData,m as default};
