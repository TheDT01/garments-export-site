import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("❌ Missing EMAIL_USER or EMAIL_PASS env vars");
    }

    console.log("📨 Sending sample request from:", body.email);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Sample Wizard" <${process.env.EMAIL_USER}>`,
      to: "sapphireknitwear2005@gmail.com",
      subject: "📦 New Sample Request",
      html: `
        <h2>New Sample Request</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Company:</b> ${body.company}</p>
        <p><b>Sample Type:</b> ${body.sampleType}</p>
        <p><b>Fabric:</b> ${body.fabric}</p>
        <p><b>Sizes:</b> ${body.sizeSet}</p>
        <p><b>Courier:</b> ${body.courier}</p>
        <p><b>Notes:</b> ${body.notes}</p>
      `,
    });

    console.log("✅ Email sent successfully");
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("❌ Email send error:", err.message);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
