const express = require('express')
//  object destructuring
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')
const app = express()
const port = 3000


app.use(express.json())

app.post("/todo",async (req,res) => {
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload)
    if(!parsedPayload.success){
        res.status('411').json({
            msg: 'you sent wrong inputs'
        })

        return;
    }
    await todo.create({
        name: payload.name,
        description: payload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos",async (req,res) => {
    const todos = await todo.find({})
    // console.log(todos)
    res.json({
        todos
    })
})

app.put("/completed", async (req,res) => {
    // input validation
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload)
    if(!parsedPayload.success){
        res.status('411').json({
            msg: 'you sent wrong inputs'
        })

        return;
    }

    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(port)