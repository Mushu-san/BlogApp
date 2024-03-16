import { Component, OnInit } from '@angular/core';
import { Authorization } from 'src/app/general-module/Data/Interfaces/authorization';
import { ClienteService } from 'src/app/general-module/Services/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private clientService: ClienteService) {}

  ngOnInit(): void {
    const submitButton = document.getElementById('submit-button');
    submitButton?.addEventListener('click', (event) => {
      event.preventDefault();

      this.login();
    });
  }

  login() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;

    const body: Authorization = {
      username: email,
      password: password,
    };

    this.clientService.authorize(body).subscribe(async (response) => {
      const data = await response;
      if (data.token) {
        sessionStorage.setItem('acces_token', data.token);
        window.location.href = '/news/';
      }
    });
  }
}
