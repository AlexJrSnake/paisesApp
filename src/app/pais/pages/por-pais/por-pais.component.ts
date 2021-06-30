import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino:string = "España"
  hayError:boolean = false;
  paises: Country[]=[];

  constructor(private paisServices:PaisService) { }

  ngOnInit(): void {
  }

  Buscar(termino:string){
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
    this.hayError = false;
    this.termino = termino;
  }

}
