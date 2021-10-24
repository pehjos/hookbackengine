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
var allowlist = ['http://localhost:3000/', 'http://localhost:3000/']
var corsOptionsDelegate = function (req, callback) { 
 var corsOptions; if (allowlist.indexOf(req.header('Origin')) !== -1) 
 { corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response }
  else { corsOptions = { origin: false } // disable CORS for this request } callback(null, corsOptions)
        // callback expects two parameters: error and options } 
       app.get('/', cors(corsOptionsDelegate),
        function (req, res, next) { res.json({msg: 'heello hook back is working'}) }) 
    
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
// app.get('/' ,(req, res) => {
// res.send('heello hook back is working')
  
// })

const PORT = process.env.PORT|| 5000;

mongoose.connect( process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

  app.listen(PORT, () => 
  
  console.log(`Server Running on Port: http://localhost:${PORT}/`))


