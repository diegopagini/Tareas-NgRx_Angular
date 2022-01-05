import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/models/tarea.interface';
import { crearTarea } from 'src/app/store/actions/tareas.actions';
import { selectorDeTareas } from 'src/app/store/selectors/tareas.selectors';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
})
export class ListaTareasComponent implements OnInit {
  tareas$: Observable<Tarea[]>;
  tarea: string;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.tareas$ = this.store.select(selectorDeTareas);
  }

  despacharCrearTarea(): void {
    if (this.tarea.length > 0) {
      const task: Tarea = {
        nombre: this.tarea,
        completado: false,
        id: Math.random(),
      };

      this.store.dispatch(crearTarea({ payload: task }));
      this.tarea = '';
    }
  }
}
