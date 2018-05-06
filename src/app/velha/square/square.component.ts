import { Component, Input } from '@angular/core';
import {trigger,state,style,animate,transition,group} from '@angular/animations';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  animations: [
    trigger('show', [
      state('in', style({transform: 'scale(1)'})),
      transition('void => *', [
        style({transform: 'scale(0)'}),
        animate('0.1s ease-in', style({transform: 'scale(1)'}))
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
