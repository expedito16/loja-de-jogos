import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { JogosService } from '../jogos.service';

@Component({
  selector: 'app-lista-jogos',
  templateUrl: './lista-jogos.component.html',
  styleUrls: ['./lista-jogos.component.scss']
})
export class ListaJogosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'preco', 'dimensaoCaixa', 'acoes'];
  dataSource = new MatTableDataSource<any>();
  listaJogos: any[] = [];
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private service: JogosService
  ) {}

  ngOnInit() {
    this.getlistaJogos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  novoJogo(): void {
    this.router.navigate(['novo-jogo']);
  }

  getlistaJogos(): void {
    this.loading = true;
    this.service.getListaJogos().subscribe((dados) => {
      this.listaJogos = dados;
      this.dataSource.data = this.listaJogos;
      this.loading = false;
    });
  }

  visualizarJogoCadastrado(id: number): void {
    this.router.navigate(['visualizar-jogo', id]);
  }
}
