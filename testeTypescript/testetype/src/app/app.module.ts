import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { CursosModule } from './cursos/cursos.module';
import { FormsModule } from '@angular/forms';
import { Teste2Component } from './teste2/teste2.component';
import { Teste3OutComponent } from './teste3-out/teste3-out.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    Teste2Component,
    Teste3OutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
