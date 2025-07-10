import { HttpClient, HttpErrorResponse, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HTTP_CONFIG, HttpRequestConfig } from '../interceptors/http-context';

export interface IHttpService {
  get(url: string, options?: any, config?: HttpRequestConfig): Observable<any>;
  post(url: string, body: any, options?: any, config?: HttpRequestConfig): Observable<any>;
  put(url: string, body: any, options?: any, config?: HttpRequestConfig): Observable<any>;
  patch(url: string, body: any, options?: any, config?: HttpRequestConfig): Observable<any>;
  delete(url: string, options?: any, config?: HttpRequestConfig): Observable<any>;
}

@Injectable({
  providedIn: 'root'
})
export abstract class HttpService implements IHttpService {

  constructor(private http: HttpClient) { }

  abstract getUrl(path: string): string;

  private getContext(config?: HttpRequestConfig): HttpContext {
    return new HttpContext().set(HTTP_CONFIG, config || {});
  }

  public get(path: string, options: any = {}, config?: HttpRequestConfig): Observable<any> {
    const url = this.getUrl(path);
    options.context = this.getContext(config);
    return this.http.get(url, options).pipe(catchError(this.handleError));
  }

  public getWithQuery(path: string, query: any = {}, config?: HttpRequestConfig): Observable<any> {
    const url = this.getUrl(path);

    let params = new HttpParams();
    if (query && typeof query === 'object') {
      Object.keys(query).forEach(key => {
        if (query[key] !== undefined && query[key] !== null) {
          params = params.set(key, query[key]);
        }
      });
    }

    const options: any = {
      params,
      context: this.getContext(config)
    };

    return this.http.get(url, options).pipe(catchError(this.handleError));
  }

  public post(path: string, body: any, options: any = {}, config?: HttpRequestConfig): Observable<any> {
    const url = this.getUrl(path);
    options.context = this.getContext(config);
    return this.http.post(url, body, options).pipe(catchError(this.handleError));
  }

  public put(path: string, body: any, options: any = {}, config?: HttpRequestConfig): Observable<any> {
    const url = this.getUrl(path);
    options.context = this.getContext(config);
    return this.http.put(url, body, options).pipe(catchError(this.handleError));
  }

  public patch(path: string, body: any, options: any = {}, config?: HttpRequestConfig): Observable<any> {
    const url = this.getUrl(path);
    options.context = this.getContext(config);
    return this.http.patch(url, body, options).pipe(catchError(this.handleError));
  }

  public delete(path: string, options: any = {}, config?: HttpRequestConfig): Observable<any> {
    const url = this.getUrl(path);
    options.context = this.getContext(config);
    return this.http.delete(url, options).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ha ocurrido un error en la operación';
    
    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(() => new Error(errorMessage));
  }  
}
