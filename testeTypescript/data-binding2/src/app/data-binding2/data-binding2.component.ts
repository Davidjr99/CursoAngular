import { Component } from '@angular/core';
import { DataBinding2Service } from '../data-binding2.service';

@Component({
  selector: 'cpt-data-binding2',
  templateUrl: './data-binding2.component.html',
  styleUrl: './data-binding2.component.css',
})
export class DataBinding2Component {
  selectedNumber: number = 1;
  tabuada: string = '';
  dogImage: string = '';

  constructor(private serviceDog: DataBinding2Service) {}

  ngOnInit() {
    this.serviceDog.garimparDog().subscribe({
      next: (result) => {
        this.dogImage = result.message;
      },
    });
  }

  GerarDog(){
    this.serviceDog.garimparDog().subscribe({
      next: (result) => {
        this.dogImage = result.message;
      },
    });

  }

  // two-way binding

  nome: string = 'abc';

  teste(evento: any) {
    console.log('qdqwd');
  }

  generateTabuada() {
    this.tabuada = '';
    for (let i = 1; i <= 10; i++) {
      const result = this.selectedNumber * i;
      this.tabuada += `${this.selectedNumber} * ${i} = ${result}\n`;
    }
  }

  getImageUrl(number: number): any {
    if (number == 1) {
      return 'https://img.wattpad.com/199f50dab398f311abed158170b45080802450e8/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f59473676794158424373446141413d3d2d3235343434343339322e313434633639346333663861666664362e6a7067?s=fit&w=720&h=720';
    } else if (number == 2) {
      return 'https://midias.correio24horas.com.br/2023/03/10/-1200428.jpg';
    } else if (number == 3) {
      return 'https://static.vakinha.com.br/uploads/vakinha/image/408263/FB_IMG_1542640342136.jpg';
    } else if (number == 4) {
      return'https://www.cursoemvideo.com/wp-content/uploads/2021/07/Guanabara2.png';


    }
  }
}
