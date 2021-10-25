import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
 import dotenv from 'dotenv';
import postRoutes from './route/post.js';
import userRoutes from './route/user.js';

const app = express();
app.use(cors());
 dotenv.config()

app.options('*', cors()); // enable pre-flight app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use((req,res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));
  res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
  res.setHeader('Access-Control-Allow-Headers',"*");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
// uninitialize git repo
// rmdir /s .git
app.use('/posts', postRoutes);
app.use("/user", userRoutes);
app.get('/' ,(req, res) => {
res.send('heello hook back is working')
  
})

const PORT = process.env.PORT|| 5000;

mongoose.connect( process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

  app.listen(PORT, () => 
  
  console.log(`Server Running on Port: http://localhost:${PORT}/`))


