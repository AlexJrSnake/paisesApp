import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right:5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones:string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  regionActiva:string = ""
  paises: Country[]=[];
  
  constructor(private paisServices:PaisService) { }

  ngOnInit(): void {
  }

  getClasesCSS(region:string){
    return (region === this.regionActiva) ? 'btn btn-primary ':'btn btn-outline-primary' 
  }

  activarRegion(region:string){
    if (this.regionActiva === region) {
      return
    }
    this.regionActiva = region
    this.paises = []
    this.paisServices.buscarRegion(this.regionActiva)
    .subscribe(paises => {
      console.log(paises); 
      this.paises = paises
    },
    (err) =>{
      console.log("error");
      console.info(err);
    })
  }

}
