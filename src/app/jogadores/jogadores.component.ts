import { Component,Output, EventEmitter} from '@angular/core';
import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.scss'],
  animations: [
    trigger('cardAnimation', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(400, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(400, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(-100%)',  offset: 1.0})
        ]))
      ])
    ]),
    trigger('rotation',[
      state('in',style({ transform: 'none',opacity: 1, 'transform-origin': 'center'})),
      transition('void => *',[
        style({ transform: 'rotate3d(0, 0, 1, -200deg)',opacity: 0, 'transform-origin': 'center'}),
        animate('.2s ease-in')
      ]),
      transition('* => void', [
        animate(400, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(-100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
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
