import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = ""; 

  debonce: Subject<string> = new Subject();
  termino: string = ""

  constructor() { }

  ngOnInit() {
    this.debonce
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit(valor)
    })
  }

  Buscar() {
    this.onEnter.emit(this.termino)
  }

  teclaPresionada(event: any) {
    const valor = event.target.value;
    this.debonce.next(valor)
  }
}

