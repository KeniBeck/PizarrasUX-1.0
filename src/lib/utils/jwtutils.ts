import { DecodedToken } from "../interfaces/TokenInterface";

export const decodeToken = (token: string | null): DecodedToken | null => {
    if (!token) return null;

    try {
        // Dividir el token en sus partes (header, payload, signature)
        const parts = token.split('.');
        if (parts.length !== 3) return null;

        // Decodificar la parte del payload (segunda parte)
        const payload = parts[1];

        // Convertir la base64Url a base64 estándar
        const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');

        // Decodificar base64 a string y luego parsear como JSON
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );

        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Error decodificando el token:', error);
        return null;
    }
};

export const isTokenExpired = (token: string | null): boolean => {
    if (!token) return true;

    const decoded = decodeToken(token);
    if (!decoded || !decoded.exp) return true;

    // La fecha de expiración en segundos vs tiempo actual en segundos
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
};