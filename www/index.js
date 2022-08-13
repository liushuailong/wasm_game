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

import init, {hello, World} from "wasm_game";
init().then(() => {
    console.log("ok");
    const CELL_SIZE = 20;
    const world = World.new(16);
    const worldWidth = world.width();

    const canvas = document.getElementById("sanke-world"); // 获取画布元素
    const context = canvas.getContext("2d"); // 使用canvas 2D api绘制图形

    canvas.width = worldWidth * CELL_SIZE;
    canvas.height = worldWidth * CELL_SIZE;
    // 1. 绘制游戏的区域
    function drawWorld() {
        context.beginPath(); // 开始一个新的路径, 清空子路径列表
        // 1.1 画方格的横线
        for (let x = 0; x < worldWidth + 1; x++) {
            context.moveTo(CELL_SIZE * x, 0); // 将子路径起始点移动到（x，y）
            context.lineTo(CELL_SIZE * x, CELL_SIZE * worldWidth); // 子路径起始点到终点进行绘制
        }
        // 1.2 画方格的竖线
        for (let y = 0; y < worldWidth + 1; y++) {
            context.moveTo(0, CELL_SIZE * y);
            context.lineTo(CELL_SIZE * worldWidth, CELL_SIZE * y);
        }
        context.stroke(); // 对路径进行着色
    }
    drawWorld(); // 执行绘制游戏区域方格

})
