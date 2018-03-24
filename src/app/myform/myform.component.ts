import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  @Output() juegoCreado = new EventEmitter<{id_juego: number, nombre_juego: string}>();
  constructor() { }

  ngOnInit() {
  }

  agregarJuego (idCapturado: HTMLInputElement, nombreCapturado: HTMLInputElement) {
    this.juegoCreado.emit({
      id_juego: Number(idCapturado.value),
      nombre_juego: nombreCapturado.value
    });
  }

}
