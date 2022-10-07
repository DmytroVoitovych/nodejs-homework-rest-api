const {User} = require('../../models/user');
const { validation } = require('../../validation/dataValidationSignUp'); 
const bcrypt = require('bcryptjs'); //хеширование
const avatar = require('gravatar');
const sendEmail = require('../../utils/funcSendEmail');
var randomstring = require("randomstring");
 
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
        const verificationToken = randomstring.generate({length: 12, charset: 'alphabetic'}); //создаем токен верификации
        
        const { email, subscription, avatarURL } = await User.create({ // метод для добавление в колекцию в мангуссе
            email: mail, password: hashPass, avatarURL: pathImg, verificationToken
        });
        
            res.status(201).json({
            status: 'success', code: 201, data:{user: {email, subscription, avatarURL } } 
            });
        
        const letter = {
            to: email, subject: 'Подтверждение регистрации на сайте',
            html: `<a target='_blank' href='http://localhost:3006/api/contacts/auth/verify/${verificationToken}'>Нажмите для подтверждения</a>` //динамически сгереривонная ссылка для зарег пользвателя
        };
        
        await sendEmail(letter);
    }
   
};

module.exports = funcPostSignUp;