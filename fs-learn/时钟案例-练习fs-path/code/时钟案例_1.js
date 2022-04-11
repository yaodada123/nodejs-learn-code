// 将素材下的index.html拆分成三个文件

// 导入模块
const fs = require("fs");
const path = require("path");

// 创建正则表达式匹配标签  style script
const regStyle = /<style>[\s\S]*<\/style>/;
const resJcript = /<script>[\s\S]*<\/script>/;

// 读取素材文件
fs.readFile(path.join(__dirname, "../素材/index.html"), 'utf-8', (err, dataStr) => {
    if(err) return console.log("文件读取失败！" + err.message );
    // 自定义方法获取要解析的三个文件的内容并写入指定路径
    resolveCSS(dataStr);
    resolveScript(dataStr);
    resolveHtml(dataStr);
})

function resolveCSS(htmlStr) {
    const cssArr = regStyle.exec(htmlStr);
    const resStr = cssArr[0].replace("<style>",'').replace("</style>", '');
    fs.writeFile(path.join(__dirname, '../block/index.css'), resStr, 'utf-8', err => {
        if(err) return console.log("css文件写入失败! " + err.message);
        console.log("css文件写入成功！ yhc是真的牛逼\n");
    })
}

function resolveScript(htmlStr) {
    const scriptArr = resJcript.exec(htmlStr);
    const resStr = scriptArr[0].replace("<script>", '').replace("</script>", '');
    fs.writeFile(path.join(__dirname, '../block/index.js'), resStr, 'utf-8', err => {
        if(err) return console.log("js文件写入失败！" + err.message);
        console.log("js文件写入成功! yhc是真的牛逼\n");
    })
}

function resolveHtml(htmlStr) {
    const newHtml = htmlStr.replace(regStyle , '<link rel="stylesheet" href="./index.css">')
    .replace(resJcript , '<script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname, '../block/index.html'), newHtml, 'utf-8', err => {
        if(err) return console.log("html文件写入错误！" + err.message);
        console.log("html文件写入成功！ yhc牛逼\n");
    })
}