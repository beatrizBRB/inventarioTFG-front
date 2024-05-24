import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
import { SessionTimeOut } from '../services/sessionTimeOut.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  producto: Producto = new Producto();

  constructor(private productoService: ProductoService, 
    private enrutador: Router, private sessionTimeOut: SessionTimeOut) { }

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this.productoService.agregarProducto(this.producto).subscribe(
      {
        next: () => {
          this.irListaProductos();
        },
        error: (error: any) => {console.log(error)}
      }
    );
  }

  irListaProductos(){
    this.enrutador.navigate(['/productos'])
  }

  ngOnInit(): void {
    this.sessionTimeOut.initSessionTimeout();
  }

}
