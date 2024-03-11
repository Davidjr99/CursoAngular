import { Component, OnInit } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})


export class DataBindingComponent implements OnInit{

  url: string = 'http://loiane.com;'

  cursoAngular: boolean = true;

  urlImagem = 'https://img.freepik.com/free-photo/sunrise-bali-jungle_1385-1644.jpg?w=900&t=st=1709819501~exp=1709820101~hmac=9bb6f0f6eb8c46dfbdc5dfed9e5bd7d6971179da0fe79768bbe35c8f1822c387'

  valorAtual: string = '';

  valorSalvador: string='';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  valorSalvo(valor: string){
    this.valorSalvador = valor;


  }

  // getValor(){
  //   return 1;
  // }
  // getCurtirCurso(){
  //   return true;
  // }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyup(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }

  salvarValor(valor: string){
    this.valorAtual = valor;

  }

  onmouseoverout(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() {}

  ngOnInit() {

  }

}
