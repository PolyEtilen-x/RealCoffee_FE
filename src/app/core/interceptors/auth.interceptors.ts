import { Injectable, inject } from '@angular/core';
import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

let isRefreshing = false;
const refreshTokenSubject = new BehaviorSubject<string | null>(null);

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);

  let authReq = req;

  const accessToken = authService.getAccessToken();

  if (accessToken) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true, // send token = true
    });
  } else {
    authReq = req.clone({
      withCredentials: true,
    });
  }

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (
        error.status !== 401 ||
        req.url.includes('/auth/login') ||
        req.url.includes('/auth/refresh')
      ) {
        return throwError(() => error);
      }

      // wait refreshtoken
      if (isRefreshing) {
        return refreshTokenSubject.pipe(
          filter((token) => token !== null),
          take(1),
          switchMap((token) => {
            return next(
              req.clone({
                setHeaders: {
                  Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
              })
            );
          })
        );
      }

      // start refresh token
      isRefreshing = true;
      refreshTokenSubject.next(null);

      return authService.refreshToken().pipe(
        switchMap(() => {
          const newToken = authService.getAccessToken();
          refreshTokenSubject.next(newToken);
          isRefreshing = false;

          return next(
            req.clone({
              setHeaders: {
                Authorization: `Bearer ${newToken}`,
              },
              withCredentials: true,
            })
          );
        }),
        catchError((err) => {
          isRefreshing = false;
          authService.logout().subscribe();
          return throwError(() => err);
        })
      );
    })
  );
};
