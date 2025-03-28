const {Contact} = require('../../models/contact');

const funcGetContacts = async ({ user, query }, res) => {
  
    const { page = 1, limit = 20,  } = query; // пагинация
    const skip = (page - 1) * limit;
    const fav = query.favorite;
   
    if (fav !== undefined) { //  фильтрация будет работать если она включена в строку запроса иначе код ниже дефолтный
        return res.json({
        status: 200,
      data: await Contact.find({ owner: user._id, favorite: fav},'',{skip, limit: +limit, }).populate('owner', '_id email'),
    })
    }

  return res.json({ // отобразить колекцию если параметр favorite не установлен 
        status: 200,
      data: await Contact.find({ owner: user._id,},'',{skip, limit: +limit, }).populate('owner', '_id email'),
    })
}; // find без аргументов возращает всю колекцию
// const funcGetContacts = async (_, res) =>  res.json({ status: 200, data: await Contact.find({},'name email phone'), }); // вторым аргументом можна передать определенные поля для вывода с колекции

module.exports = funcGetContacts;