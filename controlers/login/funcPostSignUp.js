const {User} = require('../../models/user');
const { validation } = require('../../validation/dataValidationSignUp'); 
const bcrypt = require('bcryptjs'); //хеширование
const avatar = require('gravatar');
 
const funcPostSignUp = async (req, res, next) => {
   
    const { email:mail, password } = req.body;// тело запроса 
    const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));// хеш пароля 
    
   const { error } = await validation(req.body);
    
    if (error) {
        const err = new Error(error.message);
        err.status = 400;
       throw err;
    }
   
    else {
        const pathImg = await avatar.url(mail); // имитируем аватарку  
        const {email, subscription, avatarURL } = await User.create({email: mail, password: hashPass, avatarURL: pathImg});// метод для добавление в колекцию в мангуссе
        
        res.status(201).json({
            status: 'success', code: 201, data:{user: {email, subscription, avatarURL } } 
        });
    }
   
};

module.exports = funcPostSignUp;