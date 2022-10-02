const {User} = require('../../models/user');
const { validation } = require('../../validation/dataValidationSignUp'); 
const validResponse = require('../../auth/token');


const funcPostLogin = async (req, res, next) => {
   
   const { email: mail } = req.body; 
   const { error } = await validation(req.body);
    
    if (error) {
        const err = new Error(error.message);
        err.status = 400;
        throw err;
    }
    else {
        const { token, email, subscription, id } = validResponse(await User.findOne({ mail }));
        await User.findByIdAndUpdate(id, {token}); // сохраняем токен в базу
        
        res.status(200).json({
            status: 'success', code: 200, data:{token, user: {email, subscription} } 
        });
    }
};

module.exports = funcPostLogin;