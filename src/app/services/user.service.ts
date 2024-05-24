import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {

private urlAuth = "http://localhost:8080/auth/login";
private urlRegister = "http://localhost:8080/user/register";


constructor(private http: HttpClient) {}

/**
 * Realiza una solicitud de inicio de sesión al servidor utilizando las credenciales proporcionadas.
 * @param email El correo electrónico del usuario.
 * @param password La contraseña del usuario.
 * @returns Un observable que emite la respuesta del servidor.
 */
  login(email: string, password: string): Observable<any> {
    const user = { email, password };
    console.log(user)
    return this.http.post<any>(this.urlAuth, user);
  }

/**
 * Realiza una solicitud de registro de usuario al servidor utilizando las credenciales proporcionadas.
 * @param email El correo electrónico del usuario.
 * @param password La contraseña del usuario.
 * @returns Un observable que emite la respuesta del servidor.
 */
  register(email: string, password: string): Observable<any> {
    const user = { email, password };
    console.log('Datos del usuario:', user);
    return this.http.post<any>(this.urlRegister, user);
  }
}