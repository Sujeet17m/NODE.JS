import http from 'node:http'
import { getDataFromDB } from './database/db.js'

const PORT = 8000

 const server = http.createServer((req, res) => {
    const destination = getDataFromDB()

    if (req.url === '/api' && req.method === 'GET'){
        res.setHeader('Content-Type','aplication/json')
        res.statusCode=200
        res.end(JSON.stringify(destination))
    } else if ( req.url.startsWith ('/api/continent') && req.method === 'GET'){
        const continent = req.url.split('/').pop()
        console.log(continent);
        const filteredData = destinations.filter((destination) => {
            return destination.continent.toLowerCase() === continent.toLowerCase()
        })
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify(filteredData))
    }
     else {
        res.setHeader('Content-Type','aplication/json')
        res.statusCode=404
        res.end(JSON.stringify({error : "not found", message :"The requested route does not exist"}))
    }
 })

 server.listen(PORT , () => console.log(`connected on port : ${PORT}`))