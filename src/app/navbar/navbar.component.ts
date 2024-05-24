import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../services/producto.service';

import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogIdComponent } from '../dialogId/dialogId.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  ngOnInit(): void {
  }
  
  productoEncontrado: Producto;
  productId: number;
  @Input() width = '30%'
  @Input() height = '30%'

  dialogRef: MatDialogRef<any>;
  
  constructor(private productoService: ProductoService, private productList: ProductListComponent, private enrutador: Router, public dialog: MatDialog) {}

 
  buscarProductoPorId () {
    console.log("haciendo click en el boton de buscar")
    //console.log("ID del producto a buscar es: " + this.productId)
    this.productoService.obtenerProductoPorId(this.productId).subscribe((producto: Producto) => {
      this.productoEncontrado = producto;
      this.productList.mostrarProductoBuscado(producto);
      this.enrutador.navigate(['/productos']) 
    }, (error) => {
      console.log("Error al buscar el producto", error);
      if (error) {
        this.dialogRef = this.dialog.open(DialogIdComponent, {
          width: this.width,
          height: this.height,
        
        })
      }
    })
  }
}
