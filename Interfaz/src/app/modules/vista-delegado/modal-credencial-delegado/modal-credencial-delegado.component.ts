import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-services/api-services';
import pdfMake from  'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ImageElementContainer } from 'html2canvas/dist/types/dom/replaced-elements/image-element-container';
import { AuthService } from 'src/app/api-services/auth.service';

@Component({
  selector: 'app-modal-credencial-delegado',
  templateUrl: './modal-credencial-delegado.component.html',
  styleUrls: ['./modal-credencial-delegado.component.css']
})
export class ModalCredencialDelegadoComponent implements OnInit {
  public urlActual: any;
  public credencial: FormGroup;
  delegado: any;
  imagen: any;

  constructor(private authService:AuthService, private apiService:ApiService) {
    this.urlActual = window.location.href;
    console.log(this.urlActual);
    this.credencial = new FormGroup({
      equipos: new FormControl('',
        Validators.required)
    });
  }

  ngOnInit(): void {
    var resDeleg ;
    this.authService.getUserDelegado().subscribe(res =>{
      resDeleg = res;
      this.delegado = resDeleg.data;
      console.log(this.delegado);
    });      
    this.apiService.getJSON('delegado', 1).subscribe((data: any) => {
      this.imagen = data.data.link_img_jug;
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

  get imagenDelegado(){
    var imagen = "http://25.79.31.175:8000/api/delegado/" + this.delegado.cod_deleg + this.delegado.link_img_jug;
    return imagen;
  }

}
