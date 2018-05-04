import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent{
  //Recebe do componente pai o valores abaixo
  
  //Recebe a Matriz de jogadores para controle da estilização
  @Input() public player: Number[][];
  //Recebe a Matriz Principal para controle
  @Input() public mainMatrix: boolean[][];
  //Recebe a Linha da matriz que foi clicada
  @Input() public line: number;
  //Recebe a coluna da matriz que foi clicada
  @Input() public collumn: number;
}
