import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';
import pdfMake from  'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ImageElementContainer } from 'html2canvas/dist/types/dom/replaced-elements/image-element-container';

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
  listaJugadores: any = [];
  codEquipo = -1;
  //imageJugador : any [];
  //datos fake
  listaJugadoresfake: any ;
  torneoActual: any;
  codTorneo: any;

  constructor(private apiService: ApiService) {
    this.urlActual = window.location.href;
    console.log(this.urlActual);
    this.credencial = new FormGroup({
      equipos: new FormControl('',
        Validators.required)
    });
  }

  ngOnInit(): void {
    this.getCodTorneo();
  }
 
  getCodTorneo(){
    this.apiService.getAll('torneo').subscribe((data:any) => {
      this.torneoActual = data['data'];
      this.codTorneo = this.torneoActual.length;
      this.getServicio();
    });    
  }
  
  getServicio(){
    this.apiService.getAll('torneo/' + this.codTorneo + '/equipos').subscribe((data:any) => {
      this.listaEquipos = data['data'];         
      console.log(this.listaEquipos);  
    });
  }

  getJugadores(){
    var codEquiData = this.credencial.value.equipos.equipo_data.cod_equi_data;
    this.apiService.getById('equipo_data', codEquiData).subscribe(res => {
      this.listaJugadores = res.data.jugadores;
      console.log(this.listaJugadores);
    });
    //this.listaJugadores = 
    
  }



  downloadPDF() {
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
  
  get controls() { return this.credencial.controls; }
  get equipoJugador(){ return this.credencial.value.equipos; }
  get imageJugador(){ 
    var imagen = "http://25.79.31.175:8000/api/jugador/1" ;
  /*  this.apiService.getJSON('jugador', 1).subscribe((data: any = []) => {
      console.log(data.data);
      imagen = this.jugador.link_img_jug;
    });  */
    //console.log(this.listaJugadores[0].link_img_jug);
    return imagen; }

  //datos fake
  setRegistro(nombre: any, p_Ap: any, m_ap: any, fecha: any, telf: any) {
    const registroJugador = {
      nombre_jug: nombre,
      prim_ap_jug: p_Ap,
      seg_ap_jug: m_ap,
      fecha_nac_jug: fecha,
      telf_jug: telf,
      num_iden_jug: telf,
      link_img_jug: "imagen.png",
    };
    return registroJugador;
  }

  datosFake() {
    this.listaJugadoresfake = [this.setRegistro("1paul", "martinez", "flores", "06-08-1999", "77486990"),
    this.setRegistro("2paul", "martinez", "flores", "06-08-1999", "77486990"),
    this.setRegistro("3paul", "martinez", "flores", "06-08-1999", "77486990"),
    this.setRegistro("4paul", "martinez", "flores", "06-08-1999", "77486990"),
    this.setRegistro("5paul", "martinez", "flores", "06-08-1999", "77486990"),
    this.setRegistro("6paul", "martinez", "flores", "06-08-1999", "77486990"),
    this.setRegistro("7paul", "martinez", "flores", "06-08-1999", "77486990"),
    this.setRegistro("8paul", "martinez", "flores", "06-08-1999", "77486990"),
    ];
  }
}