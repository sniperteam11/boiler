const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, //sniper team11@naver.com에서 중간에 빈칸을 없애준다.
        unique: 1 //똑같은 이메일 못쓰게 한다
    },
    password:{
        type: String,
        minlength:5
    },
    lastname: {
        type: String, 
        maxlength: 50
    },
    role: { //어떤 유저가 관리자 or 일반 유저가 될 수 있도록 한다.
        type: Number,
        default: 0 
    },
    image: String,
    token: {//유효성 관리
        type:String
    },
    tokenExp: {
        type: Number
    }
    
})

const User = mongoose.model('user',userSchema)//위의 모델의 이름

module.experts = {User}