import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JogosService } from '../jogos.service';

@Component({
  selector: 'app-visualizar-jogo',
  templateUrl: './visualizar-jogo.component.html',
  styleUrls: ['./visualizar-jogo.component.scss']
})
export class VisualizarJogoComponent implements OnInit {

  id: number = 0;
  form!: FormGroup;
  caixaSelecionada: any;
  loading: boolean = false;

  caixas = [
    { id: 1, altura: 30, largura: 40, comprimento: 80 },
    { id: 2, altura: 80, largura: 50, comprimento: 40 },
    { id: 3, altura: 50, largura: 80, comprimento: 60 }
  ];

  constructor(
    private service: JogosService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.carregarDadosDoJogo();
  }

  initForm() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.min(0)]],
      preco: ['', Validators.required],
      dimensaoCaixa: ['', Validators.required],
      descricao: ['', Validators.required],
      imagem: [null, Validators.required],
    });
  }

  onSelectCaixa(event: any) {
    const caixaId = event.target.value;
    this.caixaSelecionada = this.caixas.find(caixa => caixa.id === +caixaId);
    this.form.get('dimensaoCaixa')?.setValue(caixaId);
  }

  carregarDadosDoJogo() {
    this.loading = true;
    this.id = this.route.snapshot.params['id'];
    this.service.visualizarJogoCriadoPorId(this.id).subscribe(jogo => {
      this.loading = false;
      this.form.patchValue({
        nome: jogo.nome,
        preco: jogo.preco,
        descricao: jogo.descricao,
        dimensaoCaixa: jogo.dimensaoCaixa,
        imagem: jogo.imagem
      });

      this.caixaSelecionada = this.caixas.find(caixa => caixa.id === jogo.dimensaoCaixa);
      this.form.disable();
    });
  }

  voltar(): void {
    this.router.navigate(['lista-jogos']);
  }

}
