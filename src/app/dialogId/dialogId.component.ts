import { Component, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-dialogId',
    templateUrl: './dialogId.component.html',
    styleUrls: ['./dialogId.component.css']
  })
  export class DialogIdComponent {

    constructor(private dialogRef: MatDialogRef<any>){}

    @Input() title_dialog_id: string = "Id incorrecto";
    @Input() text_dialog_id: string = "El id buscado no existe. Por favor pruebe con otro id."

    closeDialog() {
      this.dialogRef.close();
    }
  }
  