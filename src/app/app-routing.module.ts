import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

//aqui se van a agregar todas las rutas de la aplicacion
const routes: Routes = [
  {path: '', redirectTo: '/login',  pathMatch: "full"},
  {path: 'login', component: LoginComponent },
  {path: 'registro', component: RegistroUsuarioComponent},
  {path: 'productos', component: ProductListComponent},
  {path: 'productos/agregar-producto', component: AgregarProductoComponent},
  {path: 'editar-producto/:id', component: EditarProductoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
