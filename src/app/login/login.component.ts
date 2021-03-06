import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/usuario/auth.service';
import { Persona } from '../models/persona.model';
import { Login } from '../models/login.model';
import Swal from 'sweetalert2';
declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame = false;
  auth2: any;

  username: any;
  password: any;

  usuario: Persona;
  constructor(
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }
  // this.usuario
  ingresar(forma: NgForm) {
    console.log("forma: ", forma);
    if (forma.invalid) {
      Swal.fire('Oops...', 'revisa los datos ingresados', 'error');
      return;
    }

    const userLogin = new Login(forma.value.email, forma.value.password);

    this.authService.login(userLogin)
      .subscribe(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
          Swal.fire('Oops...', 'revisa los datos ingresados', 'error');
        },
        () => {
          this.router.navigate(['/eventos']);
        }
      );
  }




}
