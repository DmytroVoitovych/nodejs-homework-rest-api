const { User } = require("../../models/user");

const funcGetLogout = async (req, res) => {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: null }); // сохраняем токен в базу
    res.status(204).json();
};

module.exports = funcGetLogout; 