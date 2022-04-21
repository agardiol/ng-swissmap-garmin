import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, Observable, of, retry, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeoAdminAPIService {

  private _geoAdminAPIBaseUrl = environment.geoAdminAPIBaseUrl;

  constructor(
    private _httpClient: HttpClient,
  ) { }

  getLayersMetadata(): Observable<any> {
    const url = this._geoAdminAPIBaseUrl;
    return this._httpClient.get(url).pipe(
      retry(3),
      tap(_ => this.log('fetched getLayersMetadata')),
      catchError(this.handleError<any>('getHeroes', []))
    )
  }


    /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
     private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

      /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
    //this.messageService.add(`HeroService: ${message}`);
  }

}
