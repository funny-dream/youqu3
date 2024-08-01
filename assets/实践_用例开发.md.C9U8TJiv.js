import{_ as s,c as i,o as a,U as n}from"./chunks/framework.DB2UoSFq.js";const g=JSON.parse('{"title":"用例开发","description":"","frontmatter":{},"headers":[],"relativePath":"实践/用例开发.md","filePath":"实践/用例开发.md","lastUpdated":1722506302000}'),l={name:"实践/用例开发.md"},h=n(`<h1 id="用例开发" tabindex="-1">用例开发 <a class="header-anchor" href="#用例开发" aria-label="Permalink to &quot;用例开发&quot;">​</a></h1><h2 id="用例模块路径" tabindex="-1">用例模块路径 <a class="header-anchor" href="#用例模块路径" aria-label="Permalink to &quot;用例模块路径&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">my_autotest</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">--用例模块</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assert_res</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> base_case.py</span></span>
<span class="line has-focus"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_mycase_001.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_mycase_002.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> image_res</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> static_res</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> assert_method.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> base_method.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_autotest_method.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ui.ini</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .gitignore</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config.py</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conftest.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mycase.csv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pytest.ini</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└─</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruff.toml</span></span></code></pre></div><h2 id="以-dde-file-manager-用例举例" tabindex="-1">以 dde-file-manager 用例举例 <a class="header-anchor" href="#以-dde-file-manager-用例举例" aria-label="Permalink to &quot;以 dde-file-manager 用例举例&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">case/base_case.py</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> method.assert_method </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AssertMethod</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BaseCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AssertMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">test_dfm_001.py</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> youqu3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sleep</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> case.base_case </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BaseCase</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> method.dde_dock_method </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DdeDockMethod</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestDfm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BaseCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test_dfm_1159151</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;任务栏右键启动文件管理器&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 右键点击任务栏上的文件管理器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        DdeDockMethod.right_click_dde_file_manager_on_dock_by_attr()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 点击右键菜单中的“打开”</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        DdeDockMethod.click_open_in_right_menu_by_mk()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sleep(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 断言</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.assert_process_exist(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dde-file-manager&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> teardown_method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;&quot;teardown&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        DdeDockMethod.kill_process(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dde-file-manager&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div><h2 id="实践规范" tabindex="-1">实践规范 <a class="header-anchor" href="#实践规范" aria-label="Permalink to &quot;实践规范&quot;">​</a></h2><h3 id="用例文件名称" tabindex="-1">用例文件名称 <a class="header-anchor" href="#用例文件名称" aria-label="Permalink to &quot;用例文件名称&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{case_name}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{case_id}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.py</span></span></code></pre></div><ul><li>小驼峰命名。</li><li><code>test_</code> 开头。</li><li><code>case_id</code> 结尾。</li></ul><h3 id="类名称" tabindex="-1">类名称 <a class="header-anchor" href="#类名称" aria-label="Permalink to &quot;类名称&quot;">​</a></h3><ul><li>大驼峰命名。</li><li>以 <code>Test</code> 开头。</li><li>以 <code>用例名称</code> 结尾，所有用例可以使用相同的类名。</li><li>继承 <code>BaseCase</code>。</li></ul><h3 id="用例函数" tabindex="-1">用例函数 <a class="header-anchor" href="#用例函数" aria-label="Permalink to &quot;用例函数&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> test_{case_name}_{case_id}():</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span></code></pre></div><h3 id="用例注释" tabindex="-1">用例注释 <a class="header-anchor" href="#用例注释" aria-label="Permalink to &quot;用例注释&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> test_{case_name}_{case_id}():</span></span>
<span class="line has-focus"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;用例标题&quot;&quot;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">用例注释 </span></span></code></pre></div><h3 id="csv文件" tabindex="-1">CSV文件 <a class="header-anchor" href="#csv文件" aria-label="Permalink to &quot;CSV文件&quot;">​</a></h3><ul><li>CSV文件名称对应用例文件名称的 <code>case_name</code>：<code>{case_name}.csv</code> 。</li><li>第一列写 <code>case_id</code> 。</li></ul>`,18),t=[h];function e(p,k,d,r,F,c){return a(),i("div",null,t)}const y=s(l,[["render",e]]);export{g as __pageData,y as default};
