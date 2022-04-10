const fs = require("fs");

fs.readFile("./模板/成绩.txt", 'utf-8', (err, data) => {
    if(err) {
        return console.log("读取失败！" + err.message );
    }
    const oldList = data.split(" ");
    const newList = [];
    oldList.forEach(item => {
        newList.push(item.replace("=", ":"));
    })
    const newStr = newList.join("\r\n");
    // console.log(newStr);
    fs.writeFile("./导出/res_1.txt", newStr, 'utf-8', err => {
        if(err) {
            return console.log("写入失败！" + err.message );
        }
        return console.log("写入成功！！！");
    })
})