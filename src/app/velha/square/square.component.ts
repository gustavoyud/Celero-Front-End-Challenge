import { Component, Input } from '@angular/core';
import {trigger,state,style,animate,transition,group} from '@angular/animations';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
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
