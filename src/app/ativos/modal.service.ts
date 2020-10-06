import { TabelaComponent } from './tabela/tabela.component';
import { Veiculo } from './Models/Veiculo.model';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Baixa } from './Models/VerificaPlaca.model';
import { SaidaComponent } from './tabela/saida/saida.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalServise: BsModalService) { }

  showBaixa(veiculo: Baixa){
    const bsModalRef: BsModalRef = this.modalServise.show(SaidaComponent);
    bsModalRef.content.veiculo = veiculo;
  }
}
