import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Recebe o jogador que irá iniciar o Jogo
  public initialPlayer : number;
  
  //Recebe array com o nome dos jogadores
  public players: string[];
  
  //Verifica se o form foi validado
  public validated: boolean = false;

  //Recebe do componente filho se o botão 'iniciar' foi clicado
  public EventReceiver(validated)
  {
    this.validated = validated;
  }
  
  //Recebe do componente filho o jogador inicial
  public PlayReceiver(initialPlayer)
  {
    this.initialPlayer = initialPlayer;
  }

  //recebe os nomes dos jogadores do componente filho
  public NameReceiver(players)
  {
    this.players = players;
  }
}
