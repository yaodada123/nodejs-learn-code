const fs = require("fs");

fs.readFile("./模板/成绩.txt", 'utf-8', (err, resStr) => {
    if(err) {
        console.log("获取成绩失败！" + err.message );
    }
    else {
        // console.log( resStr );
    }
    let old = resStr.split(" ");
    // console.log(old);
    let newList = [];
    old.forEach(item => {
        // console.log(item);
        newList.push(item.replace("=", ":"));
    })
    // console.log(newList);
    const newStr = newList.join("\r\n");
    // console.log(newStr);
    // 将整理好的数据写入新的txt文件中
    fs.writeFile("./导出/res.txt", newStr, 'utf-8', err => {
        if(err) {
            console.log("写入错误！" + err.message );
        }
        else {
            console.log("写入成功！");
        }
    })
})