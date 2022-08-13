// 用于测试slliu.wasm代码
// console.log("slliu");
// async function run() {
//     const importObject = {
//         console: {
//             log: () => {
//                 console.log("log info!");
//             },
//             error: () => {
//                 console.log("error info");
//             }
//         }
//     }
//     const response = await fetch("slliu.wasm");
//     const buffer = await response.arrayBuffer();
//     const wasm = await WebAssembly.instantiate(buffer, importObject);
//
//     const addTwoFunc = wasm.instance.exports.addTwo;
//     const result = addTwoFunc(10, 20);
//     console.log(result);
// }
//
// run();

import init, {hello} from "wasm_game";
init().then(() => {
    hello("slliu");
    console.log("ok");
})
