// This class make possible the connection with the API
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"; // Comunicar con la API para enviar información
import { environment } from "src/environments/environment";
import { Observable, throwError } from "rxjs"; 
import { catchError } from 'rxjs/operators';

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

  postError(dir: string, model: object): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post<any>(`${environment.url}${dir}`, model)
    .pipe(catchError(this.handleError));
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
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      alert(error.error.mensaje);
    }
    // Return an observable with a user-facing error message.
    return throwError(error);
  }

  getById(dir:string, id:number) {
    return this.http.get<any>(`${this.url}${dir}/${id}`);
  }
/*
  update(dir: string, model:object): Observable<any> {
    return this.http.put<any>(`${environment.url}${dir}`, model);
  }*/

}

