import { Component, OnInit , Inject} from '@angular/core';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FixturePartidoComponent } from '../fixture-partido/fixture-partido.component';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-body-fixture',
  templateUrl: './body-fixture.component.html',
  styleUrls: ['./body-fixture.component.css']
})
export class BodyFixtureComponent implements OnInit {
  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions:NgbModalOptions;

  constructor(private modalService: NgbModal){
      
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }

  }

  ngOnInit(): void {
  }

  agregarPartido(): void {
    const modalRef = this.modalService.open(FixturePartidoComponent);
    modalRef.componentInstance.my_modal_title = 'I your title';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }

}
