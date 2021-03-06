import { ComunicacaoService } from './../comunicacao.service';
import { ModalService } from './../modal.service';
import { Baixa } from '../Models/VerificaPlaca.model';
import { VeiculoAtivo } from '../Models/VeiculoAtivo.model';
import { CarroService } from './../carro.service';
import { Component, OnInit, Injectable, Input, OnChanges, SimpleChanges, ErrorHandler } from '@angular/core';
import { DatePipe, PlatformLocation } from '@angular/common';
import { error } from '@angular/compiler/src/util';
import { ErrorObserver, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})

export class TabelaComponent implements OnInit, OnChanges {
  evento: Subscription;

  // baixa: Baixa;
  veiculo: VeiculoAtivo[];



  constructor(private CarroService: CarroService, private ModalService: ModalService, private comunicacaoService: ComunicacaoService) { }
  // constructor(private datePipe: DatePipe) {}



  ngOnInit(): void {

     // this.CarroService.getCarrosAtivos()
     // .subscribe(c => this.carro = c);

    this.CarroService.getCarrosAtivos().subscribe((data: VeiculoAtivo[]) => {
      console.log(data);
      this.veiculo = data;
    }
    );

    this.evento = this.comunicacaoService.getAtualiza().subscribe((teste: any) => {
      teste = this.onAtualiza();
    });

    console.log('init');

    // this.CarroService.getVerificaPlaca('QWE-1234').subscribe((data: Carro) => {
    //   console.log(data);
    //   this.vPlaca = data;
    //   console.log(this.vPlaca);
    // }
    // );

    // console.log(this.carro);

    //  this.dataService.sendGetRequest().subscribe((data: any[])=>{
    //   console.log(data);
    //   this.products = data;



    // this.CarroService.emitirCarros.subscribe(

    //   c => c.
    // )

  }



  ngOnChanges(change: SimpleChanges): void {

    console.log('Thiago');

  }

  public onAtualiza(): void{

    this.comunicacaoService.getAtualiza();

    this.CarroService.getCarrosAtivos().subscribe((data: VeiculoAtivo[]) => {
      console.log(data);
      this.veiculo = data;
    }
    );
  }

  onBaixa(placa: string): void{

    let baixa: Baixa;

    this.CarroService.putBaixa(placa).subscribe(
      (data: Baixa) => {
        console.log(data);
        baixa = data;


        // const entrada = this.baixa.entrada | date:'HH:mm dd/MM/yy'

        // const entrada = {this.baixa.entrada.}
        // this.datepipe.transform(this.date, 'yyyy-MM-dd');

        // let a  = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ssZZZZZ', 'en_US')

        // alert('Baixa no carro: \n' +
        //       'Placa: '   + this.baixa.placa + '\n' +
        //       'Marca: '   + this.baixa.marca + '\n' +
        //       'Modelo: '  + this.baixa.modelo + '\n' +
        //       'Cor: '     + this.baixa.cor + '\n' +
        //       'Entrada: ' + this.baixa.entrada + '\n' +
        //       'Saida: '   + this.baixa.saida + '\n' +
        //       'Tempo: '   + this.baixa.tempo + ' minutos\n' +
        //       'Valor: '   + this.baixa.valor + ' reais');

        this.ModalService.showBaixa(data);

        // timer(1000);
        // window.location.reload();

    },

    (err: Error) => {
        console.error(err);
        alert('Carro nao esta no patio.');
    }
    );


  }

}
