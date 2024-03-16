import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  hasLoggedIn: boolean = false;


  constructor() {
    this.hasLoggedIn = sessionStorage.getItem("acces_token") ? true : false;
  }

  logOut(){
    sessionStorage.removeItem("acces_token");
    this.hasLoggedIn = false;
    window.location.reload();
  }
}
