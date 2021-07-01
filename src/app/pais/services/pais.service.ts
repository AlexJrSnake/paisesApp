import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrlPais:string = "https://restcountries.eu/rest/v2"

  constructor(private http:HttpClient) { }

  get httpParasm(){
    return  new HttpParams()
    .set("fields","name;capital;alpha2Code;flag;population")
  }

  buscarPais(termino:string): Observable<Country[]>{
    const url = `${this.apiUrlPais}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParasm})
  }

  buscarCapital(termino:string): Observable<Country[]>{
    const url = `${this.apiUrlPais}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParasm})
  }

  getPaisPorCodigo(id:string): Observable<Country>{
    const url = `${this.apiUrlPais}/alpha/${id}`;
    return this.http.get<Country>(url)
  }

  buscarRegion(termino:string): Observable<Country[]>{
    const url = `${this.apiUrlPais}/region/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParasm})
  }
}
