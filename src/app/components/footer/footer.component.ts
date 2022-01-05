import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/models/tarea.interface';
import {
  selectorDeTareasCompletadas,
  selectorDeTareasIncompletas,
} from 'src/app/store/selectors/tareas.selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  tareasCompletadas$: Observable<Tarea[]>;
  tareasIncompletas$: Observable<Tarea[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.tareasCompletadas$ = this.store.select(selectorDeTareasCompletadas);
    this.tareasIncompletas$ = this.store.select(selectorDeTareasIncompletas);
  }
}
