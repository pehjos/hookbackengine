import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
 import dotenv from 'dotenv';
import postRoutes from './route/post.js';
import userRoutes from './route/user.js';

const app = express();
 dotenv.config()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
 app.use(cors());

// app.use((req,res, next)=>{
//   res.setHeader('Access-Control-Allow-Origin',"*");
//   res.setHeader('Access-Control-Allow-Headers',"*");
//   res.header('Access-Control-Allow-Credentials', true);
//   next();
// });
// uninitialize git repo
// rmdir /s .git
app.use('/posts', postRoutes);
app.use("/user", userRoutes);
app.get('/', (req, res) => {
res.send('heello hook back is working')
 res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
})

const PORT = process.env.PORT|| 5000;

mongoose.connect( process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

  app.listen(PORT, () => 
  
  console.log(`Server Running on Port: http://localhost:${PORT}/`))


