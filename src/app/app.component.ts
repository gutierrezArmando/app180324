import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  juegos = [];

  juegoAgregado(datosJuego: {id_juego: number, nombre_juego: string}) {
    this.juegos.push({ id: datosJuego.id_juego, nombre_juego: datosJuego.nombre_juego});
  }
}
