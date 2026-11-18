export type ServerResponse<T> =
  | { success: true; data: T }
  | { success: false; data: { error: string; status: number } };

export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; data: { error: string; status: number } };
