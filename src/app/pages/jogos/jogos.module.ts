import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogosRoutingModule } from './jogos-routing.module';

//Pages
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { NovoJogoComponent } from './novo-jogo/novo-jogo.component';


@NgModule({
  declarations: [
    ListaJogosComponent,
    NovoJogoComponent
  ],
  imports: [
    CommonModule,
    JogosRoutingModule
  ]
})
export class JogosModule { }
