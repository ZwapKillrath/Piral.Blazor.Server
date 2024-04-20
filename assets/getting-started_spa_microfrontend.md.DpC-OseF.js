import{_ as e,c as a,o as t,a2 as i}from"./chunks/framework.DC83J3Ln.js";const m=JSON.parse('{"title":"Creating a Blazor Pilet","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started/spa/microfrontend.md","filePath":"getting-started/spa/microfrontend.md","lastUpdated":1713631973000}'),s={name:"getting-started/spa/microfrontend.md"},o=i(`<h1 id="creating-a-blazor-pilet" tabindex="-1">Creating a Blazor Pilet <a class="header-anchor" href="#creating-a-blazor-pilet" aria-label="Permalink to &quot;Creating a Blazor Pilet&quot;">​</a></h1><p>We recommend that you watch the video <a href="https://youtu.be/Ychzp2xMxes" target="_blank" rel="noreferrer">on scaffolding from the standard VS template</a> before you go over the details below.</p><p>In general, to create a Blazor pilet using <code>Piral.Blazor</code>, two approaches can be used:</p><h2 id="_1-from-scratch" tabindex="-1">1. From Scratch <a class="header-anchor" href="#_1-from-scratch" aria-label="Permalink to &quot;1. From Scratch&quot;">​</a></h2><p>In this case, it is highly recommended to use our template. More information and installation instructions can be found in <a href="https://www.nuget.org/packages/Piral.Blazor.Template" target="_blank" rel="noreferrer"><code>Piral.Blazor.Template</code></a>.</p><h2 id="_2-transforming-an-existing-application" tabindex="-1">2. Transforming an Existing Application <a class="header-anchor" href="#_2-transforming-an-existing-application" aria-label="Permalink to &quot;2. Transforming an Existing Application&quot;">​</a></h2><p>In this case, follow these steps:</p><ol><li><p>Add a <code>PiralInstance</code> property to your <code>.csproj</code> file (The Piral instance name should be the name of the Piral instance you want to use, as it is published on npm.)</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PropertyGroup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TargetFramework</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;net8.0&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TargetFramework</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PiralInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;my-piral-instance&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PiralInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PropertyGroup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>(You can optionally also specify an <code>NpmRegistry</code> property. The default for this is set to <code>https://registry.npmjs.org/</code>)</p></li><li><p>Install the <code>Piral.Blazor.Tools</code> and <code>Piral.Blazor.Utils</code> packages, make sure they both have a version number of format <code>8.0.x</code></p></li><li><p>Remove the <code>Microsoft.AspNetCore.Components.WebAssembly.DevServer</code> package and install the <code>Piral.Blazor.DevServer</code> package (using the same version as the packages from (2))</p></li><li><p>Rename <code>Program.cs</code> to <code>Module.cs</code>, and make sure to make the <code>Main</code> method an empty method.</p></li><li><p>Build the project. The first time you do this, this can take some time as it will fully scaffold the pilet.</p></li></ol><p>If you run the solution using <code>F5</code> the <code>Piral.Blazor.DevServer</code> will start the Piral CLI under the hood. This allows you to not only use .NET Hot-Reload, but also replace the pilets on demand.</p>`,9),n=[o];function r(l,p,h,c,d,g){return t(),a("div",null,n)}const u=e(s,[["render",r]]);export{m as __pageData,u as default};
