// This class make possible the connection with the API
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"; // Comunicar con la API para enviar información
import { environment } from "src/environments/environment";
import { Observable } from "rxjs"; //observa lo que sucede en el entorno html

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

  postImage(dir: string, model: object){
    const headers = new HttpHeaders();
    return this.http.post<any>(`${environment.url}${dir}`, model, {
      headers: headers
    });
  }

  getPreinscripcion(){
    return this.http.get(`${this.url}preinscripcion`);
  } 

  getDelegados(){
    return this.http.get(`${this.url}delegado`);
  }

  getAll(dir: string){
    return this.http.get<any>(`${this.url}${dir}`);
  }

  getJugadores(){
    return this.http.get(`${this.url}jugador`);
  }

  // This method is in charge for saving an object in the database


  //Este método interactúa
  /*getAll(dir:string, model?:object): Observable<any>{
    return this.http.get<any>(`${this.url}${dir}`, model);
  }*/

  getById(dir:string, id:number): Observable<any>{
    return this.http.get<any>(`${this.url}/${dir}/${id}`);
  }

  getJSON(dir:string, id:number){
    return this.http.get(`${this.url}${dir}/${id}`);
  }
/*
  update(dir: string, model:object): Observable<any> {
    return this.http.put<any>(`${environment.url}${dir}`, model);
  }*/

}
