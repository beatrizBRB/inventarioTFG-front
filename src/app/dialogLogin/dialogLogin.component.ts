import { Component, Input } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-dialogLogin',
    templateUrl: './dialogLogin.component.html',
    styleUrls: ['./dialogLogin.component.css']
  })
  export class DialogLoginComponent {

    constructor(private dialogRef: MatDialogRef<any>){}

    @Input() title_dialog_login: string = "Credenciales incorrectas";
    @Input() text_dialog_login: string = "Las credenciales introducidas no son correctas, por favor vuelve a intentarlo."

    @Input() title_dialog_id: string = "Id incorrecto";
    @Input() text_dialog_id: string = "El id buscado no existe. Por favor pruebe con otro id."

    closeDialog() {
      this.dialogRef.close();
    }
  }
  