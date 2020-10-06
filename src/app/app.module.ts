import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AtivosComponent } from './ativos/ativos.component';
import { HistoricoComponent } from './historico/historico.component';
import { CadastroComponent } from './ativos/cadastro/cadastro.component';
import { TabelaComponent } from './ativos/tabela/tabela.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SaidaComponent } from './ativos/tabela/saida/saida.component';

import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AtivosComponent,
    HistoricoComponent,
    CadastroComponent,
    TabelaComponent,
    SaidaComponent
  ],
  entryComponents: [
    SaidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule,
    NgbModule
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
