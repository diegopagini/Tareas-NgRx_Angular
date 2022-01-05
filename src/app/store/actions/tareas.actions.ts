import { createAction, props } from '@ngrx/store';
import { Tarea } from 'src/app/models/tarea.interface';

export const crearTarea = createAction(
  '[Lista de Tareas Component] Crear una nueva tarea',
  props<{ payload: Tarea }>()
);

export const eliminarTarea = createAction(
  '[Tarea Component] Eliminar tarea',
  props<{ payload: Tarea }>()
);

export const completarTarea = createAction(
  '[Tarea component] Completar tarea',
  props<{ payload: Tarea }>()
);
