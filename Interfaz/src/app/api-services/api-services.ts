// This class make possible the connection with the API
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // Comunicar con la API para enviar información
import { environment } from "src/environments/environment";
import { Observable } from "rxjs"; //observa lo que sucede en el entorno html

@Injectable({
  providedIn: "root",
})

export class ApiService {
  url = environment.url;
  constructor(private http: HttpClient) {}


  getPreinscripcion(){
    return this.http.get(`${this.url}preinscripcion`);
  }

  postPreinscripcion(model : object){
    return this.http.post(`${this.url}preinscripcion`, model);
  }

  post(dir: string, model: object): Observable<any> {
    return this.http.post<any>(`${environment.url}${dir}`, model);
  }

  getDelegados(){
    return this.http.get(`${this.url}delegado`);
  }

  postDelegado(formDelegado : object){
    return this.http.post(`${this.url}delegado`, formDelegado);
  }

  getEquipos(){
    return this.http.get(`${this.url}equipo`);
  }

  postEquipo(formEquipo : object){
    return this.http.post(`${this.url}equipo`, formEquipo);
  }

  getJugadores(){
    return this.http.get(`${this.url}jugador`);
  }

  postJugador(formJugador : object){
    return this.http.post(`${this.url}jugador`, formJugador);
  }
  // This method is in charge for saving an object in the database


  //Este método interactúa
  getAll(dir:string, model?:object): Observable<any>{
    return this.http.get<any>(`${environment.url}${dir}`, model);
  }
/*
  getById(dir:string, id:number): Observable<any>{
    return this.http.get<any>(`${environment.url}/${dir}/${id}`);
  }

  update(dir: string, model:object): Observable<any> {
    return this.http.put<any>(`${environment.url}${dir}`, model);
  }*/

}
