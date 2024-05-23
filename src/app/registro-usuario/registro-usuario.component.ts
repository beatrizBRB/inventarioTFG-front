import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})

/**
* Componente para el registro de usuarios.
*/
export class RegistroUsuarioComponent implements OnInit {

  email: string;
  password: string;
  confirmPassword: string;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  /**
  * Registra un nuevo usuario.
  */
  register() {
    this.userService.register(this.email, this.password)
    .subscribe({
      next: (response: any) => {
        console.log('Usuario registrado:', response);
      },
    });
  }

  goToLogin() {
    this.router.navigate(['/login'])
  }

}
