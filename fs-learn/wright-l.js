const fs = require("fs");
const path = require("path");

const pathStr = path.join(__dirname, "./files/w.txt");

console.log( path.basename(pathStr, '.txt'));
console.log( path.extname(pathStr) );

fs.writeFile( pathStr,"121231",'utf-8', (err) => {
    if(err) {
        return console.log("文件写入错误！ " + err.message);
    }
    return console.log("文件写入成功！``");
})

