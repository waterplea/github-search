import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';
import {catchError, EMPTY, Observable, Subscription} from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private readonly notifications: TuiNotificationsService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(e => this.showError(e) && EMPTY));
    }

    private showError({error, statusText}: HttpErrorResponse): Subscription {
        return this.notifications
            .show(error.message, {
                label: statusText,
                status: TuiNotification.Error,
            })
            .subscribe();
    }
}
