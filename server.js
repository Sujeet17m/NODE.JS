import http from 'node:http'
import { getDataFromDB } from './database/db'

const PORT = 8000

 const server = http.createServer((req, res) => {
    const destination = getDataFromDB()

    if (req.url === '/api' && req.method === 'GET'){
        res.setHeader('Content-Type','aplication/json')
        res.statusCode=200
        res.end(JSON.stringify(destination))
    }
 })

 server.listen(PORT , () => console.log(`connected on port : ${PORT}`)
 )