import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.css']
})
export class SaidaComponent implements OnInit {

  @Input() placa: string;

  constructor(public bsModalRef: BsModalRef ) { }

  ngOnInit(): void {
  }

  onImprimir(){
    this.bsModalRef.hide();
  }

}
