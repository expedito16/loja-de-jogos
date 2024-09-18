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
  loading: boolean = false;

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
    this.loading = true;
    this.service.getListaJogos().subscribe((dados) => {
      this.listaJogos = dados;
      this.loading = false;
    })
  }

  visualizarJogoCadastrado(id: number): void {
    this.router.navigate(['visualizar-jogo', id]);
  }
}
