// Create custom middleware that logs request method, URL, and response time.

const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    const start = Date.now()
    res.on('finish', () => {
        const duration = Date.now() - start
        console.log(`${req.method} ${req.originalUrl} - ${duration}ms`)
    })
    next()
})

app.get("/", (req, res) => {
    res.send("Custom Logger Demo")
})

app.listen(port, ()=> {
    console.log(`server running on ${port}`)
})