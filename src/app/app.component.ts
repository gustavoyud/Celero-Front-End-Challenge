import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public Jogada : number;
  public Jogadores: string[];
  //Verifica se o form foi validado
  public Validado: boolean = false;

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
