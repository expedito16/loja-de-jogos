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
  imagePreview: string | ArrayBuffer | null = null;
  loading: boolean = false;

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
      descricao: ['']
    });
  }

  onPrecoInput(event: any): void {
    let value = event.target.value;
    value = value.replace(/\D/g, '');
    const decimalValue = parseFloat(value) / 100;
    event.target.value = decimalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    this.form.get('preco')!.setValue(decimalValue.toFixed(2));
  }

  onSelectCaixa(event: any) {
    const caixaId = event.target.value;
    this.caixaSelecionada = this.caixas.find(caixa => caixa.id === +caixaId);

    if (this.caixaSelecionada) {
      const dimensaoFormatada = `${this.caixaSelecionada.altura} x ${this.caixaSelecionada.largura} x ${this.caixaSelecionada.comprimento}`;
      this.form.get('dimensaoCaixa')?.setValue(dimensaoFormatada);
    }
  }

  onImageSelected(e: any): void {
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.imagePreview = event.target.result;
      };
      reader.readAsDataURL(e.target.file);
    }
  }

  cancelar(): void {
    this.router.navigate(['lista-jogos']);
  }

  cadastrar(): void {
    if (this.form.valid) {
      this.loading = true;
      const nome = this.form.get('nome')!.value;
      const preco = this.form.get('preco')!.value;
      const dimensaoCaixa = this.form.get('dimensaoCaixa')!.value;
      const descricao = this.form.get('descricao')!.value;

      const dados = { nome: nome, preco: preco, dimensaoCaixa: dimensaoCaixa, descricao: descricao, imagem: this.imagePreview }
      this.service.criarNovoJogo(dados).subscribe(() => {
        this.router.navigate(['lista-jogos']);
        this.loading = false;
      });
    }
  }
}
