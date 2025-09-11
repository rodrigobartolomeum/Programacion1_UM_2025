import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ver-user',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './ver-user.component.html',
  styleUrl: './ver-user.component.css'
})
export class VerUserComponent {

  nombre!: string;

  arrayUsuarios = [
    {
      id: 1,
      nombre: "Martin",
      email: "martin@correo.com"
    },
    {
      id: 2,
      nombre: "Rodrigo",
      email: "rodrigo@correo.com"
    },
    {
      id: 3,
      nombre: "Maria",
      email: "maria@correo.com"
    },
    {
      id: 4,
      nombre: "Juana",
      email: "juana@correo.com"
    }
  ]
  
  arrayFiltred = [...this.arrayUsuarios]

  constructor(
    private router:Router
  ){}

  editarUsuario(usuario:any){
    // this.router.navigate([`/usuario/${usuario.id}/Editar`]);
    this.router.navigateByUrl(`/usuario/${usuario.id}/Editar`);
  }

  buscar(){
    let nombreNuevo = this.nombre.toLowerCase();
    this.arrayFiltred = this.arrayUsuarios.filter(u => u.nombre.toLowerCase().includes(nombreNuevo));
  }
}
