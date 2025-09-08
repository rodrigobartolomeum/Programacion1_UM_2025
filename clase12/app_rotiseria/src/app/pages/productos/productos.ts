import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-productos',
  imports: [
      Footer,
      Navbar
    ],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {

}
