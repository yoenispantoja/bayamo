import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent {
  tipo = 'info';
  seleccionada: string = '';

  ruedas = [
    {
      identificador: 'delantera-derecha',
      marca: 'michelin',
      precio: 100,
    },
    {
      identificador: 'delantera-izquierda',
      marca: 'iguazu',
      precio: 200,
    },
    {
      identificador: 'trasera-derecha',
      marca: 'JBL',
      precio: 150,
    },
    {
      identificador: 'trasera-izquierda',
      marca: 'corona',
      precio: 600,
    }
  ];

  evaluacion!: string;

  recibirSeleccionRueda(pieza: any){
    this.seleccionada = pieza.identificador + ' (' + pieza.marca + ') ' + pieza.precio;
    this.evaluacion = parseFloat(pieza.precio) > 150 ? 'Caro' : 'Barato';
  }
}
