import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  hasLoggedIn: boolean = false;

  constructor(private platform: Platform) { }

  ngOnInit(): void {
   this.hasLoggedIn = sessionStorage.getItem("acces_token") ? true : false;
  }


}
