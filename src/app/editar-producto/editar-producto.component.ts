import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { SessionTimeOut } from '../services/sessionTimeOut.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  producto: Producto = new Producto();
  id: number;

  constructor(private productoService: ProductoService, private ruta: ActivatedRoute, private enrutador: Router, private sessionTimeOut: SessionTimeOut) { }

  ngOnInit(): void {
    this.sessionTimeOut.initSessionTimeout();
    this.id = this.ruta.snapshot.params['id'];
    this.productoService.obtenerProductoPorId(this.id).subscribe(
      {
        next: (datos) => this.producto = datos,
        error: (errores: any) => console.log(errores)
      }
    )
  }

  onSubmit(){
    this.guardarProductoEditado();
  }

  guardarProductoEditado(){
    this.productoService.editarProducto(this.id, this.producto).subscribe(
      {
        next: (datos) => this.iirListaProductos(),
        error: (errores) => console.log(errores)
      }
    )
  }

  iirListaProductos(){
    this.enrutador.navigate(['/productos'])
  }
}
