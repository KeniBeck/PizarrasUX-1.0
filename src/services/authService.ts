import axios, { AxiosError } from "axios";
import { LoginCredentials, AuthResponse } from "./interface/LoginCredential";
import { isTokenExpired } from "../lib/utils/jwtutils";
import api from "./client/axiosConfig";

class AuthService {
    private baseUrl = import.meta.env.VITE_API_URL;

    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        try {
            const response = await axios.post<AuthResponse>(
                `${this.baseUrl}/login`,
                credentials
            );

            if (response.data.access_token) {
                localStorage.setItem("token", response.data.access_token);
            }
            return response.data;
        } catch (error) {
            const status = (error as AxiosError).response?.data;
            if (axios.isAxiosError(error)) {
                console.error("Error durante el login:", error.response?.data);
            }
            throw status;
        }
    }

    // Método para cerrar sesión
    logout(): void {
        localStorage.removeItem("token");
        window.dispatchEvent(new CustomEvent("auth:logout"));
    }

    // Verificar si el usuario está autenticado
    async isAuthenticated(): Promise<boolean> {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                return false;
            }

            if (isTokenExpired(token)) {
                this.logout();
                return false;
            }
            const response = await api.get(`${this.baseUrl}/login/validation`);
            return response.status === 200;
        } catch (error) {
            console.error("Error verificando autenticación:", error);
            return false;
        }
    }

    isLocallyAuthenticated(): boolean {
        const token = this.getToken();
        return !!token && !isTokenExpired(token);
    }

    // Obtener el token actual
    getToken(): string | null {
        return localStorage.getItem("token");
    }
}


export const authService = new AuthService();