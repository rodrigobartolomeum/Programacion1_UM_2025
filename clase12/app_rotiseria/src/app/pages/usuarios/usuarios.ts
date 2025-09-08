import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-usuarios',
  imports: [
    Footer,
    Navbar
  ],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios {

}
