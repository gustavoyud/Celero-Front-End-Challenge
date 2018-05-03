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
  @Output() Emiter = new EventEmitter<boolean>();

  //Metodo responsável por iniciar o Jogo
  Inicia()
  {
    if(this.Jogador1 && this.Jogador2)
    {
      //Gera número Inteiro aleatório entre 1 e 2
      var min = Math.ceil(1);
      var max = Math.floor(2);
      this.Jogada = Math.floor(Math.random() * (max - min + 1)) + min;
    
      //Define o status do Jogo como iniciado
      this.Init = true;
      this.BooleanCard = false;
      this.Emite();
    }
  }

  Emite()
  {
    this.Emiter.emit(this.Init);
  }

  constructor() { }
}
