const multer = require('multer');
const path = require('path');

const tempPath = path.join(__dirname, '../', 'temp'); // путь к временным файлам
       
const multerConfig = multer.diskStorage({
    destination: (req, file, cb) => {  //указываем где будем хранить информацию
        cb(null, tempPath);
    },
    filename: (req, file, cb) => { // сохраняем под оригинальным именем
        cb(null, file.originalname);  
        
    },
    limits:  {
        fileSize: 15625
    }
});

const funcUpdateAvatar =  multer({
   storage: multerConfig
 });



module.exports = funcUpdateAvatar;