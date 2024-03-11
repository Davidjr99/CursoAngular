import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrl: './teste2.component.css'
})
export class Teste2Component implements OnInit {

 @Input() nome: string | null = null;
 @Input() idade: number | null = null;

 constructor() {
}
ngOnInit(): void {


}
}
