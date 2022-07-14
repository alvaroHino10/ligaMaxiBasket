import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';
import pdfMake from  'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ImageElementContainer } from 'html2canvas/dist/types/dom/replaced-elements/image-element-container';
import { SendDataService } from 'src/app/api-services/send-data.service';

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
  listaJugadoresfake: any ;
  torneoActual: any;
  codTorneo: any;

  constructor(private apiService: ApiService, private data:SendDataService) {
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
      this.getJugadores();
    });
  }

  getJugadores(){
    var codEquiData = this.equipoJugador.equipo_data.cod_equi_data;
    console.log(this.credencial.value.equipos);
    this.apiService.getById('equipo_data', codEquiData).subscribe(res => {
      this.listaJugadores = res.data.jugadores;
      console.log(this.listaJugadores);
    });    
  }

  downloadPDF() {
    const DATA = document.getElementById('credencialPDF');
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
  get equipoJugador(){ return this.data.getEquipo(); }
  
  get imageJugador(){ 
    var imagen = "http://25.79.31.175:8000/api/jugador/1" ;
    /*this.apiService.getJSON('jugador', 1).subscribe((data: any = []) => {
      console.log(data.data);
      imagen = this.jugador.link_img_jug;
    });  */
    //console.log(this.listaJugadores[0].link_img_jug);
    return imagen; }
  
}