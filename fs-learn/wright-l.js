const fs = require("fs");

fs.writeFile("./files/w.txt","121231",'utf-8', (err) => {
    if(err) {
        return console.log("文件写入错误！ " + err.message);
    }
    return console.log("文件写入成功！");
})

