import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
import { crearTarea, eliminarTarea } from '../actions/tareas.actions';

@Injectable()
export class TareasEffects {
  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}

  crearTarea$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(crearTarea),
        tap((action) =>
          this.messageService.mostrarMensaje(
            action.payload,
            'Agregado/a a la lista de tareas'
          )
        )
      ),
    {
      dispatch: false,
    }
  );

  borrarTarea$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(eliminarTarea),
        tap((action) =>
          this.messageService.mostrarMensaje(
            action.payload,
            'Eliminado/a de la lista de tareas'
          )
        )
      ),
    {
      dispatch: false,
    }
  );
}
