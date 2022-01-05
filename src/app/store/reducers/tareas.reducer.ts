import { createReducer, on } from '@ngrx/store';
import { EstadoInicial } from 'src/app/models/estado-inicial.interface';
import { Tarea } from 'src/app/models/tarea.interface';
import {
  completarTarea,
  crearTarea,
  eliminarTarea,
} from '../actions/tareas.actions';

const estadoInicial: EstadoInicial = {
  tareas: [
    { nombre: 'sacar la basura', id: Math.random(), completado: false },
    { nombre: 'comprar leche', id: Math.random(), completado: true },
    { nombre: 'comprar pan', id: Math.random(), completado: false },
    { nombre: 'comprar carne', id: Math.random(), completado: true },
  ],
};

export const tareasReducer = createReducer(
  estadoInicial,
  on(crearTarea, (state, action) => ({
    tareas: [...state.tareas, action.payload],
  })),

  on(eliminarTarea, (state, action) => ({
    tareas: [
      ...state.tareas.filter((tarea: Tarea) => tarea.id !== action.payload.id),
    ],
  })),
  on(completarTarea, (state, action) => ({
    tareas: [
      ...state.tareas.map((tarea: Tarea) => {
        if (tarea.id === action.payload.id) {
          return { ...tarea, completado: true };
        }
        return tarea;
      }),
    ],
  }))
);
