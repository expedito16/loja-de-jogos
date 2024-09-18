import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JogosService } from '../jogos.service';

@Component({
  selector: 'app-novo-jogo',
  templateUrl: './novo-jogo.component.html',
  styleUrls: ['./novo-jogo.component.scss']
})
export class NovoJogoComponent implements OnInit {

  form!: FormGroup;
  caixaSelecionada: any;

  caixas = [
    { id: 1, altura: 30, largura: 40, comprimento: 80 },
    { id: 2, altura: 80, largura: 50, comprimento: 40 },
    { id: 3, altura: 50, largura: 80, comprimento: 60 }
  ];

  constructor(
    private service: JogosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.min(0)]],
      preco: ['', Validators.required],
      dimensaoCaixa: ['', Validators.required],
      descricao: ['', Validators.required],
      imagem: [null , Validators.required],
    });
  }

  onSelectCaixa(event: any) {
    const caixaId = event.target.value;
    this.caixaSelecionada = this.caixas.find(caixa => caixa.id === +caixaId);
    this.form.get('dimensaoCaixa')?.setValue(caixaId);
  }

  cancelar(): void {
    this.router.navigate(['lista-jogos']);
  }

  cadastrar(): void {
    if (this.form.valid) {
      const nome = this.form.get('nome')!.value;
      const preco = this.form.get('preco')!.value;
      const dimensaoCaixa = this.form.get('dimensaoCaixa')!.value;
      const descricao = this.form.get('descricao')!.value;
      const imagem = this.form.get('imagem')!.value;

      const dados = { nome: nome, preco: preco, dimensaoCaixa: dimensaoCaixa, descricao: descricao, imagem: imagem }
      this.service.criarNovoJogo(dados).subscribe(() => {
        this.router.navigate(['lista-jogos']);
      });
    }
  }
}
