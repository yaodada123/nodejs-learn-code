// 第二遍练习
const fs = require("fs");
const path = require("path");

const regCss = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname , "../素材/index.html"), 'utf-8', (err, dataStr) => {
    if(err) return console.log("文件读取失败！" + err.message);
    // console.log(dataStr);
    resolveCSS(dataStr);
    resolveScript(dataStr);
    resolveHtml(dataStr);
})

function resolveCSS(htmlStr) {
    const cssArr = regCss.exec(htmlStr);
    const resStr = cssArr[0].replace("<style>", "").replace("</style>", "");

    fs.writeFile(path.join(__dirname, "../block/index.css"), resStr, 'utf-8', err => {
        if(err) return console.log("css文件写入失败！" + err.message);
        console.log("css文件写入成功！yhc牛逼\n");
    })
}

function resolveScript(htmlStr) {
    const scriptArr = regScript.exec(htmlStr);
    const resStr = scriptArr[0].replace("<script>", '').replace("</script>", '');

    fs.writeFile(path.join(__dirname, "../block/index.js"), resStr, 'utf-8', err => {
        if(err) return console.log("js文件写入失败！" + err.message);
        console.log("js文件写入成功！yhc牛逼\n");
    })
}

function resolveHtml(htmlStr) {
    const newHtml = htmlStr.replace(regCss, '<link rel="stylesheet" href="./index.css">')
    .replace(regScript, '<script src="./index.js"></script>')

    fs.writeFile(path.join(__dirname, "../block/index.html"), newHtml, 'utf-8', err => {
        if(err) return console.log("html文件写入失败！" + err.message);
        console.log("html文件写入成功！\n");
    })
}