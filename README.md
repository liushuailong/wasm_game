# rust-wasm 项目创建流程

## 背景和参考
项目学习参考 bilibili 上从零开始创建一个 WebAssembly 游戏视频教程

## 项目搭建流程

```bash
# 1. 创建rust lib库用于rust编写代码生成wasm二进制文件
cargo new --lib wasm_game
# 2. 常见web目录：www用于存放前端代码
mkdir www && cd www
# 3. 使用npm初始化www目录
npm init
# 4. 安装webpack依赖包
npm install --save webpack
npm install --save webpack-cli
npm install --save copy-webpack-plugin
npm isntall --save-dev webpack-dev-server
# 4.1 配置webpack工具的配置文件
    # webpack.config.js 文件内容
        # const path = require('path');
        # 
        # const CopyWebpackPlugin = require("copy-webpack-plugin");
        # 
        # module.exports = {
        #     entry: "./index.js",
        #     output: {
        #         path: path.resolve(__dirname, "public"),
        #         filename: "index.js"
        #     },
        #     mode: "development",
        #     plugins: [
        #         new CopyWebpackPlugin({
        #             patterns: [{ from: "./index.html", to: "./"}],
        #         }),
        #     ],
        # }
# 5. 配置npm运行脚本
    # 在package.json的script中添加下面内容
      "dev": "webpack-dev-server",
      "build": "webpack build"
# 6. 创建public目录, 项目入口文件（index.js, index.html);
mkdir public
vim index.js
vim index.html

# 7. 配置cargo.toml文件
    # [dependencies]
    # wasm-bindgen = "0.2.82"
    # 
    # [lib]
    # crate-type = ["cdylib"]
    # 
    # [package.metadata.wasm-pack.profile.release]
    # wasm-opt = false
# 7.1 编写库文件代码
    # 参考lib.rs
# 8. 安装wasm-pack
    # 网址：https://rustwasm.github.io/wasm-pack/installer/
# 9. 生成wesm二进制文件
wasm-pack build --target web
# 10. 修改webpack依赖
    # "dependencies": {
    #     "wasm_game": "file:../pkg",
    # },
# 11. 使npm找到依赖的包
npm install
# 12. 在index.js中初始化wasm并使用
    # import init, {hello} from "wasm_game";
    # init().then(() => {
    #     hello("slliu");
    #     console.log("ok");
    # });
# 13. 运行
npm run dev
```