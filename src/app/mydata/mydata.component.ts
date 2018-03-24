import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css']
})
export class MydataComponent implements OnInit {

  @Input() nombre_usuario = '';

  @Input() game: {id: number, nombre_juego: string};
  constructor() { }

  ngOnInit() {
  }

}
