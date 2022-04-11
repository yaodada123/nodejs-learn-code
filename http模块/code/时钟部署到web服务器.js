const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer();

server.on('request', (req, res) => {
    const url = req.url;
    let fpath = "";
    if(url == '/' || url == '/index.html')
        fpath = path.join(__dirname, "../../fs-learn/时钟案例-练习fs-path/素材/index.html")
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if(err) {
            let content = "404";
            res.end(content);
        }
        res.end(dataStr);
    })
})

server.listen(80, () => {
    console.log("server running at http://127.0.0.1 in 123");
})