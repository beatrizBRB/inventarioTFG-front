import { Component,  Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogLoginComponent } from '../dialogLogin/dialogLogin.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  dialogRef: MatDialogRef<any>;

  email: string;
  password: string;
  @Input() width = '30%'
  @Input() height = '30%'

  constructor(public userService: UserService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
   
  }

  login() {   
    this.userService.login(this.email, this.password).subscribe(() => {
      console.log("Inicio de sesión exitoso, abriendo inventario");
      this.router.navigate(['/productos'])   
    }, (error) => {
      console.log("Errro al en el inicio de sesion", error);
      if (error) {
        this.dialogRef = this.dialog.open(DialogLoginComponent, {
          width: this.width,
          height: this.height
        });
       
      }
    })
  }


  singup() {
    this.router.navigate(['/registro'])
  }



}
