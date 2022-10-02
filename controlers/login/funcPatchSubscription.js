const {User} = require('../../models/user');
const validSub = require('../../validation/dataValidationSub'); 

const funcPatchSubscription = async (req, res,) => {
    const { error } = validSub(req.body);

    if (error) {
        const err = new Error(error.message);
        err.status = 400;
        throw err;
    }
    else {
        const { _id } = req.user;

        if (_id) {
       
        const {email, subscription} = await User.findByIdAndUpdate(_id, req.body,{new: true}); // для возврата обновленного обьекта нужно указать 3 аргумент
        return res.status(200).json({ status: 'success', code: 200, data: { email, subscription } });
            
        }
        else {
            const error = new Error(`User with id=${_id} not found.`);
            error.status = 404;
            throw error;
        }
    }
    
};

module.exports = funcPatchSubscription;