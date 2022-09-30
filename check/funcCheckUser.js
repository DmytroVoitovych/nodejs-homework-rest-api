const { User } = require('../models/user');
const bcrypt = require('bcryptjs'); //хеширование

const funcCheckUser = async({ body },_,next) => { 
    
    try {
        const { email, password,} = body;  // проверка на наличие и совпадение
        const user = await User.findOne({ email });
        const pass = await bcrypt.compare(password, user.password);
       
        if (!user || !pass) {
            const err = new Error("Email or password is wrong");
            err.status = 401;
            throw err;
        }
    
        next();
    } catch (err) {
        next(err);
    }
   
};

module.exports = funcCheckUser;