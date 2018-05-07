import { Component, OnInit, Input } from '@angular/core';
import { InfosService } from './infos.service';

@Component({
  selector: 'app-velha',
  templateUrl: './velha.component.html',
  styleUrls: ['./velha.component.scss'],
})
export class VelhaComponent implements OnInit {
  //Recebe Os Jogadores em ordem
  public player1: string;
  public player2: string;

  //Controla o que será exibido como resposta
  public status: string;
  
  //Contador de Pontos
  public scoreboardPlayer1: number = 0;
  public scoreboardPlayer2: number = 0;

  //variável responsável pelas animações
  public animate: boolean = false;

  //Caso seja verdadeira chama a tela de reinicio
  public reset: boolean = false;

  //Recebe array de Nomes de outro component
  @Input() public players: string[];

  //Recebe o Jogador que inicia 
  @Input() public initialPlayer: Number; 

  //Controla de qual jogador é o turno
  public turn: Number = 1;

  //Recebe as variáveis através do Serviço
  public ReceiveData()
  {
    this.info.currentReset.subscribe(reset => this.reset = reset);
    this.info.currentStatus.subscribe(status => this.status = status);
    this.info.currentScoreboardPlayer1.subscribe(scoreboardPlayer1 => this.scoreboardPlayer1 = scoreboardPlayer1);
    this.info.currentScoreboardPlayer2.subscribe(scoreboardPlayer2 => this.scoreboardPlayer2 = scoreboardPlayer2);
  }

  //Recebe as mudanças ocorridas em outro componente e chama o método
  //para atualizar as variáveis
  public EventReceiver(changes)
  {
    this.ReceiveData();
  }

  //chamado quando o botão 'reset' é clicado
  public ChangesReset()
  {
    this.reset = !this.reset;
    this.info.ChangeReset(this.reset);
  }

  //Construtor
  constructor(private info: InfosService){}

  ngOnInit() {
    //Ordena os Jogadores
    if(this.initialPlayer == 1)
    {
      this.player1 = this.players[0];
      this.player2 = this.players[1];
    }
    else
    {
      this.player1 = this.players[1];
      this.player2 = this.players[0];
    }

    //Passa atraves do serviço o nome dos jogadores para o componente 'board'
    this.info.currentTurn.subscribe(turn =>this.turn = turn);
    this.info.ChangePlayers(this.player1,this.player2);
    
    //Chama o método que irá atualizar as variaveis
    this.ReceiveData();
  }


}