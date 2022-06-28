// This class make possible the connection with the API
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"; // Comunicar con la API para enviar información
import { environment } from "src/environments/environment";
import { Observable, throwError } from "rxjs"; //observa lo que sucede en el entorno html

@Injectable({
  providedIn: "root",
})

export class ApiService {
  url = environment.url;
  public infoJson:any={};
  constructor(private http: HttpClient) {}

  post(dir: string, model: object): Observable<any> {
    return this.http.post<any>(`${environment.url}${dir}`, model);
  }

  postAndImage(dir: string, model: object){
    const headers = new HttpHeaders();
    return this.http.post<any>(`${environment.url}${dir}`, model, {
      headers: headers
    }).pipe(catchError(this.handleError));
  }

  postAndImageNotErrors(dir: string, model: object){
    const headers = new HttpHeaders();
    return this.http.post<any>(`${environment.url}${dir}`, model, {
      headers: headers
    });
  }

  getAll(dir: string){
    return this.http.get<any>(`${this.url}${dir}`);
  }
  
  getJSON(dir:string, id:number){
    return this.http.get(`${this.url}${dir}/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  // This method is in charge for saving an object in the database


  //Este método interactúa
  /*getAll(dir:string, model?:object): Observable<any>{
    return this.http.get<any>(`${this.url}${dir}`, model);
  }*/

  getById(dir:string, id:number): Observable<any>{
    return this.http.get<any>(`${this.url}${dir}/${id}`);
  }
/*
  update(dir: string, model:object): Observable<any> {
    return this.http.put<any>(`${environment.url}${dir}`, model);
  }*/

}
function catchError(handleError: (error: HttpErrorResponse) => Observable<never>): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error("Function not implemented.");
}

