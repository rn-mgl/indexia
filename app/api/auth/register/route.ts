import { auth } from "@/app/src/lib/auth.lib";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const register = await auth.signUp.email({
      name: body.name,
      email: body.email,
      password: body.password,
    });

    return NextResponse.json({ success: true, data: { message: register } });
  } catch (error) {
    return NextResponse.json({
      success: false,
      data: { message: error },
    });
  }
}
