import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { RequestOptions } from '../util';

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    private baseURL = environment.baseURL;

    constructor(private http: HttpClient) {}

    get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
        const options = new RequestOptions({method: 'GET', url, params, headers});
        return this.request<T>(options);
    }

    post<T>(url: string, body: T, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
        const options = new RequestOptions({method: 'POST', url, body, params, headers});
        return this.request<T>(options);
    }

    put<T>(url: string, body: T, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
        const options = new RequestOptions({method: 'PUT', url, body, params, headers});
        return this.request<T>(options);
    }

    delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
        const options = new RequestOptions({method: 'DELETE', url, headers});
        return this.request<T>(options);
    }

    private request<T>(options: RequestOptions): Observable<T> {
        options.headers = options.headers || new HttpHeaders();
        options.params = options.params || new HttpParams();

        return this.http.request<T>(options.method, this.baseURL + options.url, options).pipe(
            tap(
                next => {},
                error => this.handleErrors(error)
            )
        );
    }

    private handleErrors(error: any) {
        // VER INTERCEPTOR DE ERRORES
        // f (err instanceof HttpErrorResponse) {
        //     if (!(err.status === 401 && (err.message === '' || (err.url && err.url.includes('/api/account'))))) {
        //         if (this.eventManager !== undefined) {
        //             this.eventManager.broadcast({ name: 'impehApp.httpError', content: err });
        //         }
        //     }
        // }
        switch (error.status) {
            case 500:
            case 400:
                break;
            default:
                console.error('ERROR', error);
                break;
        }
    }
}
