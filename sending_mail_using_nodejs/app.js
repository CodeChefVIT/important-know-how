const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({

    service:"gmail",
    auth:{
        user:"",
        pass:""
    }
});


var mailOptions = {
    from:"DarkDementor",
    to:"angadsharma1016@gmail.com",
    subject:"Mailed using nodejs",
    html: '<center><h1 style="color:red">AWESOME</h1></center>'
}


transporter.sendMail(mailOptions,(err,info)=>{

    if(err) console.log("Error sending mail");
    else    console.log("Mail sent! " + info.response);
});
