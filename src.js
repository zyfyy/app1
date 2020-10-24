const http = require('http');
http.createServer((req, res) => {
    console.log('get req');
    res.end('zyfyy/app1');
}).listen(80, () => {
    console.log('port on: 80');
});
