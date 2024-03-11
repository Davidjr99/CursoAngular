import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DataBinding2Component } from './data-binding2/data-binding2.component';
import { HttpClientModule } from '@angular/common/http';
import { DataBinding2Service } from './data-binding2.service';

@NgModule({
  declarations: [
    AppComponent, DataBinding2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(), DataBinding2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
