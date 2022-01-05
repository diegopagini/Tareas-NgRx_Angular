import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tarea } from 'src/app/models/tarea.interface';
import {
  completarTarea,
  eliminarTarea,
} from 'src/app/store/actions/tareas.actions';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
})
export class TareaComponent {
  @Input() tarea: Tarea;

  constructor(private store: Store) {}

  despacharEliminarTarea(): void {
    this.store.dispatch(eliminarTarea({ payload: this.tarea }));
  }

  despacharCompletarTarea(): void {
    this.store.dispatch(completarTarea({ payload: this.tarea }));
  }
}
