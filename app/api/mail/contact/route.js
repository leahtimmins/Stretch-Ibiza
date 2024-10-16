import nodemailer from 'nodemailer';

export async function POST(req, res) {
  
  const { 
    name,
    email,
    phone,
    interest,
    message
   } = await req.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    html: (
      `
      <p><b>Full name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone number:</b> ${phone}</p>
      <p><b>Reason for interest:</b> ${interest}</p>
      <p><b>Message:</b> ${message}</p>`
    )
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return Response.json({ message: 'Email sent' });
  } catch (err) {
      return Response.json({ error: err }, { status: 500 });
  }

  try {
      
      return Response.json({ message: 'Test' });
    } catch (err) {
      return Response.json({ error: err, status: 500});
    }
}