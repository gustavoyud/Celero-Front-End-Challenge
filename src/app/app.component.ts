import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  private Jogada : number;
  private Jogadores: string[];
  //Verifica se o form foi validado
  private Validado: boolean = false;

  private recebeEvento(resposta: boolean)
  {
    this.Validado = resposta;
  }

  private recebeJogada(Jogada)
  {
    this.Jogada = Jogada;
  }

  private recebeNomes(nomes)
  {
    this.Jogadores = nomes;
  }
}
