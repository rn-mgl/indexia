import { ApiResponse } from "./api.interface";

export type RegisterApiResponse = ApiResponse<{ message: string }>;

export type LoginApiResponse = ApiResponse<{ message: string }>;

export type SendingApiResponse = ApiResponse<{ message: string }>;

export type VerifyApiResponse = ApiResponse<{ message: string }>;

export type LogoutApiResponse = ApiResponse<{ message: string }>;
