import { Baixa } from '../Models/VerificaPlaca.model';
import { VeiculoAtivo } from '../Models/VeiculoAtivo.model';
import { CarroService } from './../carro.service';
import { Component, OnInit, Injectable, Input, OnChanges, SimpleChanges, ErrorHandler } from '@angular/core';
import { DatePipe, PlatformLocation } from '@angular/common';
import { error } from '@angular/compiler/src/util';
import { ErrorObserver } from 'rxjs';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit, OnChanges {

  baixa: Baixa;
  veiculo: VeiculoAtivo;

  constructor(private CarroService: CarroService) { }
  // constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {

     // this.CarroService.getCarrosAtivos()
     // .subscribe(c => this.carro = c);

    this.CarroService.getCarrosAtivos().subscribe((data: VeiculoAtivo) => {
      console.log(data);
      this.veiculo = data;
      console.log(typeof this.veiculo.entrada);
    }
    );

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

  ngOnChanges(): void {

    console.log('Thiago');

  }

  onBaixa(placa: string){



    this.CarroService.putBaixa(placa).subscribe(
      (data: Baixa) => {
        console.log(data);
        this.baixa = data;

        // const entrada = this.baixa.entrada | date:'HH:mm dd/MM/yy'

        // const entrada = {this.baixa.entrada.}
        // this.datepipe.transform(this.date, 'yyyy-MM-dd');

        // let a  = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ssZZZZZ', 'en_US')

        alert('Baixa no carro: \n' +
              'Placa: '   + this.baixa.placa + '\n' +
              'Marca: '   + this.baixa.marca + '\n' +
              'Modelo: '  + this.baixa.modelo + '\n' +
              'Cor: '     + this.baixa.cor + '\n' +
              'Entrada: ' + this.baixa.entrada + '\n' +
              'Saida: '   + this.baixa.saida + '\n' +
              'Tempo: '   + this.baixa.tempo + ' minutos\n' +
              'Valor: '   + this.baixa.valor + ' reais');

        window.location.reload();

    },

    (error: Error) => {
        console.error(error);
        alert('Carro nao esta no patio.');
    }
    );


  }

}
