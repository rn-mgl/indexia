import { auth } from "@/app/src/libs/auth.lib";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const login = await auth.signIn.email({
      email: body.email,
      password: body.password,
    });

    return NextResponse.json({ success: true, data: { message: login } });
  } catch (error) {
    return NextResponse.json({
      success: false,
      data: { message: error },
    });
  }
}
