import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ErrorPage } from './pages/error-page/error-page';
import { authsessionGuard } from './guards/authsession-guard';

export const routes: Routes = [
    //{path:'home', component: Home},
    {path:'home', loadComponent: () => import('./pages/home/home').then(m => m.Home)},
    {path:'login', loadComponent: () => import('./pages/login/login').then(m => m.Login)},
    {path:'productos', loadComponent: () => import('./pages/productos/productos').then(m => m.Productos)},
    {path:'usuarios', loadComponent: () => import('./pages/usuarios/usuarios').then(m => m.Usuarios), canActivate: [authsessionGuard]},
    {path:'usuario/:id/:tipo_op', loadComponent: () => import('./pages/usuario/usuario.component').then(m => m.UsuarioComponent)},
    {path:'error', component: ErrorPage},
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'**',redirectTo: 'error'}

];
