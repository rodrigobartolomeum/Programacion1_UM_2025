import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgIf } from "@angular/common";


@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})

export class Navbar {
  ver = true;
}
