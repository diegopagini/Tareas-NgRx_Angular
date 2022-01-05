import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EstadoInicial } from 'src/app/models/estado-inicial.interface';
import { Tarea } from 'src/app/models/tarea.interface';

export const selector = createFeatureSelector<EstadoInicial>('app');

export const selectorDeTareas = createSelector(selector, (app) => app.tareas);

export const selectorDeTareasCompletadas = createSelector(selector, (app) =>
  app.tareas.filter((tarea: Tarea) => tarea.completado === true)
);

export const selectorDeTareasIncompletas = createSelector(selector, (app) =>
  app.tareas.filter((tarea: Tarea) => tarea.completado === false)
);
