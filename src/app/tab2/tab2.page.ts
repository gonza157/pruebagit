import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 mensaje;

  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(valor =>{
      this.mensaje = valor.mensaje;
    })
  }



}
