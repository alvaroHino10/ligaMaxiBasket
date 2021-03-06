import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api-services/api-services";
import { AuthService } from "src/app/api-services/auth.service";
import data from "../../.././../assets/Archivos/data.json";

interface CountryOption {
  name: string;
  value: string;
}

@Component({
  selector: "app-registro-e",
  templateUrl: "./registro-e.component.html",
  styleUrls: ["./registro-e.component.css"],
})
export class RegistroEComponent implements OnInit {
  public formularioRegistroEquipo: FormGroup;
  public listaCategoriaEquipo: any = ["+30", "+40", "+50", "+60"];
  public submitted = false;
  public paises: CountryOption[] = [];
  categoria = [];
  listaEquipos: any;
  mensajeError: any;
  dataPost: any;
  torneoActual: any;
  codTorneo: any;

  constructor(public formulario: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router) {

    this.paises = data.paises;
    this.formularioRegistroEquipo = new FormGroup({
      nombreDelEquipo: new FormControl("", Validators.required),
      paisEquipo: new FormControl("", Validators.required),

      colorEquipo: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.pattern("^[a-zA-Z áéíóúÁÉÍÓÚñÑs]*$"),
      ]),
    });
  }

  ngOnInit(): void {
    this.getCodTorneo();
  }

  registrarEquipo() {
    this.submitted = true;
    if (this.formularioRegistroEquipo.invalid) {
      alert(
        "Por favor ingrese datos validos, correspondientes a todos los campos"
      );
      return;
    } else {
      this.postServicio();
      return;
    }
  }

  getCodTorneo() {
    this.apiService.getAll("torneo").subscribe((data: any) => {
      this.torneoActual = data["data"];
      this.codTorneo = this.torneoActual.length;
      this.getServicio();
    });
  }

  getServicio() {
    this.apiService.getAll("torneo/" + this.codTorneo).subscribe((data: any) => {
        this.listaEquipos = data.data["equipos"];
        console.log(this.listaEquipos);
      });
  }

  postServicio() {
    var mensajeResponse;
    var registroEquipo = this.setRegistro();
    this.apiService.post("equipo_data", registroEquipo).subscribe(
      (data: any) => {
        this.dataPost = data;
        console.log(this.dataPost);
        mensajeResponse = this.dataPost["mensaje"];
        alert(mensajeResponse);
        this.limpiarFormulario();
        this.router.navigate(['/vista-delegado']);
      },
      (error) => {
        this.mensajeError = error;
        console.log(this.mensajeError.error["mensaje"]);
        mensajeResponse = this.mensajeError.error["mensaje"];
        alert(mensajeResponse);
        this.limpiarFormulario();
      }
    );
  }

  setRegistro() {
    const registroEquipo = {
      cod_equi: this.formularioRegistroEquipo.value.nombreDelEquipo.cod_equi,
      pais_equi: this.formularioRegistroEquipo.value.paisEquipo,
      discip_equi: "basquet",
      color_equi: this.formularioRegistroEquipo.value.colorEquipo.toLowerCase(),
    };
    return registroEquipo;
  }

  limpiarFormulario() {
    this.formularioRegistroEquipo.reset();
    this.submitted = false;
  }

  get controls() {
    return this.formularioRegistroEquipo.controls;
  }
  get equipoSeleccionado() {
    return this.formularioRegistroEquipo.value.nombreDelEquipo;
  }

}
