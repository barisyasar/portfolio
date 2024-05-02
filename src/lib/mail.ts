import nodemailer from "nodemailer";

export async function sendMail({
  email,
  name,
  surname,
  subject,
  message,
}: {
  name: string;
  surname: string;
  subject: string;
  email: string;
  message: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    await transport.sendMail({
      from: SMTP_EMAIL,
      replyTo: email,
      subject,
      to: SMTP_EMAIL,
      html: `<div>
      <h1>${name} ${surname}</h1>
     <p>${message}</p> 
      </div>`,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
