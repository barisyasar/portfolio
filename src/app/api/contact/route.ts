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
  return NextResponse.json({
    message: "Your message is successfully sent.",
  });
}
