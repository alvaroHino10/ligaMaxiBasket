import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-services/api-services';

@Component({
  selector: 'app-modal-org-equipos-regis',
  templateUrl: './modal-org-equipos-regis.component.html',
  styleUrls: ['./modal-org-equipos-regis.component.css']
})
export class ModalOrgEquiposRegisComponent implements OnInit {
  listaEquipos : any = [];
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getListaEquipos();
  }

  getListaEquipos(){
    this.apiService.getAll('torneo/1/equipos').subscribe(res => {
      this.listaEquipos = res.data;
      console.log(this.listaEquipos);
    });
  }
  

}
