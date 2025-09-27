const express = require('express')
const app =  express()
const port = 3000

app.get('/', (req, res)=> {
    res.send("Hello World!")
})

app.use((req, res) => {
    res.status(404).json({error: "Not Found"})
})

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})