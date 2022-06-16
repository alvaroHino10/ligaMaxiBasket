import { Component, OnInit, Inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fixture-partido',
  templateUrl: './fixture-partido.component.html',
  styleUrls: ['./fixture-partido.component.css']
})
export class FixturePartidoComponent implements OnInit {

  my_modal_title;
  my_modal_content;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}