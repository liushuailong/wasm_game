# rust-wasm 项目创建流程

## 背景和参考
项目学习参考 bilibili 上从零开始创建一个 WebAssembly 游戏视频教程

## 项目框架搭建流程

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
# 7.2 wasm-pack 软件的安装
    # wasm-pack-init.exe
# 8. 安装wasm-pack
    # 网址：https://rustwasm.github.io/wasm-pack/installer/
# 9. 生成wesm二进制文件
# 9.1 每次更新rust库文件代码后都要运行，已生成新的二进制文件，IDE工具才会有更好的提示
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
# 14. 错误捕获，用于调试，weealloc和bootstrap.js
# 14.1 rust安装weealloc依赖包
# 14.2 捕获index.js中的错误
    # 新建bootstrap.js文件来捕获错误
    # 需要修改webpack.config.js
        # 修改入库文件未bootstrap.js
```

## Git使用

```bash
# 1. 创建项目文件夹
# 2. 编写.gitignore文件
# 3. 初始化仓库
git init
git add .
git commit -m "初始化仓库"
# 4. 创建github仓库
# 5. 关键本地仓库和远程仓库
git remote add origin git@github.com:liushuailong/wasm_game.git
git branch -M main
# 5.1 生成ssh秘钥
ssh-keygen -t ed25519 -C "liushuailong001@163.com"
# 5.2 将秘钥信息写到github账号中
# 6 提交git签名
git tag -s v0.1.0ab81b11 -m "the framework of the wasm project"
# 6.1 gpg4win软件的安装
# 6.2 生成gpg签名秘钥，将公钥提交到github账号中
gpg --gen-key
todo()!!
# 在提交tag时一直报这个错误，按照github上面配置了gpg秘钥也不行！！！
# gpg: skipped "E4C5E47217638EC3": No secret key
# gpg: signing failed: No secret key
# error: gpg failed to sign the data
# error: unable to sign the tag

# 7 修改最新一次本地提交的commit信息
git rebase -i HEAD~1
```

## 业务流程搭建
```bash
# 1. 创建画布
# 1.1 使用rust的动态数组Vec来存储网格中的位置


```