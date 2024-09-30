import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      secure: false,
    });

    console.log("req =>", req);

    const mailOptions = {
      from: process.env.GMAIL_USER, // Always your email
      to: process.env.GMAIL_USER, // Your own email
      replyTo: email, // The user's email will appear in 'reply-to'
      subject: `Contact Form Submission (Portfolio) from ${name} ${email}`,
      text: message,
    };
    console.log("mailOptions =>", mailOptions);

    const sendMail = await transporter.sendMail(mailOptions);
    console.log("sendMail =>", sendMail);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
