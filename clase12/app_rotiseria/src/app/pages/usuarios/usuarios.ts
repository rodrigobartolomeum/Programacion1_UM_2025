import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Navbar } from '../../components/navbar/navbar';
import { VerUserComponent } from "../../components/usuarios/ver-user/ver-user.component";

@Component({
  selector: 'app-usuarios',
  imports: [
    Footer,
    Navbar,
    VerUserComponent
],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios {

}
