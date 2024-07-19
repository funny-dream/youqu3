import{_ as s,c as a,o as i,U as t}from"./chunks/framework.CoRJFuj9.js";const g=JSON.parse('{"title":"本地执行","description":"","frontmatter":{},"headers":[],"relativePath":"指南/驱动执行/本地执行.md","filePath":"指南/驱动执行/本地执行.md","lastUpdated":1721405890000}'),e={name:"指南/驱动执行/本地执行.md"},p=t(`<h1 id="本地执行" tabindex="-1">本地执行 <a class="header-anchor" href="#本地执行" aria-label="Permalink to &quot;本地执行&quot;">​</a></h1><h2 id="子命令" tabindex="-1">子命令 <a class="header-anchor" href="#子命令" aria-label="Permalink to &quot;子命令&quot;">​</a></h2><p>本地执行子命令为：<code>run</code></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-JQc22" id="tab-AEiw3bp" checked="checked"><label for="tab-AEiw3bp">原生环境</label><input type="radio" name="group-JQc22" id="tab-HpMdpcb"><label for="tab-HpMdpcb">虚拟环境</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3-cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div></div></div><h2 id="用例驱动方式" tabindex="-1">用例驱动方式 <a class="header-anchor" href="#用例驱动方式" aria-label="Permalink to &quot;用例驱动方式&quot;">​</a></h2><h3 id="执行所有用例" tabindex="-1">执行所有用例 <a class="header-anchor" href="#执行所有用例" aria-label="Permalink to &quot;执行所有用例&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-gPeM7" id="tab-q4Pzd-J" checked="checked"><label for="tab-q4Pzd-J">原生环境</label><input type="radio" name="group-gPeM7" id="tab-mHE7Fzr"><label for="tab-mHE7Fzr">虚拟环境</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3-cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div></div></div><h3 id="指定执行某一个用例" tabindex="-1">指定执行某一个用例 <a class="header-anchor" href="#指定执行某一个用例" aria-label="Permalink to &quot;指定执行某一个用例&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># test_xxx_001.py</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test_xxx_001_1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test_xxx_001_2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ...</span></span></code></pre></div><p>仅驱动执行这一条用例：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-RbzGu" id="tab-DGIg1oR" checked="checked"><label for="tab-DGIg1oR">原生环境</label><input type="radio" name="group-RbzGu" id="tab-c7YF-JL"><label for="tab-c7YF-JL">虚拟环境</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_xxx_001_1</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3-cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_xxx_001_1</span></span></code></pre></div></div></div><p>如果你想执行这个 py 文件中所有的用例：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-EyXUR" id="tab-hYhlMDU" checked="checked"><label for="tab-hYhlMDU">原生环境</label><input type="radio" name="group-EyXUR" id="tab-hnvZy5R"><label for="tab-hnvZy5R">虚拟环境</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_xxx_001</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3-cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_xxx_001</span></span></code></pre></div></div></div><h3 id="指定某个目录执行" tabindex="-1">指定某个目录执行 <a class="header-anchor" href="#指定某个目录执行" aria-label="Permalink to &quot;指定某个目录执行&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">autotest-my-app</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> base_case.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> smoke</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_mycase_001.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_mycase_002.py</span></span></code></pre></div><p>驱动执行 <code>smoke</code> 目录下所有用例：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-FMwsT" id="tab-Df7IJfD" checked="checked"><label for="tab-Df7IJfD">原生环境</label><input type="radio" name="group-FMwsT" id="tab-l47xEs_"><label for="tab-l47xEs_">虚拟环境</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> smoke</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3-cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> smoke</span></span></code></pre></div></div></div><h3 id="根据关键词执行" tabindex="-1">根据关键词执行 <a class="header-anchor" href="#根据关键词执行" aria-label="Permalink to &quot;根据关键词执行&quot;">​</a></h3><p>执行包含关键词的用例,关键词可以是用例对象中的任意字符,且大小写不敏感</p><p>模块名称、py 文件名称、类名、函数名等等都可以做为关键词</p><p>比如：<code>case/test_music_001.py::TestMusic::test_music_001</code></p><p>整个字符串中可以任意截取字符作为关键词。</p><p>关键词驱动支持<code> and/or/not</code> 表达式。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-aA2n6" id="tab-DfVRv4K" checked="checked"><label for="tab-DfVRv4K">原生环境</label><input type="radio" name="group-aA2n6" id="tab-L-j1JCs"><label for="tab-L-j1JCs">虚拟环境</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;music and 001&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3-cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;music and 001&quot;</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">注意：</p><p>使用逻辑表达式的时候一定要加引号：<code>&quot;music and 001&quot;</code></p></div><h3 id="根据标签执行" tabindex="-1">根据标签执行 <a class="header-anchor" href="#根据标签执行" aria-label="Permalink to &quot;根据标签执行&quot;">​</a></h3><p>基于 YouQu 特有的 CSV 文件管理的标签，也可以是传统的 Pytest 标签：<code>@pytest.mark.L1</code></p><p>标签驱动支持<code> and/or/not</code> 表达式。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Zqanz" id="tab-kV6wqj5" checked="checked"><label for="tab-kV6wqj5">原生环境</label><input type="radio" name="group-Zqanz" id="tab-Io9YkP9"><label for="tab-Io9YkP9">虚拟环境</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;L1 or smoke&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3-cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;L1 or smoke&quot;</span></span></code></pre></div></div></div><h3 id="批量用例id驱动执行" tabindex="-1">批量用例ID驱动执行 <a class="header-anchor" href="#批量用例id驱动执行" aria-label="Permalink to &quot;批量用例ID驱动执行&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-DtyJr" id="tab-g8T43DD" checked="checked"><label for="tab-g8T43DD">原生环境</label><input type="radio" name="group-DtyJr" id="tab-oX15o7N"><label for="tab-oX15o7N">虚拟环境</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;id1 or id2 or id3 or id4&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3-cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;id1 or id2 or id3 or id4&quot;</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">注意：</p><p>使用逻辑表达式的时候一定要加引号：<code>&quot;id1 or id2 or id3 or id4&quot;</code></p></div><h3 id="指定用例文件路径执行" tabindex="-1">指定用例文件路径执行 <a class="header-anchor" href="#指定用例文件路径执行" aria-label="Permalink to &quot;指定用例文件路径执行&quot;">​</a></h3><p>指定用例文件</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-koC-K" id="tab-15aGXMW" checked="checked"><label for="tab-15aGXMW">原生环境</label><input type="radio" name="group-koC-K" id="tab-A8zrqy7"><label for="tab-A8zrqy7">虚拟环境</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case/test_music_001.py</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3-cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case/test_music_001.py</span></span></code></pre></div></div></div><p>指定用例目录</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-0pxDH" id="tab-doUtFZa" checked="checked"><label for="tab-doUtFZa">原生环境</label><input type="radio" name="group-0pxDH" id="tab-grzubDw"><label for="tab-grzubDw">虚拟环境</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3-cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case</span></span></code></pre></div></div></div><p>用例文件、目录组合</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-4GVl3" id="tab-93lEYON" checked="checked"><label for="tab-93lEYON">原生环境</label><input type="radio" name="group-4GVl3" id="tab-W8a5UMF"><label for="tab-W8a5UMF">虚拟环境</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;case/test_music_001.py case/test_music_002.py&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> youqu3-cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;case/test_music_001.py case/test_music_002.py&quot;</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">注意：</p><p>多个用例文件、目录之间用空格分割，加引号</p></div>`,40),l=[p];function h(n,d,k,o,c,r){return i(),a("div",null,l)}const u=s(e,[["render",h]]);export{g as __pageData,u as default};
