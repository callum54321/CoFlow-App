const express = require('express')
const app = express()
const cors = require('cors')
const UserModel = require('./config/database')

app.use(cors())
app.use(express.urlencoded({ extended: true }))

//Route
app.post('/api/register', (req, res) => {
    let newUser = new UserModel({
        username: req.body.username,
        password: req.body.password
    })

    user.save().then(console.log(newUser))

    res.send({ success: true })
})

app.post('/api/login', (req, res) => {
    res.json(users)
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

app.listen(5000, () => {
    console.log('Server started on http://localhost:5000')
})