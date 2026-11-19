import { env } from "@/app/src/configs/env.config";
import { ApiResponse } from "@/app/src/interfaces/api.interface";
import ApiError from "@/app/src/libs/api.lib";
import { auth } from "@/app/src/libs/auth.lib";
import { extractApiError } from "@/app/src/utils/api.util";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const resend = await auth.sendVerificationEmail(
      {
        email: body.email,
      },
      {
        headers: {
          "content-type": "application/json",
          origin: env.ORIGIN,
        },
      },
    );

    if (resend.error) {
      throw new ApiError(
        resend.error.message || "An error occurred during sending.",
        resend.error.status,
      );
    }

    const apiResponse: ApiResponse<{ message: string }> = {
      data: { message: "Email verification has been sent." },
      success: true,
    };

    return NextResponse.json(apiResponse, { status: 200 });
  } catch (error) {
    const { message, status } = extractApiError(error);

    return NextResponse.json({ success: false, data: { message } }, { status });
  }
}
