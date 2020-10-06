import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { Component, Input, ModuleWithProviders, OnInit } from '@angular/core';


@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.css']
})
export class SaidaComponent implements OnInit {

  // @Input() placa: string;
  // static forRoot(): ModuleWithProviders<SaidaComponent> {
  //   return {
  //     ngModule: SaidaComponent
  //   };
  // }



  constructor(public bsModalRef: BsModalRef ) { }

  ngOnInit(): void {
  }

  onImprimir(){
    this.bsModalRef.hide();
  }



}

