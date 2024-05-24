import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { FormsModule } from '@angular/forms';


import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    NavbarComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [ ProductListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
