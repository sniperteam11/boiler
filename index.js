const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const config = require('./config/key');
const {user} = require("./models/User");

//application/x-www-form-urlencoded 정보를 가져온다
app.use(bodyParser.urlencoded({extended:true})); //
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Garden:dlwjddnjs404!@boiler-xet6b.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true, useFindAndModify: false
}).then(()=>console.log('MongoDB connected...'))
  .catch(err=>console.log(err))


app.get('/', (req, res) => res.send('Hello World!~~안녕하세요^ asdasdasd'))

app.post('/register',(req, res)=>{
  //회원가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다. 

  

  const user = new User(req.body)
  user.save((err,userinfo)=>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      sucess: true
    })
  })
})

app.listen(port, () => console.log(`Example app listening on port${port}`))