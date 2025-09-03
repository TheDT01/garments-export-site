import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// To parse multipart form data in the app router, you need a middleware or parse manually.
// Here is an example assuming your deployment supports node runtime and formidable works:

import formidable from "formidable";

// Disable Next.js body parsing via a route segment config (in a separate config file or app-level config)
// Alternatively, process the raw request yourself in a custom handler.

export const runtime = "nodejs"; // specify node runtime (default) if needed for formidable

export async function POST(req) {
  try {
    const form = formidable({ multiples: true });

    // Wrap formidable parsing in a Promise, but parse req as a Node.js IncomingMessage
    // In Next.js app router, req is a Web API Request, so you need to get raw body as a stream.
    // This example assumes your hosting supports Node.js IncomingMessage; adjust as needed.

    const data = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const { category, quantity, price, fabric, details, contact } = data.fields;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let attachments = [];
    if (data.files.files) {
      const filesArray = Array.isArray(data.files.files)
        ? data.files.files
        : [data.files.files];

      attachments = filesArray.map((file) => ({
        filename: file.originalFilename,
        path: file.filepath,
      }));
    }

    await transporter.sendMail({
      from: `"RFQ Bot - Sapphire Design" <${process.env.SMTP_USER}>`,
      to: "sapphireknitwear2005@gmail.com",
      subject: "📩 New RFQ Submission",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color:#2563eb;">🧾 New RFQ Received</h2>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Target Price:</strong> ${price}</p>
          <p><strong>Fabric:</strong> ${fabric}</p>
          <p><strong>Details:</strong> ${details}</p>
          <p><strong>Buyer Email:</strong> ${contact}</p>
          <hr/>
          <p style="font-size: 12px; color: #666;">This RFQ was submitted via Sapphire Design LTD Website</p>
        </div>
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("RFQ error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
