import { Component,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.scss']
})
export class JogadoresComponent {
  //Recebe o nome dos Jogadores
  Jogador1: string = '';
  Jogador2: string = '';
  
  //Recebe o Jogador que irá começar
  Jogada: any;
  
  //Bolean que inicia o Jogo
  Init: boolean = false;
  
  //Boolean de controle da visibilidade dos cards
  BooleanCard: boolean = true;
  
  //Emissor de evento para o filho
  @Output() Emiter = new EventEmitter();
  
  //Passa os nomes dos Jogadores
  @Output() Nomes = new EventEmitter<string[]>();
  NomeArray: string[];
  
  //Gera número Inteiro aleatório entre 1 e 2
  getRandom()
  {
      let min = Math.ceil(1);
      let max = Math.floor(2);
      this.Jogada = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Metodo responsável por iniciar o Jogo
  Inicia()
  {
    if(this.Jogador1 && this.Jogador2)
    {
      this.getRandom();
      //Define o status do Jogo como iniciado
      this.Init = true;
      this.BooleanCard = false;
      this.Emite();
    }
  }
  //Passa os resultados para o componente filho
  Emite()
  {
    this.NomeArray = [this.Jogador1, this.Jogador2];
    this.Emiter.emit(this.Init);
    this.Emiter.emit(this.Jogada);
    this.Nomes.emit(this.NomeArray);
  }

  constructor() { }
}
