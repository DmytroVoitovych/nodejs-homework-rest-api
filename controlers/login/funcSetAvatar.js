const path = require("path");
const { User } = require("../../models/user");
const fs = require('fs').promises;
var Jimp = require('jimp');


const funcSetAvatar = async (req, res) => {
   
    const { path: temp, originalname } = req.file;
    const { _id: id } = req.user;
    try {
                
        const resAvatar = path.join(__dirname, '../../', 'public', 'avatars', `${id}${originalname}`); //путь к хранилищу
        const img = await Jimp.read(`${temp}`); // ищем аватарку
        img.resize(250, 250).write(temp); // изменяем сохраняем
        await fs.rename(temp, resAvatar); // перемещаем файл с временного хранилища в постоянное
        const avatarURL =  path.join('public', 'avatars', `${id}${originalname}`); //ссылка аватарки
        await User.findByIdAndUpdate(id, { avatarURL }); //обновляем аватарку
        res.json({ avatarURL });
        
    } catch (err) {
       
        fs.unlink(temp); //при не удачном перемещении удаляем временный файл
        throw err;
    }
};

module.exports = funcSetAvatar;