"use strict";
const nodemailer = require("nodemailer");
const { FORCE } = require("sequelize/types/index-hints");
const { User, Challenge } = require('../models')

async function main() {
  // Generate test SMTP service account from ethereal.email
  let testAccount = await nodemailer.createTestAccount();


  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass, 
    },
  });
//   grabs user data
  let users = await User.findAll()
  let usersData = await users.map(user => user.get({ plain: true }));
  let userEmails = ''
//   adds all user emails onto string userEmails for the 'to' section of info
  for(let i=0;i<usersData.length;i++){
    userEmails += `${usersData[i].email}, `
  }

//   gets challenge info for email template
  let challenges = await Challenge.findAll() // eventually, well add a where clause to this that searches by today's date
  let challengeData = await challenges.map(challenge => challenge.get({ plain: true }))
  console.log(challengeData)
  for(let i=0;i<challengeData.length;i++){
    
  }

  let info = await transporter.sendMail({
    from: '"dailyDoseOfCode@welove2Code.com', // sender address
    to: userEmails, // list of receivers
    subject: "Time for your daily challenge!", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// exports function to the main server file where it'll run on a setInterval for 24 hours
main().catch(console.error);
