import { Component,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.scss']
})
export class JogadoresComponent {
  //caso seja verdadeira o tabuleiro será mostrado
  private initiate: boolean = false;
  //Recebe o nome dos Jogadores e aloca em um array
  private playerNames: string[];
  
  //Recebe o nome dos pelo input da página
  public player1: string = '';
  public player2: string = '';
  //Recebe o Jogador que irá começar
  public initialPlayer: any = 0;
  //Emissor de evento para o componente pai
  @Output() public emitter = new EventEmitter();
  //Emissor do Nome dos jogadores
  @Output() public emitterNames = new EventEmitter<string[]>();
  
  //Metodo responsável por iniciar o Jogo
  public Initiate()
  {
    if(this.player1 && this.player2)
    {
      //Define o status do Jogo como iniciado
      this.initiate = true;
      this.Emit();
    }
  }

  //Gera número Inteiro aleatório entre 1 e 2 que decide quem irá iniciar a partida
  public GetRandom()
  {   
    if(this.initialPlayer == 0)
    {
      let min = Math.ceil(1);
      let max = Math.floor(2);
      this.initialPlayer = Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

  //Passa os resultados para o componente pai
  private Emit()
  {
    this.playerNames = [this.player1, this.player2];
    this.emitter.emit(this.initiate);
    this.emitter.emit(this.initialPlayer);
    this.emitterNames.emit(this.playerNames);
  }


}
