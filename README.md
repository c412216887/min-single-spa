# 打包工具使用 rollup

# 包管理工具使用 pnpm

# 使用 typescript 语法

## 在 rollup 打包中，将 ts 编译为 js 文件，这个编译使用

1. rollup 打包
   将 index.ts 文件打包成 index.js
   什么是打包？
   合并
   压缩
   转译 ts -> js
   rollup 同时可以打印不同 format 的 js 文件
   esmodel
   commonjs
   umd
   其中打包工具只认识 js 文件，为了处理其他文件，需要引入插件来改变打包的行为
   例如，处理 json 文件的引入，需要引入 rollup-plugin-json
   处理 ts 文件，需要引入 @rollup/plugin-typescript
