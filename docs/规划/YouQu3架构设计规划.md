---
Author : mikigo
---

# YouQu3 架构设计规划

## 1. 背景

YouQu（[`YouQu2`](https://github.com/linuxdeepin/youqu)） 是 2021 年成都测试团队开始内部孵化的项目，旨在开发一个简单易用，功能强大的自动化测试框架。经过了 2 年多的持续开发优化，2023 年 8 月正式在 [linuxdeepin](https://github.com/linuxdeepin/) 社区开源，2024 年 5 月在欧拉社区开源。从开源至今发布了 1.0 和 2.0 两个大版本，小版本更新了数十个。

YouQu2 在公司内部已经被大量的自动化测试项目使用，在公司的多个自动化流程中运行得很好，能满足公司对自动化测试的业务需求，也得到了公司领导、同事们、内外部开发者们的认可。

但 YouQu2 在现有框架下，仍然存在一些不尽人意的地方，比如：

- 每次使用需要初始化框架工程及单独做环境部署，操作较为复杂;
- 用例开发环境下更新版本不方便、源代码暴露在用户面前;
- 导致框架代码容易被用户修改;
- 绑定了太多公司的业务;
- 一些底层模块或接口命名不优雅;
- 对纯 CLI 操作系统环境支持不够友好；

等等。

有些问题处理起来必然会影响到框架的兼容性，势必对现有公司自动化用例、业务流程有一些影响，甚至有些问题在现有框架结构下根本无法解决，因此我们才萌生了对框架结构进行重新设计想法，我们想要设计开发一个更加简单易用、更加纯粹、扩展性和兼容性更好的自动化测试框架 —— **`YouQu3`**。

## 2. 目标

YouQu3 旨在成为下一代 Linux 自动化测试框架，在继承 YouQu2 诸多亮点功能的同时解决其遇到的问题，同时对各功能进行插件化、模块化改造，全面优化框架接口调用机制。

- 以 Python 包的形式提供框架能力，方便安装、更新。
- 支持离线部署，用例整体打包交付之后，可以在无网络环境下直接运行。
- 极致轻量化、可定制化依赖，可以根据测试项目类型安装对应的依赖。
- 功能可插拔，以插件的形式提供功能，不安装插件的情况下框架也能正常运行。
- 可视化配置，在浏览器中输入一些配置后即可驱动测试用例执行，搭配远程执行功能，可实现群控测试机执行。
- 支持非开发者下运行，简化系统环境部署。

价值：

- 使用更简单方便，降低使用门槛。
- 环境依赖可以一键打包交付，适合有离线部署需求的用户。
- 安全性稳定性更好，提高用例开发效率，提高 CI/CD 运行稳定性。
- 全面插件化模块化，功能扩展性更好。
- 框架和插件库独立维护更新，互不影响。

## 3. 架构设计

### 3.1. 总体方案

框架层提供总线服务，各功能以插件的方式接入，功能插件可插拔，由用例层决定使用哪些功能对应安装哪些插件，实现插件依赖的定制化。

YouQu3 框架代码及插件库以 Python 三方包的形式提供，用例层直接 import 使用，框架源代码不直接呈现在用户面前，用户只需要关注用例、方法代码。

框架提供驱动执行的命令，可以在通过命令行快速驱动测试用例执行，通过命令行参数控制，支持多种用例驱动模式，如：路径驱动、标签驱动、关键词驱动等等，执行模式支持本地驱动执行和远程驱动执行。

框架也提供初始化用例工程的功能，一键生成用例工程模板代码，生成的用例工程遵循完整的 PO 设计模式，用例层、方法层基础代码自动生成，资源目录、Git 管理、环境依赖管理等相关功能的目录文件也都一键生成，让用户能专注于用例逻辑的编写和维护。

### 3.2. 架构设计

![](/设计/YouQu3架构设计.drawio.png)

### 3.3. 整体数据流

![](/设计/YouQu3架构总览.drawio.png)

- 框架驱动命令传递命令行参数给执行管理器，执行管理器接收命令行参数并读取公共配置项驱动用例执行；

- 用例执行过程中动态调用 YouQu3 底层功能，并动态加载 YouQu3 插件；

- 若插件已经安装，则正常调用，否则提示用户进行安装，抛异常程序终止；

- 用例执行完成后生成多种测试报告，并根据需要将测试结果，通过配置的接口进行数据回填。

### 3.4. 详细设计

详细描述各模块工作方式。

#### 3.4.1. 驱动执行管理

框架提供驱动命令：`youqu3`，用于统一管理命令行参数驱动用例执行，驱动命令将命令行参数传递给框架底层 `driver` 模块（驱动），`driver` 获取命令行参数并结合配置项，解析测试策略，从而驱动测试用例执行。

支持本地和远程执行模式：

- 支持基于用例标签化管理驱动用例执行
- 支持基于测试单驱动插件驱动用例执行
- 支持基于关键词驱动用例执行
- 支持用例目录或文件路径驱动执行

#### 3.4.2. 配置项管理

YouQu3 配置项管理，采用命令行参数 + 公共配置的形式；

- 命令行参数可以通过驱动命令提供入参选项，显示的传入参数值。
- 公共配置为框架提供的一些具有默认值的配置项，原则上不通过修改配置文件的方式修改，可以通过系统环境变量或修改 `setting` 对象的属性值。
- 用例工程配置模块建议继承 `_Setting` 配置类。
- 不再提供 `ini` 配置文件管理配置项。

#### 3.4.3. 框架总线接口

框架底层对各功能插件提供 `插槽` 中间件，插件如果已经安装，上层用例就能通过框架动态调用插件提供的功能，同时框架可以在中间件中对插件功能进行增强或修改。

若插件没有被安装，框架可以正常运行，但若用例层调用了此插件提供的功能，此时会抛异常，并提示用户安装对应插件。

#### 3.4.4. 按测试类型管理插件

框架的安装命令可以根据用例工程所属的测试类型，自动安装框架及改测试类型需要的插件依赖，不需要用户去了解和思考哪些插件适合哪种测试类型。

#### 3.4.5. 环境依赖管理

采用虚拟环境管理依赖项，虚拟环境默认在用例功能根目录下创建，支持对依赖环境进行一键打包，也可以方便对虚拟环境的管理和维护。

## 4. 用例工程设计

用例工程支持一键创建：

```shell
$ youqu3 init
```

### 4.1. 用例工程结构

```shell
autotest-my-case    # 用例工程名称
├── case    # 用例层目录
│   ├── __init__.py
│   ├── assert_res    # 断言资源
│   ├── base_case.py          # 用例基类
│   ├── test_mycase_001.py    # 用例示例 1
│   └── test_mycase_002.py    # 用例示例 2
├── method    # 方法层目录
│   ├── __init__.py
│   ├── static_res    # 用例执行所需要的资源
│   ├── image_res     # 图像识别方法所需要的资源
│   ├── base_method.py       # 方法基类
│   ├── my_case_method.py    # 方法唯一出口类
│   ├── assert_method.py     # 断言方法类
│   └── ui.ini     # 相对位移元素定位方案的配置文件
├── config.py    # 配置模块，提供可调用的配置对象config
├── conftest.py    # Fixture
├── debug.py       # 调试用例驱动脚本
├── mycase.csv     # 用例标签管理文件
├── .env     # 默认环境变量管理文件
└── requirements.txt    # 依赖管理文件
```

### 4.2. 各模块编写思路

详细介绍各功能模块的设计和编写思路。

#### 4.2.1. 方法层

用于统一存放用例步骤的操作方法，所有的方法按照 PO 设计思想，放置在对应的类里面。

- 如果一个应用存在多个页面，按照 `一个页面一个类，一个元素一个方法` 的思路，进行编写，所有的操作步骤都应该有一个对应的方法。

- 如果一个页面元素操作比较多，也可以对这个页面做进一步划分；

  比如：文件管理器，我们可以将界面分为四个区域：标题栏(`TitleMethod)`、右边视图区域(`RightMethod`)、左边视图区域(`LeftMethod`)、弹窗(`PopMethod`)。

  ![](https://pic.imgdb.cn/item/64f054c3661c6c8e54ff4806.png)


方法层按需导入框架提供的底层能力，比如：

```python
# my_case_method.py

from youqu3.dogtail import Dogtail
from method.base_method import BaseMethod

class MyCaseMethod(BaseMethod):

	def click_dde_file_manage_on_dock(self)
    	"""任务栏点击文件管理器"""
        Dogtail().ele("Btn_文件管理器").click()
```

#### 4.2.2. 用例层

用例层负责管理用例逻辑，其中所有的用例步骤都应该调用方法层对应的方法。

```python
# test_mycase_001.py 

from method.my_case_method import MyCaseMethod
from case.base_case import BaseCase

class TestMyCase(BaseCase):
    
    def test_mycase_001(self):
        """从任务栏启动文件管理器"""
        MyCaseMethod().click_dde_file_manage_on_dock()
        self.assert_process_status(True, "dde-file-manager")
```

#### 4.2.3. 断言

用例工程的断言方法类 `assert_method::AssertMethod` 继承了 YouQu3 的 `assert.py::Assert`：

```python{3,5}
# assert_method.py

from youqu3.assert import Assert

class AssertMethod(Assert):
    ...
```

然后 `AssertMethod` 作为父类被 `BaseCase` 继承：

```python{3,5}
# base_case.py

from method.assert_method import AssertMethod

class BaseCase(AssertMethod):
    ...
```

最后所有的用例类均继承 `BaseCase`，这样在用例中能够使用统一的断言语句：

```python{3,5,9}
# test_mycase_001.py

from case.base_case import BaseCase

class TestCase(BaseCase):
    
    def test_mycase_001(self):
        ...
		self.assert_**  
```

#### 4.2.4. 配置对象

用例工程配置对象继承 YouQu3 配置类，以此来获取框架已有的公共配置，同时定义一些用例工程相关的配置，如：`assert_res`、`static_res`、`image_res` 的路径，以便方法或用例中能够获取到。

#### 4.2.5. 用例标签管理文件

在 CSV 文件中定义用例对象的标签：

- 维护标签时，不需要修改用例脚本。
- 日常维护过程中，跳过用例可以直接通过修改 CSV 文件来控制用例是否跳过。

#### 4.2.6. 默认环境变量管理文件

定义虚拟环境相关的一些环境变量，以此控制虚拟环境创建、运行的行为。

#### 4.2.7. 依赖管理文件

定义用例工程所需要的依赖包。

#### 4.2.8. 调试用例驱动

用于用例开发调试过程中，方便用例开发者以 debug 模式运行脚本。

## 5. 演进规划

#### 可视化配置

提供一个 Web 页面化的配置功能，配合远程执行功能，支持对各种测试策略的驱动执行。

#### 非开发者下运行

支持在非开发着环境下运行用例：

- 减少系统自动化环境准备的难度；
- 更贴合大部分真实用户的使用场景；

#### 过程钩子

支持对用例执行的各个阶段插入钩子，框架预设一些文件接口规范，用户只需要创建符合框架定义的文件命名规范脚本文件，即可自动被框架加载并执行。