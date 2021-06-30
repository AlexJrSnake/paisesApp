import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap, tap } from "rxjs/operators"

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor(private acticatedRoute: ActivatedRoute,
              private PaisService: PaisService
  ) { }

  ngOnInit(): void {
    // this.acticatedRoute.params
    //     .subscribe( ({codigoPais}) => {
    //       this.PaisService.getPaisPorCodigo(codigoPais).subscribe(
    //         pais =>{
    //             console.log(pais);
    //         })
    //     })

    this.acticatedRoute.params
    .pipe(
      switchMap( ({codigoPais}) => 
          this.PaisService.getPaisPorCodigo(codigoPais)
      ),
      tap(console.log)
    )
    .subscribe(pais=>{
      this.pais = pais
    })
  }

}
