import { env } from "@/app/src/configs/env.config";
import { ApiResponse } from "@/app/src/interfaces/api.interface";
import ApiError from "@/app/src/libs/api.lib";
import { auth } from "@/app/src/libs/auth.lib";
import { extractApiError } from "@/app/src/utils/api.util";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    let setCookies: string[] = [];

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
        onSuccess: ({ response }) => {
          const headers = response.headers;

          setCookies = headers.getSetCookie();
        },
      },
    );

    if (login.error) {
      throw new ApiError(
        login.error?.message || "An error occured during login.",
        login.error.status,
      );
    }

    const apiResponse: ApiResponse<{ message: string }> = {
      data: { message: "Logged in successfully." },
      success: true,
    };

    const response = NextResponse.json(apiResponse, {
      status: 200,
    });

    for (const cookie of setCookies) {
      response.headers.append("set-cookie", cookie);
    }

    return response;
  } catch (error: unknown) {
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
