import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
/**
 * entity  PageLink
 * @author juancallejasduque@gmail.com
 */
export class PageLinkService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPageLinks(): Observable<any> {
    return this.http.get(endpoint + 'pageLinks').pipe(
      map(this.extractData));
  }

  getPageLink(id): Observable<any> {
    return this.http.get(endpoint + 'pageLinks/' + id).pipe(
      map(this.extractData));
  }

  addPageLink (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + 'pageLinks', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log('added pageLink w/ id=${product.id}')),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updatePageLink (id, product): Observable<any> {
    return this.http.put(endpoint + 'pageLinks/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated pageLink id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deletePageLink (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'pageLinks/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted pageLink id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
