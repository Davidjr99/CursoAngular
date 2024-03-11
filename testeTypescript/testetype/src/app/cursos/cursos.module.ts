import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [CursosComponent, CursoDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent, CursoDetailComponent
  ],
  providers: [CursosService],
})
export class CursosModule { }
