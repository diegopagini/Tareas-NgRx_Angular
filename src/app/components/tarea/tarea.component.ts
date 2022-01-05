import { Component, Input } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.interface';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
})
export class TareaComponent {
  @Input() tarea: Tarea = {
    nombre: 'comprar pan',
    completado: true,
    id: Math.random(),
  };

  constructor() {}
}
