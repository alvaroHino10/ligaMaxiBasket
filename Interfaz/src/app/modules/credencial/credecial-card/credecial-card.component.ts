import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';
import pdfMake from  'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-credecial-card',
  templateUrl: './credecial-card.component.html',
  styleUrls: ['./credecial-card.component.css']
})

export class CredecialCardComponent implements OnInit {
  public urlActual: any;
  public credencial: FormGroup;
  jugador: any = [];
  listaEquipos: any = [];
  listaJugadores: any=[];
  codEquipo = -1;
  //imageJugador : any [];
  //datos fake
  public listaJugadoresfake: any = [this.setRegistro ("1paul","martinez","flores","06-08-1999","77486990"),
  this.setRegistro ("2paul","martinez","flores","06-08-1999","77486990")
  ,this.setRegistro ("3paul","martinez","flores","06-08-1999","77486990")
  ,this.setRegistro ("4paul","martinez","flores","06-08-1999","77486990")
  ,this.setRegistro ("5paul","martinez","flores","06-08-1999","77486990")
  ,this.setRegistro ("6paul","martinez","flores","06-08-1999","77486990")
  ,this.setRegistro ("7paul","martinez","flores","06-08-1999","77486990")
  ,this.setRegistro ("8paul","martinez","flores","06-08-1999","77486990")
];

  constructor(private apiService: ApiService) {
    this.urlActual = window.location.href;
    console.log(this.urlActual);
    this.credencial = new FormGroup({
      equipos: new FormControl('',
        Validators.required),
      jugadores: new FormControl('',
        Validators.required), 
    });
  }

  ngOnInit(): void {
    this.getJsonContent();
  }

  actualizarCredencial(){
    this.codEquipo = this.credencial.value.equipos.cod_equi;
    this.getJsonContent();
  }
  
  get controls() { return this.credencial.controls; }
  get equipoJugador(){ return this.credencial.value.equipos; }
  //get jugadorCredencial(){ return this.credencial.value.jugadores }
  //get imageJugador(){ return this.jugadorCredencial.link_img_jug; }

  getJsonContent() {
    this.apiService.getAll('equipo').subscribe((dataequipo: any = []) => {
      const response = dataequipo;
      this.listaEquipos = (response['data']);
      console.log(this.listaEquipos);
    });
    //Dado el codEquipo generar los jugadores de ese equipo
    
    this.apiService.getAll('jugador').subscribe((datajugadores: any = []) => {
      this.listaJugadores = datajugadores['data'];
      console.log(this.listaJugadores);
    });
    /*
    this.apiService.getJSON('jugador', 6).subscribe((data: any = []) => {
    this.jugador = data['jugador'];
    this.imageJugador = this.jugador.link_img_jug;
    console.log(this.jugador)
    console.log(this.imageJugador);
  });*/
  }
   // tslint:disable-next-line:typedef
   downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('credencialcita');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}${""}.pdf`);
    });
  }  


  //datos fake
  setRegistro(nombre : any, p_Ap : any, m_ap : any, fecha: any, telf:any) {
     
    const registroJugador = {
    nombre_jug: nombre,
    prim_ap_jug: p_Ap,
    seg_ap_jug: m_ap,
    
    fecha_nac_jug: fecha,
    telf_jug:telf ,
    link_img_jug:"imagen.png",
    
  };
  return registroJugador;
    
  }
}