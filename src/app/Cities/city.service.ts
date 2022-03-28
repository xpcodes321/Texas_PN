import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { Cities } from "./city";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private CityURl = 'api/cities/cities.json';

  constructor(private http: HttpClient) { }

  getCities(): Observable<Cities[]> {
    return this.http.get<Cities[]>(this.CityURl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  
  getCity(id: number): Observable<Cities | undefined> {
    return this.getCities()
      .pipe(
        map((Cities: Cities[]) => Cities.find(p => p.CityList === id))
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
    
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
