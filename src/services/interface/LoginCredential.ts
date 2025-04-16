export interface LoginCredentials {
    user: number;
    password: string;
  }
  
  export interface AuthResponse {
    access_token: string;
    statusCode: number;
  }