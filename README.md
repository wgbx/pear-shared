# @bosinc/shared

[![NPM 版本](https://img.shields.io/npm/v/@bosinc/shared.svg?style=flat)](https://npmjs.org/package/@bosinc/shared/)
[![NPM 下载量](http://img.shields.io/npm/dm/@bosinc/shared.svg?style=flat)](https://npmjs.org/package/@bosinc/shared)

一个轻量级的 React 公共组件与 Hooks 库，使用 dumi 构建文档。

## 使用方法

### 安装

```bash
pnpm add @bosinc/shared
```

> 如果这是一个私有包（GitHub Packages），需要在环境中设置 `NPM_TOKEN`，并确保 `.npmrc` 指向 GitHub Packages 的包仓库。
>
> 示例（`.npmrc`）：
>
> ```text
> registry=https://npm.pkg.github.com
> //npm.pkg.github.com/:_authToken=${NPM_TOKEN}
> ```

## API 与示例

主要 API 和示例请参阅 `dumi` 文档，其中包含组件属性、Hooks 用法和使用示例。

- [组件](/components/external-link)
- [Hooks 使用文档](/hooks/use-copy-to-clipboard)

## 开发

```bash
# 安装依赖
$ pnpm install

# 通过文档中的示例开发组件库
$ pnpm dev

# 构建组件库
$ pnpm run build

# 监听源码变化并持续构建组件库
$ pnpm run build:watch

# 构建文档站点
$ pnpm run docs:build

# 在本地预览构建后的文档站点
$ pnpm run docs:preview

# 检查项目中的潜在问题
$ pnpm run doctor
```

## 发布

```shell
npm run release -- --ci
```

## 文档组织

建议按以下方式组织文档：

- `README.md`：面向所有人的快速入门，介绍包的用途、安装与使用方法，以及常用命令。
- `docs/guide.md`：面向使用者的使用指南。
- `docs/maintainer.md`：面向维护者的工作流程，包括版本发布、包发布和问题排查。

为了让团队成员快速了解如何运行和发布项目，可以在 `README.md` 中保留简要说明，并链接到 `docs/maintainer.md` 查看完整步骤。

## 本地运行

```bash
# 1）安装依赖
pnpm install

# 2）启动文档与开发站点
pnpm dev
```

启动后，dumi 会在终端中输出访问地址和常用命令。

## 发布包

本项目通过 `publishConfig.registry` 配置发布到 GitHub Packages。

发布前请完成以下准备：

1. 确认你拥有目标组织或仓库的发布权限。
2. 确认已设置 `NPM_TOKEN`，且该令牌具有包发布权限。
3. 为当前终端环境配置发布认证（仓库中的 `.npmrc` 未包含令牌，以避免 CI/Vercel 安装时出现警告）。
4. 更新 `package.json` 中的版本号。
5. 在本地执行检查和构建。

```bash
# 为当前终端环境设置令牌
export NPM_TOKEN=YOUR_GITHUB_PACKAGES_TOKEN
npm config set //npm.pkg.github.com/:_authToken "$NPM_TOKEN" --location=user

# 质量检查
pnpm run doctor

# 构建产物
pnpm run build

# 发布包（同时会执行发布前脚本）
npm publish
```

详细发布说明请参阅 `docs/maintainer.md`。

## 许可证

MIT
