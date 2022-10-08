const { User } = require('../../models/user');
const sendEmail = require('../../utils/funcSendEmail');
const validEmail = require('../../validation/dataValidationEmail');

const funcPostRefetchEmail = async (req, res) => {

 const { email: mail } = req.body; 
 const { error } = await validEmail(req.body);

    if (error) {
        const err = new Error(error.message);
        err.status = 400;
        throw err;
    }
    else {
       
        const user = await User.findOne({email:mail});
        if (!user) {
            const err = new Error('User not found');
            err.status = 404;
            throw err;
        }
        else if(user.verify) { // если уже авторизован
          
            const err = new Error('Verification has already been passed');
            err.status = 400;
            throw err;
        }
        else { // повторная отправка
            
            const letter = {
            to: mail, subject: 'Подтверждение регистрации на сайте',
            html: `<a target='_blank' href='http://localhost:3006/api/contacts/auth/verify/${user.verificationToken}'>Нажмите для подтверждения</a>` //динамически сгереривонная ссылка для зарег пользвателя
            };
        
            await sendEmail(letter); 
            res.json({ message: "Verification email sent"});
        }
    }
};  
 
module.exports = funcPostRefetchEmail;