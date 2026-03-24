const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

//Route

app.get('/api/login', (req, res) => {
    const users = [
        {id: 1, name: 'John Smith', email: 'johnsmith@gmail.com'},
        {id: 2, name: 'Jane Smith', email: 'janesmith@gmail.com'},
        {id: 3, name: 'Adam Johnson', email: 'adamjohnson@gmail.com'},
    ]
    
    res.json(users)
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

app.listen(5000, () => {
    console.log('Server started on http://localhost:5000')
})