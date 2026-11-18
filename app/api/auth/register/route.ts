import { ApiResponse } from "@/app/src/interfaces/api.interface";
import ApiError from "@/app/src/libs/api.lib";
import { extractApiError } from "@/app/src/utils/api.util";
import { env } from "@/configs/env.config";
import { auth } from "@/libs/auth.lib";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const register = await auth.signUp.email(
      {
        name: body.name,
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

    if (register.error) {
      throw new ApiError(
        register.error?.message || "An error occured during login.",
        register.error.status,
      );
    }

    const apiResponse: ApiResponse<{ message: string }> = {
      data: { message: "Registered successfully." },
      success: true,
    };

    return NextResponse.json(apiResponse, { status: 200 });
  } catch (error) {
    const { message, status } = extractApiError(error);

    return NextResponse.json(
      {
        success: false,
        data: { message: message, status: status },
      },
      { status: status },
    );
  }
}
