//
//    Serviço para lidar com as informações compartilhadas entre os componentes
//    board, velha e square
//

import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class InfosService {
  //Variavel responsável por guardar o nome do Jogador1
  private player1 = new BehaviorSubject<string>("");
  public currentPlayer1 = this.player1.asObservable();

  //Variavel responsável por guardar o nome do Jogador2
  private player2 = new BehaviorSubject<string>("");
  public currentPlayer2 = this.player2.asObservable();
  
  //Cria e define o turno atual
  private turn = new BehaviorSubject<Number>(1);
  public currentTurn = this.turn.asObservable();

  //Cria a variavel de controle 'reset' a ser compatilhada e a torna visivel
  private reset = new BehaviorSubject<boolean>(false);
  public currentReset = this.reset.asObservable();

  //variavel responsável por passar o resultado da partida
  private status = new BehaviorSubject<string>("");
  public currentStatus = this.status.asObservable();

  //Guarda o placar do jogador 1
  private scoreboardPlayer1 = new BehaviorSubject<number>(0);
  public currentScoreboardPlayer1 = this.scoreboardPlayer1.asObservable();

  //Guarda o placar do jogador 2
  private scoreboardPlayer2 = new BehaviorSubject<number>(0);
  public currentScoreboardPlayer2 = this.scoreboardPlayer2.asObservable();

  //Método chamado quando o jogo é reiniciado
  public ChangeValues(reset: boolean, status: string, scoreboardPlayer1: number, scoreboardPlayer2: number)
  {
    this.reset.next(reset);
    this.status.next(status);
    this.scoreboardPlayer1.next(scoreboardPlayer1);
    this.scoreboardPlayer2.next(scoreboardPlayer2);
  }
  //Atualiza o status da variavel reset
  public ChangeReset(reset: boolean)
  {
    this.reset.next(reset);
  }

  //Método que atualiza o turno atual
  public ChangeTurn(turn: Number)
  {
    this.turn.next(turn);    
  }

  //Atualiza o nome dos jogadores
  public ChangePlayers(player1: string, player2: string)
  {
    this.player1.next(player1);
    this.player2.next(player2);
  }
}
