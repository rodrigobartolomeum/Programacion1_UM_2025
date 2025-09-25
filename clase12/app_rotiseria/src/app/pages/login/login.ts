import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Auth } from '../../services/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  loginForm: FormGroup;

  constructor(
    private authService: Auth,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.loginForm = this.formBuilder.group({
      email: ['martin.quiroga@um.edu.ar', Validators.required],
      password: ['123456', Validators.required]
    });
  }

  irLogin(){
    // {
    //     email: this.loginForm.value.email, 
    //     password: this.loginForm.value.password}
    this.authService.login(this.loginForm.value).subscribe({
      next: (res:LoginResponse) => {
        alert("Login exitoso");
        console.log("Respuesta login: ", res);
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('email', res.email);
        this.router.navigateByUrl('/home')
      },
      error: (err) => {
        alert("Usuario o contraseña incorrectos");
        console.log("Error en el login:", err);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
      }
    }) 
  }

  submit(){
    console.log("Valores form: ", this.loginForm.value);
    if(this.loginForm.valid){
      this.irLogin();
    } else {
      alert("Formulario inválido")
    }
  }
}
