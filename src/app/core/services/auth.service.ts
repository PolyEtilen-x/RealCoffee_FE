import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: {
        id: string;
        email: string;
        role: 'user' | 'seller' | 'admin';
    };
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private API_URL = 'http://localhost:5000/api/auth';

    constructor(private http: HttpClient) {}

    login(email: string, password: string) {
        return this.http
        .post<LoginResponse>(`${this.API_URL}/login`, { email, password })
        .pipe(
            tap(res => {
            localStorage.setItem('accessToken', res.accessToken);
            localStorage.setItem('refreshToken', res.refreshToken);
            localStorage.setItem('user', JSON.stringify(res.user));
            })
        );
    }

    register(email: string, password: string) {
        return this.http.post(
        `${this.API_URL}/register`,
        { email, password }
        );
    }

    registerSeller(formData: FormData) {
        return this.http.post(`${this.API_URL}/register-seller`, formData);
    }

    logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('accessToken');
    }

    getUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    getRole(): 'user' | 'seller' | 'admin' | null {
        const user = this.getUser();
        return user ? user.role : null;
    }
}
