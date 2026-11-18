import { ApiResponse } from "./api.interface";

export type RegisterApiResponse = ApiResponse<{ message: string }>;

export type LoginApiResponse = ApiResponse<{ message: string }>;
