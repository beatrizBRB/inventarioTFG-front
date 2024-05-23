import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Producto } from "../producto";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = "http://localhost:8080/inventario-app/productos"

  constructor(private clienteHttp: HttpClient) { }

  /**
  * Obtiene una lista de todos los productos.
  * @returns Un observable que emite un array de productos.
  */
  getProductosLista(): Observable<Producto[]>{
    return this.clienteHttp.get<Producto[]>(this.urlBase);
  }

  /**
  * Agrega un nuevo producto.
  * @param producto El producto a agregar.
  * @returns Un observable que emite la respuesta del servidor.
  */
  agregarProducto(producto: Producto): Observable<Object>{
    return this.clienteHttp.post(this.urlBase, producto);
  }

  /**
  * Obtiene un producto por su identificador.
  * @param id El identificador del producto.
  * @returns Un observable que emite el producto correspondiente al identificador.
  */
  obtenerProductoPorId(id: number) {
    console.log("llamada a obtenerProductoPorId: " + id)
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${id}`)
  }

  /**
  * Edita un producto existente.
  * @param id El identificador del producto a editar.
  * @param producto El producto actualizado.
  * @returns Un observable que emite la respuesta del servidor.
  */
  editarProducto(id: number, producto: Producto): Observable<Object>{
    return this.clienteHttp.put(`${this.urlBase}/${id}`, producto);
  }

  /**
  * Elimina un producto existente.
  * @param id El identificador del producto a eliminar.
  * @returns Un observable que emite la respuesta del servidor.
  */
  eliminarProducto(id: number): Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }




}
