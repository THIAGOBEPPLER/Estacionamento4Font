import { Veiculo } from './../Models/Veiculo.model';
import { VerificaPlaca } from '../Models/VerificaPlaca.model';
import { VeiculoAtivo } from '../Models/VeiculoAtivo.model';
import { CarroService } from './../carro.service';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Injectable,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit, OnChanges {
  form: FormGroup;
  // public veiculos: Veiculo[] = [];
  // vPlaca: VerificaPlaca;
  // novoVeiculo: Veiculo = {};

  jaCadastrado = false;

  // vPlaca;
  // modelo: string;
  // marca: string;
  // cor: string;

  // emitirCarros = new EventEmitter();

  constructor(private fb: FormBuilder, private CarroService: CarroService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      placa: [null, [Validators.required]],
      marca: [null, [Validators.required]],
      modelo: [null, [Validators.required]],
      cor: [null, [Validators.required]],
    });

    console.log('init');


  }

  ngOnChanges(): void {

    console.log('changes');


  }

  onEntrada(): void {
    console.log( 'Carro ja cadastrado: ' + this.jaCadastrado);

    const placa = this.form.value.placa;

    this.CarroService.postEntrada(placa).subscribe(
      (data: string) => {
        console.log(data);
    });

    // else {

    //   console.log(this.novoVeiculo);


    //   this.novoVeiculo.placa = this.form.value.placa;
    //   this.novoVeiculo.marca = this.form.value.marca;
    //   this.novoVeiculo.modelo = this.form.value.modelo;
    //   this.novoVeiculo.cor = this.form.value.cor;

    //   console.log(this.novoVeiculo);

    //   this.CarroService.postCadastra(this.novoVeiculo).subscribe(
    //     (data: string) => {
    //       console.log(data);
    //   });

    //   timer(5000);

    //   this.CarroService.postEntrada(this.novoVeiculo.placa).subscribe(
    //     (data: string) => {
    //       console.log(data);
    //   });

    // }
    alert('Carro adicionado.');
    window.location.reload();

  }

  onCadastra(): void {
    const novoVeiculo: Veiculo = {};

    novoVeiculo.placa = this.form.value.placa;
    novoVeiculo.marca = this.form.value.marca;
    novoVeiculo.modelo = this.form.value.modelo;
    novoVeiculo.cor = this.form.value.cor;

    console.log(novoVeiculo);

    this.CarroService.postCadastra(novoVeiculo).subscribe(
      (data: string) => {
        console.log(data);

    });

    this.jaCadastrado = true;

    // timer(10000);


    // this.CarroService.postEntrada(this.novoVeiculo.placa).subscribe(
    //   (data: string) => {
    //     console.log(data);
    // });


    // alert('Carro adicionado.');
    // window.location.reload();
  }

  onVerificaPlaca(): void {
    let vPlaca: VerificaPlaca;

    const placa = this.form.value.placa;
    this.CarroService.getVerificaPlaca(placa).subscribe(
      (data: VerificaPlaca) => {
        console.log(data);
        // this.vPlaca = data;
        // console.log(this.vPlaca);

        if (data === null) {
          this.jaCadastrado = false;
          console.log('Placa nao cadastrada.');
          this.form.patchValue({
            marca: '',
            modelo: '',
            cor: '',
            // teste: ''
          });
        } else {
          this.jaCadastrado = true;
          vPlaca = data;
          // this.form.setValue({marca: this.vPlaca.marca,
          //                     mpdelo: this.vPlaca.modelo,
          //                     cor: this.vPlaca.cor});

          console.log(vPlaca.marca);
          console.log(vPlaca.modelo);
          console.log(vPlaca.cor);

          this.form.patchValue({
            marca: vPlaca.marca,
            modelo: vPlaca.modelo,
            cor: vPlaca.cor
          });

          // this.form.setValue({first: 'Carson', last: 'Drew'});
        }
      }
    );
  }

  // onSubmit(){

  //   console.log(this.form.value);
  //   if (this.form.valid){
  //     console.log('Submit');

  //     // this.carros.push(this.form.value);
  //     // this.emitirCarros.emit(this.carros);
  //    // CarroServiceaddCarro(this.form.value);
  //   }

  //   this.carroService.addCarro(this.form.value);

  //   this.form.reset();

  // }
}
