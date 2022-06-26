import { Directive, ElementRef, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appAccesoDelegado]'
})
export class AccesoDelegadoDirective implements OnInit {

  constructor( private templateRef:TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  ngOnInit(){

  }

  @Input()
  set appAccesoDelegado(val : boolean){
    this.viewContainer.clear();
    if(val){
      this.viewContainer.createEmbeddedView(this.templateRef);  
    }
  }

}
