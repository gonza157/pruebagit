import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    let usuarios = [{mail: "mail1@gmail.com", clave : "clave1"},{mail: "mail2@gmail.com", clave : "clave2"},{mail: "mail3@gmail.com", clave : "clave3"}];
    localStorage.setItem("Users",JSON.stringify(usuarios));
  }

}
