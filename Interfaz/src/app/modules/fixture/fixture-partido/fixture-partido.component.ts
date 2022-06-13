import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BodyFixtureComponent } from '../body-fixture/body-fixture.component';

@Component({
  selector: 'app-fixture-partido',
  templateUrl: './fixture-partido.component.html',
  styleUrls: ['./fixture-partido.component.css']
})
export class FixturePartidoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BodyFixtureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BodyFixtureComponent,) { }

  ngOnInit(): void {
    console.log('21');
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}


