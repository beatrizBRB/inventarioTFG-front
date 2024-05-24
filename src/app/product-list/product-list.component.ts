import { Component, SimpleChanges } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
import { SessionTimeOut } from '../services/sessionTimeOut.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',

})
export class ProductListComponent {

  //este arry tiene todos los objetos que son del tipo Producto
  productos: Producto[] = [];
  productoBuscado: Producto[] = [] ;
  cantidadArticulos: number = 0;


  constructor(private productoService: ProductoService, private enrutador: Router, private sessionTimeOut: SessionTimeOut) { 
  }

  ngOnInit(): void {
    console.log("ngOnInit del componente productList")
    console.log("ngOnInit cuando se hace click en buscar")
    //cargamos los productos
    this.getProductos();  

    this.sessionTimeOut.initSessionTimeout();
  }

   getProductos() {
    //consumir datos del observable (suscribirnos)
    this.productoService.getProductosLista().subscribe(
      (datos => {
        this.productos = datos;
        this.cantidadArticulos = this.productos.length; // Actualizar contador de artículos
      })
      );
    }

    mostrarProductoBuscado(producto: Producto) {
      console.log("El producto buscado es: ", producto);
    
      // Verificar si el producto está presente en el arreglo 'productos' con el mismo id
      const productoExistente = this.productos.find(p => p.idProduct === producto.idProduct);
      
      if (productoExistente) {
        // Verificar si el producto ya está en el arreglo 'productoBuscado'
        const productoEncontrado = this.productoBuscado.find(p => p.idProduct === producto.idProduct);
        
        if (!productoEncontrado) {
          // Agregar el producto al arreglo 'productoBuscado'
          this.productoBuscado.push(productoExistente);
        }
      }
    }

  editarProducto(id: number){
    this.enrutador.navigate(['editar-producto', id]);
  }

  eliminarProducto(id: number){
    this.productoService.eliminarProducto(id).subscribe(
      {
        next: () => this.getProductos(),
        error: (errores) => console.log(errores)
      }
    );
  }


}
