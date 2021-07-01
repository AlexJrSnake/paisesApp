import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor:pointer;
      }
    `
  ]
})
export class PorPaisComponent implements OnInit {

  termino:string = "España"
  hayError:boolean = false;
  paises: Country[]=[];
  paisesSugeridos: Country[]=[];
  mostrarSugerencia:boolean = false

  constructor(private paisServices:PaisService) { }

  ngOnInit(): void {
  }

  Buscar(termino:string){
    this.mostrarSugerencia = false
    this.hayError = false;
    this.termino = termino;
    this.paisServices.buscarPais(this.termino)
    .subscribe(paises => {
      console.log(paises); 
      this.paises = paises
    },
    (err) =>{
      this.hayError = true;
      console.log("error");
      console.info(err);
    })
  }

  Sugerencias(termino:string){
    this.mostrarSugerencia = true
    this.hayError = false;
    this.termino = termino;

    this.paisServices.buscarPais(termino)
    .subscribe(paises => {
      this.paisesSugeridos = paises.splice(0,5);
    },
    (err) =>{
      this.paisesSugeridos = []
    })
  
  }

  buscarSugerido(termino:string){
    console.log(termino);
    
    this.Buscar(termino)
    // this.mostrarSugerencia = false
  }

}
