import { HistoricoComponent } from './historico/historico.component';
import { AtivosComponent } from './ativos/ativos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'ativos', component: AtivosComponent},
  {path: 'historico', component: HistoricoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
