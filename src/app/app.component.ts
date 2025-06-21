import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaElementosComponent } from './lista-elementos/lista-elementos.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaElementosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-de-elementos';
}
