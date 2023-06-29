import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rueda',
  templateUrl: './rueda.component.html',
  styleUrls: ['./rueda.component.scss'],
})
export class RuedaComponent {
  //descripcion: string = 'rueda buena';

  @Input() identificador!: string;
  @Input() marca!: string;
  @Input() precio!: number;

  urlFoto="https://static.wbsc.org/assets/cms/5cf7705d-77e0-bea4-a791-ec2ed468c94323.jpg";

  @Output() ruedaSeleccionada = new EventEmitter<any>();

  emitirSeleccion(){
    let pieza ={
      identificador: this.identificador,
      marca: this.marca,
      precio: this.precio
    }
    this.ruedaSeleccionada.emit(pieza);
  }
}
