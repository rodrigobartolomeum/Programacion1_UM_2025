import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Footer
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
