import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  email;
  clave;
  mensajeError;

  constructor(private router:Router) {}

  login() {
    this.mensajeError = "";
    let users:[] = JSON.parse(localStorage.getItem("Users"));
    let validado = users.filter((user: any) =>{
      if(user.mail == this.email && user.clave == this.clave){
        return user;
      }
    });

    if(validado.length >0){
      this.router.navigate(["/tabs/tab2",{mensaje :"Logeo Exitoso"}]);
    }else{
      this.email = "";
      this.clave = "";
      this.mensajeError = "Usuario o Contraseña incorrectos";
      
    }
  }

}
