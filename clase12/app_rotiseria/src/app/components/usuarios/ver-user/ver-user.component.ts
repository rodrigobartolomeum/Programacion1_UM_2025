import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Usuarios } from '../../../services/usuarios';

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

  // arrayUsuarios = [
  //   {
  //     id: 1,
  //     nombre: "Martin",
  //     email: "martin@correo.com"
  //   },
  //   {
  //     id: 2,
  //     nombre: "Rodrigo",
  //     email: "rodrigo@correo.com"
  //   },
  //   {
  //     id: 3,
  //     nombre: "Maria",
  //     email: "maria@correo.com"
  //   },
  //   {
  //     id: 4,
  //     nombre: "Juana",
  //     email: "juana@correo.com"
  //   }
  // ]
  
  // arrayFiltred = [...this.arrayUsuarios]

  arrayUsuarios:any[] = [];
  arrayFiltred:any[] = [];
  
  constructor(
    private router:Router,
    private usuarioSvc: Usuarios
  ){}

  ngOnInit(){
    this.usuarioSvc.getUsuarios().subscribe({
      next: (res:any) => {
        console.log("Usuarios: ", res);
        this.arrayUsuarios = res.animales;
        this.arrayFiltred = [...this.arrayUsuarios]
      },
      error: (err) => {
        console.log("Error al traer usuarios: ", err);
      }
    })
  }

  editarUsuario(usuario:any){
    // this.router.navigate([`/usuario/${usuario.id}/Editar`]);
    this.router.navigateByUrl(`/usuario/${usuario.id}/Editar`);
  }

  buscar(){
    let nombreNuevo = this.nombre.toLowerCase();
    this.arrayFiltred = this.arrayUsuarios.filter(u => u.name.toLowerCase().includes(nombreNuevo));
  }
}
