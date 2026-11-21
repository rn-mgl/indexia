import { env } from "@/app/src/configs/env.config";
import { ApiResponse } from "@/app/src/interfaces/api.interface";
import ApiError from "@/app/src/libs/api.lib";
import { auth } from "@/app/src/libs/auth.lib";
import { extractApiError } from "@/app/src/utils/api.util";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    let setCookies: string[] = [];

    const signout = await auth.signOut(
      {},
      {
        headers: {
          "content-type": "application/json",
          origin: env.ORIGIN,
        },
        credentials: "include",
        onSuccess: ({ response }) => {
          const headers = response.headers;

          setCookies = headers.getSetCookie();
        },
      },
    );

    if (signout.error) {
      throw new ApiError(
        signout.error.message || "An error occurred during logout.",
        signout.error.status,
      );
    }

    const apiResponse: ApiResponse<{ message: string }> = {
      data: { message: "Logged out successfully." },
      success: true,
    };

    const response = NextResponse.json(apiResponse, { status: 200 });

    for (const cookie of setCookies) {
      console.log(cookie);
      response.headers.append("set-cookie", cookie);
    }

    return response;
  } catch (error) {
    const { message, status } = extractApiError(error);
    return NextResponse.json({ success: false, data: { message } }, { status });
  }
}
