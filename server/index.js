import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import  dotenv  from 'dotenv';
import router from './routers/makeup.js';
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()


app.use("/",router)
const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
const PORT=process.env.PORT


mongoose.connect(url).then(()=>console.log("connected")).catch(()=>console.log("dont connected"))


app.listen(PORT, () => {
  console.log(`Example app listening on port`)
})