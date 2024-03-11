import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './teste3-out.component.html',
  styleUrl: './teste3-out.component.css'
})
export class Teste3OutComponent {
  @Input () valor: number = 0;

  @Output() mudouValor: any = new EventEmitter();

  incrementa(){
    this.valor++;
    this.mudouValor.emit ({novoValor: this.valor});

  }
  decrementa(){
    this.valor--;
    this.mudouValor.emit ({novoValor: this.valor});
  }

}
