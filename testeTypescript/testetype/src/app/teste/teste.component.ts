import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20,
    local: {

      Rua: 'endereço',


    }

  }

  nomeDoCurso: string = 'Java';
  nomeDoCurso2: number = 3;


  teste(evento: any) {
    console.log('qdqwd');
  }

}
