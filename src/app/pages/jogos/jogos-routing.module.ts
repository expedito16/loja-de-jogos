import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { NovoJogoComponent } from './novo-jogo/novo-jogo.component';

const routes: Routes = [
  { path: '**', redirectTo: 'lista-jogos', pathMatch: 'full' },
  { path: 'lista-jogos', component: ListaJogosComponent },
  { path: 'novo-jogo', component: NovoJogoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogosRoutingModule { }
