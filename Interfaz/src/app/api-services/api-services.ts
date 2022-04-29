// This class make possible the connection with the API
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class ApiService {
  constructor(private http: HttpClient) {}
  // This method is in charge for saving an object in the database
  post(dir: string, model: object): Observable<any> {
    return this.http.post<any>(`${environment.url}${dir}`, model);
  }

  //This method
  getAll(dir:string, model?:object): Observable<any>{
    return this.http.get<any>(`${environment.url}${dir}`, model);
  }

  getById(dir:string, id:number): Observable<any>{
    return this.http.get<any>(`${environment.url}/${dir}/${id}`);
  }

  update(dir: string, model:object): Observable<any> {
    return this.http.put<any>(`${environment.url}${dir}`, model);
  }

}
