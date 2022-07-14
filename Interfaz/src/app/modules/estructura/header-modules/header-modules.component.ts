import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api-services/auth.service';

@Component({
  selector: 'app-header-modules',
  templateUrl: './header-modules.component.html',
  styleUrls: ['./header-modules.component.css']
})
export class HeaderModulesComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
