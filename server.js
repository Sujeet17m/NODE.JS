import http from 'node:http'//node: bcoz browser can confuse http between js & node

const PORT = 8000;

const server = http.createServer((req,res) => {
    console.log(req.url);

    if (req.url === '/api'){
        res.end('This is from the server')
    } else {
        res.end('Not Found')
    }
})

server.listen(PORT , () => console.log(`connected on port : ${PORT}`))