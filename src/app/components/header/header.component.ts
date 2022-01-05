import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/models/tarea.interface';
import { selectorDeTareas } from 'src/app/store/selectors/tareas.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tareas$: Observable<Tarea[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.tareas$ = this.store.select(selectorDeTareas);
  }
}
