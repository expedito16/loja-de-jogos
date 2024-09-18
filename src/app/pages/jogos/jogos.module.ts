import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { JogosRoutingModule } from './jogos-routing.module';

//Module
import { SharedModule } from '../../shared/shared.module';

//Pages
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { NovoJogoComponent } from './novo-jogo/novo-jogo.component';
import { VisualizarJogoComponent } from './visualizar-jogo/visualizar-jogo.component';


@NgModule({
  declarations: [
    ListaJogosComponent,
    NovoJogoComponent,
    VisualizarJogoComponent
  ],
  imports: [
    CommonModule,
    JogosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class JogosModule { }
