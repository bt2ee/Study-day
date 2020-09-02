#### Git 提交说明
> 依照 [Angular 规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)

Git 每次提交时候都需要手写**提交说明**（Commit message）:
```bash
$ git commit -m "hello world"
```

#### 规范的提交说明
- 提供更多的历史信息，方便快速浏览
- 可以过滤某些 commit，便于筛选代码 review
- 可以追踪 commit 生成更新日志
- 可以关联 issues

#### Git 提交结构

```js
<Header> <Body> <Footer>
```

**Header**

Header 包括三个字段 type(必需)、scope(可选)、subject(必需)

```js
<type>(<scope>): <subject>
```

type 说明了 commit 的提交性质
- feat： 新功能（feature)
- fix: 修补 bug
- docs: 编写文档
- style: 格式化，文档样式调整
- refactor: 重构某个功能点
- test: 增加测试用例相关代码
- chore: 一些杂事

scope 说明 commit 的影响范围。

subject 是 commit 的简短描述，不超过50个字符。
- 以动词开头
- 结尾不加句号

**Body**
commit的详细描述，说明代码提交的详细说明。

**Footer**
如果代码的提交是不兼容变更或关闭缺陷，则Footer必需，否则可以省略。

#### Commitizen
[commitizen/cz-cli](https://github.com/commitizen/cz-cli) 实现规范化提交说明的工具

```js
npm install -g commitizen
```

#### Commitizen 适配器
**cz-conventional-changelog**

如果需要在项目中使用 commitizen 生成符合 AngularJS 规范的提交说明，初始化 `cz-conventional-changelog` 适配器：
```bash
$ commitizen init cz-conventional-changelog --save --save-exact
```

初始化命令主要进行了3件事情:
- 安装 `cz-conventional-changelog` 依赖
- 将依赖保存至 `package.json` 中 `devDependencies` 字段
- 在 `package.json` 新增 `config.commitizen` 字段信息，主要用于配置 cz 工具的适配器路径：

  ```json
  "devDependencies": {
  "cz-conventional-changelog": "^2.1.0"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
  ```

接下来可以适用 `git cz` 代替 `git commit`

#### Commitizen 校验

**commitlint**

校验提交说明是否符合规范，安装校验工具 commitlint：
```bash
$ npm install --save-dev @commitlint/cli
```

**@commitlint/config-conventional**

安装符合 Angular 风格的校验规则

```bash
$ npm install --save-dev @commitlint/config-conventional
```

在项目中新建 `commitlint.config.js` 文件并设置校验规则：

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
};
```

安装huksy（git钩子工具）
```bash
$ npm install husky --save-dev
```

在 `package.json` 中配置 `git commit` 提交时的校验钩子：
```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

#### Commitizen日志

如果使用了 cz 工具集，配套 `conventional-changelog` 可以快速生成开发日志：

```bash
npm install conventional-changelog -D
```

在 `pacage.json` 中加入生成日志命令：

```json
"version": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md"
```
