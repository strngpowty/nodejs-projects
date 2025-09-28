const express = require('express')
const app = express()
const port = 3000
let todos = []
let taskID = 1

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send(todos)
})

app.post('/', (req, res) => {
    const {task} = req.body
    if(task === undefined) {
        return res.status(400).send("Please enter valid task")
    }
    const newTodo = {
        id: taskID++,
        task,
        completed: false
    }
    todos.push(newTodo)
    res.status(200).send(todos)
})

app.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const {task, completed} = req.body
    const taskIndex = todos.findIndex(t => t.id === id)
    if(taskIndex === -1) 
        return res.status(400).send("Task not found")
    if(task !== undefined) todos[taskIndex].task = task
    if(completed !== undefined) todos[taskIndex].completed = completed
    res.status(201).send(todos)
})

app.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const originalLength = todos.length
    todos = todos.filter(t => t.id !== id)
    if(originalLength === todos.length)
        return res.status(400).send("item not delted")
    res.status(204).send(todos)
})

app.listen(port, ()=> {
    console.log(`server running on ${port}`)
})