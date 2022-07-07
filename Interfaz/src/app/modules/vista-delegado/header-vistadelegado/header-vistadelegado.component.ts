import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api-services/auth.service';

@Component({
  selector: 'app-header-vistadelegado',
  templateUrl: './header-vistadelegado.component.html',
  styleUrls: ['./header-vistadelegado.component.css']
})
export class HeaderVistadelegadoComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.authService.logout();
    this.router.navigate(['']);
  }

}
