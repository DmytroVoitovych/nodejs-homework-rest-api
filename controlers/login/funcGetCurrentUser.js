const {User} = require('../../models/user');

const funcGetCurrentUser = async (req, res) => {
    const { email, subscription } = req.user;

    res.json({
        status: 200,
        data: {email, subscription}
    });

}; 

module.exports = funcGetCurrentUser;