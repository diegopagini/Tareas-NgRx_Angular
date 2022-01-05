import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tarea } from '../models/tarea.interface';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private snackBar: MatSnackBar) {}

  mostrarMensaje(tarea: Tarea, message: string): void {
    this.snackBar.open(`${tarea.nombre} ${message}`, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
