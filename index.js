import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import route from './modules/employee/routes/employee.routes.js'

const app = express();
app.use(bodyParser.json())
dotenv.config()
const PORT = process.env.PORT || 8000
const MONGOURL = process.env.MONGO_URL


mongoose.connect(MONGOURL)
.then(() => {
    console.log('Database connected successfully.')
})
.catch((err)=>{
    console.log(err)
})

app.use('/api/employe',route)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})