const { User } = require("../../models/user");

const funcGetEmail = async (req, res) => {

    const { verificationToken } = req.params; // получаем сгенерированый токен 
    const user = await User.findOne({ verificationToken }); // если есть в базе отдаем юзера
    
    if (!user) { // есл нет
        const error = new Error(`User not found.`);
        error.status = 404;
        throw error;
    }
    else {
        await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: '' });// обновляем статус юзера
        res.json({
            message: 'Verification successful',
        });        
    }
};


module.exports = funcGetEmail;