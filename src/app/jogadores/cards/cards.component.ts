import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  
})
export class CardsComponent{
  //Recebe de qual jogador é o card a ser mostrado
  @Input() public player: number = 0;
  //Recebe o Nome do jogador
  @Input() public playerName: string;
  //Recebe qual jogador iniciara a partida
  @Input() public initialPlayer: any = 0;
}
