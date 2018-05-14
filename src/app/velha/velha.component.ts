import { Component, OnInit, Input } from '@angular/core';
import { InfosService } from 'app/services/infos.service';
/**
 *  Velha Component
 *
 *  Author: Gustavo Yud
 */
@Component({
  selector: 'app-velha',
  templateUrl: './velha.component.html',
  styleUrls: ['./velha.component.scss'],
})
export class VelhaComponent implements OnInit {
  /**
   * Recebe os Jogadores em ordem
   */
  public player1: string;
  public player2: string;
  /**
   * Controla o que será exibido como resposta
   */
  public status: string;
  /**
   * Contador de Pontos do Jogador 1
   */
  public scoreboardPlayer1 = 0;
  /**
   * Contador de Pontos do jogador2
   */
  public scoreboardPlayer2 = 0;
  /**
   * Boolean responsável pelas animações
   */
  public animate = false;
  /**
   * Caso Seja verdadeira chama a tela de reinicio
   */
  public reset = false;
  /**
   * Receve o array de Nomes de outro Componente
   */
  @Input() public players: string[];
  /**
   * Recebe qual jogador irá iniciar o Jogo
   */
  @Input() public initialPlayer: Number;
  /**
   * Controla de qual jogador será o turno
   */
  public turn: Number = 1;

  /**
   * Recebe as variáveis através do serviço
   */
  public ReceiveData() {
    this.info.currentReset.subscribe(reset => this.reset = reset);
    this.info.currentStatus.subscribe(status => this.status = status);
    this.info.currentScoreboardPlayer1.subscribe(scoreboardPlayer1 => this.scoreboardPlayer1 = scoreboardPlayer1);
    this.info.currentScoreboardPlayer2.subscribe(scoreboardPlayer2 => this.scoreboardPlayer2 = scoreboardPlayer2);
  }

  /**
   * Recebe as mudanças ocorridas em outro componente e chama o método
   * para atualiazar as variáveis
   *
   * @param changes - Evento passado por parametro
   */
  public EventReceiver(changes) {
    this.ReceiveData();
  }
  /**
   * Chamado quando o botão 'reset' é clicado
   */
  public ChangesReset() {
    this.reset = !this.reset;
    this.info.ChangeReset(this.reset);
  }
  /**
   * Construtor
   *
   * @param info - Instancia o servico de Informações
   */
  constructor(private info: InfosService) {}

  /**
   * Inicializador
   */
  ngOnInit() {
    // Ordena os jogadores
    if (this.initialPlayer === 1) {
      this.player1 = this.players[0];
      this.player2 = this.players[1];
    } else {
      this.player1 = this.players[1];
      this.player2 = this.players[0];
    }

    // Passa atraves do serviço o nome dos jogadores para o componente 'board'
    this.info.currentTurn.subscribe(turn => this.turn = turn);
    this.info.ChangePlayers(this.player1, this.player2);

    // Chama o método que irá atualizar as variaveis
    this.ReceiveData();
  }


}
