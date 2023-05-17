# test-i18n-voerka
voerka-i18n前端国际化方案示例
## 国际化插件使用步骤
### 1. 安装
```sh
# 全局安装 voerka-i18n的命令行工具
pnpm add -g @voerkai18n/cli
```
### 2. 初始化
```sh
# 在当前项目package.json目录下执行初始化命令
voerkai18n init
```
上述命令会在当前项目下安装运行时`@voerkai18n/runtime`，并且会在src目录下生成languages文件夹，会根据项目是否使用ts来生成ts/js文件
```
src
└── languages
    ├── idMap.ts         - 翻译文件id对照表，暂时无用
    ├── index.ts         - 提供t函数占位引用 
    └── settings.json    - 语言配置文件
```
`settings.json`内容如下:
```json
{
    "languages": [
        {
            "name": "zh",
            "title": "zh"
        },
        {
            "name": "en",
            "title": "en"
        }
    ],
    "defaultLanguage": "zh",
    "activeLanguage": "zh",
    "namespaces": {}
}
```
上述命令代表了：

- 本项目拟支持中文和英文两种语言。
- 默认语言是中文（即在源代码中直接使用中文）
- 激活语言是中文（代表当前生效的语言）

注意：

- voerkai18n init是可选的，voerkai18n extract也可以实现相同的功能。
- 一般情况下，您可以手工修改settings.json，如定义名称空间。
- voerkai18n init仅仅是创建languages文件，并且生成settings.json,因此您也可以自己手工创建。

### 3. t函数标记翻译内容
```vue
<template>
<!-- 普通文本直接用t函数标记 -->
<div>{{ t('首页') }}</div>
<!-- vue模板的属性和jsx的属性，都支持t函数标记 -->
<el-input :placeholder="t('请输入')" />
<!-- 位置差值变量 -->
<el-button type="primary" @click="count++">
  {{ count ? t('按钮点击了{}次', () => count) : t('请点击此按钮') }}
</el-button>
</template>

<script lang="ts" setup>
import { t } from '@/languages';
</script>
```
### 4. 提取&翻译
```sh
# 执行提取命令
voerkai18n extract
```
提取后，languages文件夹下回新增translates文件夹，内部的json文件就是提取的待翻译文本
```
src
└── languages
    ├── idMap.ts         - 翻译文件id对照表，暂时无用
    ├── index.ts         - 提供t函数占位引用 
    ├── settings.json    - 语言配置文件
    └── translates       - 所有需要翻译的内容
        └── default.json - 默认命名空间的待翻译内容
```

接下来就可以分别对language/translates文件夹下的所有JSON文件进行翻译了。`default.json`文件内容如下，其中第一条文字的英文翻译包含对单复数的处理。
```json
{
  "按钮点击了{}次": {
    "en": ["", "You have clicked once", "You have clicked twice", "You have clicked {} times"],
    "$file": ["components/HelloWorld.vue"]
  },
  "请输入": {
    "en": "please input",
    "$file": ["components/HelloWorld.vue"]
  },
  "首页": {
    "en": "Home",
    "$file": ["modules/home/views/Home.vue"]
  }
}
```
重点：如果翻译期间对源文件进行了修改，则只需要重新执行一下voerkai18n extract命令，该命令会进行以下操作：

- 如果文本内容在源代码中已经删除了，则会自动从翻译清单中删除。
- 如果文本内容在源代码中已修改了，则会视为新增加的内容。
- 如果文本内容已经翻译了一部份了，则会保留已翻译的内容。

总之，反复执行voerkai18n extract命令是安全的，不会导致进行了一半的翻译内容丢失，可以放心执行。
#### 自动翻译
voerkai18n除了手动翻译外，可通过voerkai18n translate命令来实现调用在线翻译服务进行自动翻译。
```sh
voerkai18n translate --provider baidu --appkey <在百度翻译上申请的密钥> --appid <在百度翻译上申请的appid>
```
### 5. 编译
当我们完成languages/translates下的所有JSON语言文件的翻译后（如果配置了名称空间后，每一个名称空间会对应生成一个文件），接下来需要对翻译后的文件进行编译。
```sh
voerkai18n compile
```
compile命令根据languages/translates/*.json和languages/settings.json文件编译生成以下文件：

```
src
└── languages
    ├── idMap.ts         - 文本信息id映射表
    ├── index.ts         - 包含该应用作用域下的翻译函数等
    ├── settings.json    - 语言配置文件
    ├── zh.js            - 语言包 - 中文
    ├── en.js            - 语言包 - 英文
    ├── *.js             - 更多语言包
    ├── formatters       - 自定义扩展格式化器
    │   ├── zh.js
    │   └── en.js
    └── translates       - 所有需要翻译的内容
        └── default.json - 默认命名空间的待翻译内容
```
### 切换语言
切换语言方法示例：
```js
import { VoerkaI18nScope } from '@/languages';

// 切换到英文
await VoerkaI18nScope.change("en")
```
考虑到切换语言时需要保证路有等动态生成内容的翻译，以及需要通知接口进行语言切换，可通过页面重新加载的方式进行语言切换。在界面上点击切换语言时，经过以下步骤进行切换：
1. 将目标语言代码存储在cookie或者localStorage中
2. 通过window.location.reload()进行页面刷新
3. 程序入口处，先调用change方法切换语言，再执行后续的初始化逻辑
