import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  juegos = [{id: 0, nombre_juego: 'Silent hill'},
    {id: 1, nombre_juego: 'Marvel vs Capcom'},
    {id: 2, nombre_juego: 'Mortal Kombat'}];
}
