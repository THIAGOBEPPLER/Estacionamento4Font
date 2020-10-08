import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacaoService {

  constructor() { }

  private subject = new Subject<any>();

  sendAtualiza(): void{
    this.subject.next();
  }
  getAtualiza(): Observable<any>{
    return this.subject.asObservable();
  }
}
