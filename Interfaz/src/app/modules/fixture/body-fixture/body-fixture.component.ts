import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FixturePartidoComponent } from '../fixture-partido/fixture-partido.component';
@Component({
  selector: 'app-body-fixture',
  templateUrl: './body-fixture.component.html',
  styleUrls: ['./body-fixture.component.css']
})
export class BodyFixtureComponent implements OnInit {

  animal: any;
  name: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  agregarPartido(): void {
    console.log('1');
    const dialogRef = this.dialog.open(FixturePartidoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}




