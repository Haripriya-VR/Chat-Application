const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/connectDB')
const connectDB = require('./config/connectDB')
const router = require('./routes/index')
const cookieParser = require('cookie-parser')

const app = express()


app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 8002

// api end points
app.use('/api', router)


app.listen(PORT, () => {
    console.log((`server is running at ${PORT}`));
})

