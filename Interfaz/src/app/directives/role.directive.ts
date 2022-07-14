import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../api-services/auth.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {

  constructor( private templateRef:TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService) { }

  ngOnInit(){
  }

  @Input()
  set appRole(val : boolean){
    var acceso = this.existeAcceso;
    this.viewContainer.clear();
    if(acceso){
      if(val){
        this.viewContainer.createEmbeddedView(this.templateRef); 
      }        
    }/*else{
      if(!val){
        this.viewContainer.createEmbeddedView(this.templateRef); 
      }
    }*/
  }

  get existeAcceso(){ return this.authService.loggedIn(); }


}
