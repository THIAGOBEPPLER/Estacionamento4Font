import { Baixa } from './Models/VerificaPlaca.model';
import { Veiculo } from './Models/Veiculo.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarroService {

  private urlVeiculo = 'http://localhost:64711/api/veiculo/';
  private urlPatio = 'http://localhost:64711/api/patio/';


  emitirCarros = new EventEmitter<Veiculo>();

  private carros: Veiculo[] = [];

  constructor(private http: HttpClient) {}

  putBaixa(placa: string): Observable<Baixa>{
    const url = this.urlPatio.concat(placa);
    return this.http.put<Baixa>(url, placa);
  }

  getCarrosAtivos(): Observable<Veiculo> {
    return this.http.get<Veiculo>(this.urlVeiculo);

  }

  getVerificaPlaca(placa: string): Observable<any> {
    const url = this.urlVeiculo.concat(placa);
    console.log(url);
    return this.http.get(url);
  }

  postEntrada(placa: string): Observable<string> {
    const url = this.urlPatio.concat(placa);
    return this.http.post<string>(url, placa);
  }

  postCadastra( veiculo: Veiculo): Observable<string> {
    const url = this.urlVeiculo.concat(veiculo.placa);
    return this.http.post<string>(url, veiculo);
  }

}
