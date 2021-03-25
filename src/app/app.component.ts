import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  edadUno:string;
  edadDos:string;
  promedio : number;
  suma: number;
  limpiar : string;
  calculo : number;

  constructor(){
    this.title = 'clase1';
    this.edadUno ='';
    this.edadDos='';
    this.promedio = 0;
    this.suma = 0;
    this.limpiar = '';
    this.calculo = 0;
  }


  HacerCambios(){
    this.title='angular 2021, bienvenidos';
  }

  obtenerPromedio():number{
    this.promedio=this.obtenerSuma()/2;
    return this.calculo=this.promedio;

  }
  obtenerSuma():number{
    this.suma=parseInt(this.edadUno)+parseInt(this.edadDos);
    return this.calculo=this.suma;
  }
  limpiarCuadrosDeTextos(){
    this.edadUno ='';
    this.edadDos='';
    this.calculo=0;
  }
}
