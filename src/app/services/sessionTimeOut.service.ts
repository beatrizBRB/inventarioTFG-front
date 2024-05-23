import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar'; // Importa el MatSnackBar para mostrar el mensaje de aviso
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class SessionTimeOut {
    private inactivityTimer: any;
    private readonly INACTIVITY_TIMEOUT = 30000; // 5 minutos en milisegundos
  
    constructor(private snackBar: MatSnackBar, private router: Router) {}
  
    initSessionTimeout(): void {
      this.startInactivityTimer();
      window.addEventListener('mousemove', this.handleUserActivity);
      window.addEventListener('keydown', this.handleUserActivity);
    }
  
    handleUserActivity = (): void => {
      clearTimeout(this.inactivityTimer);
      this.startInactivityTimer();
    };
  
    startInactivityTimer(): void {
      this.inactivityTimer = setTimeout(() => {
        this.showWarning();
      }, this.INACTIVITY_TIMEOUT);
    }
  
    showWarning(): void {
      const snackBarRef = this.snackBar.open('Tu sesión ha caducado, debes volver a iniciar sesión', 'OK', {
        horizontalPosition: 'center', // Posición horizontal en el centro
        panelClass: ['snackbar-centered'] // Aplicar clase personalizada
      });
  
      snackBarRef.onAction().subscribe(() => {
        clearTimeout(this.inactivityTimer);
        this.startInactivityTimer();
        this.router.navigate(['/login']);
      });
    }
}