import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface User {
  id: string;
  email: string;
  role: 'user' | 'seller' | 'admin';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private http = inject(HttpClient);
    private platformId = inject(PLATFORM_ID);

    private accessToken: string | null = null;
    private user$ = new BehaviorSubject<User | null>(null);

    get user(): Observable<User | null> {
        return this.user$.asObservable();
    }

    get currentUser(): User | null {
        return this.user$.value;
    }

    isLoggedIn(): boolean {
        return !!this.accessToken;
    }

    getAccessToken(): string | null {
        return this.accessToken;
    }

    login(email: string, password: string) {
        return this.http
        .post<{
            data: {
            accessToken: string;
            user: User;
            };
        }>(
            `${environment.apiUrl}/auth/login`,
            { email, password },
            { withCredentials: true } //cookie
        )
        .pipe(
            tap((res) => {
            this.setSession(res.data.accessToken, res.data.user);
            })
        );
    }

    refreshToken() {
        return this.http
        .post<{
            data: { accessToken: string };
        }>(
            `${environment.apiUrl}/auth/refresh`,
            {},
            { withCredentials: true } // cookie auto send
        )
        .pipe(
            tap((res) => {
            this.accessToken = res.data.accessToken;
            })
        );
    }

    logout() {
        return this.http
        .post(
            `${environment.apiUrl}/auth/logout`,
            {},
            { withCredentials: true }
        )
        .pipe(
            tap(() => {
            this.clearSession();
            })
        );
    }

    private setSession(token: string, user: User) {
        this.accessToken = token;
        this.user$.next(user);

        //persist accessToken after reloading
        if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('accessToken', token);
        }
    }

    restoreSessionFromStorage() {
        if (!isPlatformBrowser(this.platformId)) return;

        const token = localStorage.getItem('accessToken');
        if (token) {
        this.accessToken = token;
        }
    }

    private clearSession() {
        this.accessToken = null;
        this.user$.next(null);

        if (isPlatformBrowser(this.platformId)) {
        localStorage.removeItem('accessToken');
        }
    }
}
