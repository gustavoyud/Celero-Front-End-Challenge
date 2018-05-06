import { Component, Input } from '@angular/core';
import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  animations: [
    trigger('show', [
      state('in', style({opacity: 1,transform: 'scale(1)'})),
      transition('void => *', [
        animate(180, keyframes([
          style({opacity: 0, transform: 'scale(0)', offset: 0}),
          style({opacity: 1, transform: 'scale(1.3)',  offset: .7}),
          style({opacity: 1, transform: 'scale(1)',    offset: 1.0})
        ]))
      ]),
    ])
  ]
})
export class SquareComponent{
  //Recebe a Matriz de jogadores para controle da estilização
  @Input() public player: Number[][];
  //Recebe a Matriz Principal para controle
  @Input() public mainMatrix: boolean[][];
  //Recebe a Linha da matriz que foi clicada
  @Input() public line: number;
  //Recebe a coluna da matriz que foi clicada
  @Input() public collumn: number;
}
