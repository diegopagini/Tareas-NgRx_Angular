import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TareaComponent } from './tarea/tarea.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TareaComponent,
    ListaTareasComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    TareaComponent,
    ListaTareasComponent,
  ],
})
export class ComponentsModule {}
