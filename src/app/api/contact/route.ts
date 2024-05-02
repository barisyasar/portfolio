import { sendMail } from "@/lib/mail";
import { contactSchema } from "@/types/contact.type";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  if (contactSchema.safeParse(body).error)
    return NextResponse.json(
      {
        message: "Invalid message.",
      },
      {
        status: 400,
      }
    );

  const res = await sendMail(body);
  if (res)
    return NextResponse.json({
      message: "Your message is successfully sent.",
    });
  else
    return NextResponse.json(
      {
        message: "Your message is couldn't sent.",
      },
      { status: 500 }
    );
}
