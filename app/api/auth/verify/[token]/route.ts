import { env } from "@/app/src/configs/env.config";
import { ApiResponse } from "@/app/src/interfaces/api.interface";
import ApiError from "@/app/src/libs/api.lib";
import { auth } from "@/app/src/libs/auth.lib";
import { extractApiError } from "@/app/src/utils/api.util";

import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ token?: string }> },
) {
  try {
    const token = (await params).token || "";

    const verified = await auth.verifyEmail(
      {
        query: { token },
      },
      {
        headers: {
          "content-type": "application/json",
          origin: env.ORIGIN,
        },
      },
    );

    if (verified.error) {
      throw new ApiError(
        verified.error.message || "An error occurred during verification.",
        verified.error.status,
      );
    }

    const apiResponse: ApiResponse<{ message: string }> = {
      data: { message: "Account verified." },
      success: true,
    };

    return NextResponse.json(apiResponse, { status: 200 });
  } catch (error) {
    const { message, status } = extractApiError(error);

    return NextResponse.json({ success: false, data: { message } }, { status });
  }
}
