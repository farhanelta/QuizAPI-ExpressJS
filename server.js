const express = require('express')
const cors = require('cors')
const app = express()
const quizRoute = require('./router/quiz')
const jobsheetRoute = require('./router/jobsheet')
const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./models')
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Quiz Express JS API by Farhan Elta')
})

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)

app.listen(port, () => console.log(`App Listening on Port http://localhost:${port}!`))