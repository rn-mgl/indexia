import { env } from "@/app/src/configs/env.config";
import { auth } from "@/app/src/libs/auth.lib";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const login = await auth.signIn.email(
      {
        email: body.email,
        password: body.password,
      },
      {
        headers: {
          "content-type": "application/json",
          origin: env.ORIGIN,
        },
      },
    );

    if (login.error) {
      throw new Error(login.error.message);
    }

    return NextResponse.json({ success: true, data: { message: login } });
  } catch (error) {
    return NextResponse.json({
      success: false,
      data: { message: error.message },
    });
  }
}
