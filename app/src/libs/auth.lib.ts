import { createAuthClient } from "better-auth/react";
import { env } from "@/configs/env.config";

export const auth = createAuthClient({
  basePath: "/auth",
  baseURL: env.BETTER_AUTH_URL,
});
