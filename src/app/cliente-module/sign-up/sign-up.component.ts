import { delay } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SignUpInterface } from 'src/app/general-module/Data/Interfaces/sign-up-interface';
import { ClienteService } from 'src/app/general-module/Services/cliente.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private clienteService: ClienteService, private router: Router, private alertCtrl: AlertController) {}

  ngOnInit(): void {
    const submitButton = document.getElementById('submit-button');
    submitButton?.addEventListener('click', (event) => {
      event.preventDefault();

      this.signUp();
    });
  }


  signUp(){
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const lastName = (document.getElementById('last-name') as HTMLInputElement).value;

    const body: SignUpInterface = {
      email: email,
      password: password,
      name: name,
      lastname: lastName
    }

    this.clienteService.signUp(body).subscribe(async response => {
      console.log(response);
      const alert = await this.alertCtrl.create({
        header: 'Success',
        message: response.message,
        buttons: ['OK'],
      });

      alert.present();

      this.router.navigate(['/client/login']);
    });
  }
}
