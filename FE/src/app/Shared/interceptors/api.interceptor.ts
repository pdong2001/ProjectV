import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private messageService: MessageService,
    private router: Router,
    private auth: AuthService
  ) {}

  nextMessageAt: Date = new Date();
  processingUnauthorized: boolean = false;
  handleError(error: HttpErrorResponse) {
    console.log(error);
    switch (error.status) {
      case 500:
        if (new Date() >= this.nextMessageAt) {
          this.nextMessageAt = new Date(Date.now() + 2000);
          this.messageService.add({
            severity: 'error',
            summary: 'Thông báo',
            detail: `${error.error}`,
          });
        }
        break;
      case 401:
        if (!this.processingUnauthorized && new Date() >= this.nextMessageAt) {
          this.processingUnauthorized = true;
          new Promise(() => {
            alert('Bạn không có quyền truy cập vào chức năng này!');
            // const origin = location.origin;
            this.nextMessageAt = new Date(Date.now() + 2000);
            this.processingUnauthorized = false;
          });
        }
        break;
      default:
        break;
    }
    return throwError(() => error);
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request).pipe(catchError((e) => this.handleError(e)));
  }
}
