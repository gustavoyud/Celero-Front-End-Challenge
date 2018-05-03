import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  Jogada : number;
  Jogadores: string[];
  //Verifica se o form foi validado
  Validado: boolean = false;

  recebeEvento(resposta: boolean)
  {
    this.Validado = resposta;
  }

  recebeJogada(Jogada)
  {
    this.Jogada = Jogada;
  }

  recebeNomes(nomes)
  {
    this.Jogadores = nomes;
  }
}
