const  transporter = require("../mail/nodemailerConfig");



const funcSendEmail = async (data) => {
    // console.log(data);
    try {
     await  transporter.sendMail({...data, from: 'begunec23@meta.ua'})
        return true;
} catch (error) {
        throw error;
        
}
};

module.exports = funcSendEmail;