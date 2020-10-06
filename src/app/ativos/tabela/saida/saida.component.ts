import { Baixa } from './../../Models/VerificaPlaca.model';
import { Veiculo } from './../../Models/Veiculo.model';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { Component, Input, ModuleWithProviders, OnInit } from '@angular/core';
import { observable } from 'rxjs';


@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.css']
})
export class SaidaComponent implements OnInit {

  @Input() veiculo: Baixa = {};

  // console.log(veiculo);

  // placa = this.veiculo.placa;

  // static forRoot(): ModuleWithProviders<SaidaComponent> {
  //   return {
  //     ngModule: SaidaComponent
  //   };
  // }

  constructor(public bsModalRef: BsModalRef ) { }



  ngOnInit(): void {
    console.log(this.veiculo.placa);
  }

  onImprimir(): void{
    this.bsModalRef.hide();
    window.location.reload();
  }

}

