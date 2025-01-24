import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express();
app.use(bodyParser.json())
dotenv.config()
const PORT = process.env.PORT || 8000
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL)
.then(() => {
    console.log('database connected successfully.')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})