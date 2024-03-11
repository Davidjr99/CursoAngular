import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  valorInicial = 15;

  onMudouValor(evento: any){
    console.log(evento);
  }

}
