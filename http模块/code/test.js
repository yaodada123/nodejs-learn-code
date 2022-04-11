const http = require("http")

const server = http.createServer()

server.on('request', (req, res) =>{
    const url = req.url;
    const method = req.method;
    const str = `你访问的地址是${url} , 你的请求方式是${method}`;
    res.setHeader('Content-type', 'text/html; charset=utf-8')
    res.end(str);
    // console.log(str);
})

server.listen(80, () => {
    console.log("server runing at http://127.0.0.1");
})