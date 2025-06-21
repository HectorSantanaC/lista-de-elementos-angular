import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-lista-elementos',
  imports: [CommonModule],
  templateUrl: './lista-elementos.component.html',
  styleUrl: './lista-elementos.component.css'
})
export class ListaElementosComponent {
  elementos: string[] = [];

  agregarElemento(input: HTMLInputElement) {
    const nuevoElemento = input.value.trim();
      if (nuevoElemento) {
        this.elementos.push(nuevoElemento);
    } else {
      alert('Introduce un elemento')
    }
    input.value = '';
  }
}
