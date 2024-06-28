import{_ as s,c as a,o as i,U as t}from"./chunks/framework.CeWJ1GBg.js";const g=JSON.parse('{"title":"动态等待","description":"","frontmatter":{},"headers":[],"relativePath":"指南/与生俱来/动态等待.md","filePath":"指南/与生俱来/动态等待.md","lastUpdated":1719568763000}'),n={name:"指南/与生俱来/动态等待.md"},e=t(`<h1 id="动态等待" tabindex="-1">动态等待 <a class="header-anchor" href="#动态等待" aria-label="Permalink to &quot;动态等待&quot;">​</a></h1><h2 id="架构动态等待" tabindex="-1">架构动态等待 <a class="header-anchor" href="#架构动态等待" aria-label="Permalink to &quot;架构动态等待&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> youqu3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sleep</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sleep(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>可以完全代替之前这样的写法：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sleep</span></span></code></pre></div><p>优化：</p><ul><li><p>增加了等待的日志</p></li><li><p>根据不同的架构对等待时间进行倍数放大，各架构倍数：</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">x86_64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">aarch64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1.5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">loongarch64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">mips64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 2.5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sw_64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 2.5</span></span></code></pre></div></li></ul><h2 id="元素识别动态等待" tabindex="-1">元素识别动态等待 <a class="header-anchor" href="#元素识别动态等待" aria-label="Permalink to &quot;元素识别动态等待&quot;">​</a></h2>`,8),p=[e];function l(h,k,r,d,o,c){return i(),a("div",null,p)}const _=s(n,[["render",l]]);export{g as __pageData,_ as default};
