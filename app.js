var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail.com',
    auth:{
        user: 'prtknk13@gmail.com',
        pass: 'skdigsldkjfdk'
        }
});

var mailOptions ={
    from:'prtknk13@gmail.com',
    to:'maheshjadhav2122@gmail.com',
    subject:'testing our email program',
    text:'hello mahesh....how r u?'
};

transporter.sendMail(mailoptions,(error,response)=>{
    if(error){
        console.log(error)
    }else{
        console.log('mail sent')
    }
});