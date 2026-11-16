import { auth } from "@/app/lib/auth.lib";
import { createAuthClient } from "better-auth/react";
import { NextRequest } from "next/server";

export default async function POST(req: NextRequest) {
  const body = await req.json();

  const register = await auth.signUp.email({
    name: body.name,
    email: body.email,
    password: body.password,
  });
}
