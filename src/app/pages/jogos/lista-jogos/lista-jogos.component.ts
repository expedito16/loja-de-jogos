import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JogosService } from '../jogos.service';

@Component({
  selector: 'app-lista-jogos',
  templateUrl: './lista-jogos.component.html',
  styleUrl: './lista-jogos.component.scss'
})
export class ListaJogosComponent implements OnInit {

  listaJogos: any[] = [];

  constructor(
    private router: Router,
    private service: JogosService
  ) {}

  ngOnInit() {
    this.getlistaJogos();
  }

  novoJogo(): void {
    this.router.navigate(['novo-jogo']);
  }

  getlistaJogos(): void {
    this.service.getListaJogos().subscribe((dados) => {
      this.listaJogos = dados;
    })
  }

  visualizarJogoCadastrado(id: number): void {
    this.router.navigate(['visualizar-jogo', id]);
  }
}
