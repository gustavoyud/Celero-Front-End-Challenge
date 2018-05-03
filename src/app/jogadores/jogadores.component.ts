import { Component,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.scss']
})
export class JogadoresComponent {
  //Recebe o nome dos Jogadores
  public Jogador1: string = '';
  public Jogador2: string = '';
  
  //Recebe o Jogador que irá começar
  public Jogada: any = 0;
  
  //Bolean que inicia o Jogo
  private Init: boolean = false;
  
  //Emissor de evento para o filho
  @Output() Emiter = new EventEmitter();
  
  //Emissor de Nomes e array que será passado
  @Output() Nomes = new EventEmitter<string[]>();
  private NomeArray: string[];
  
  //Gera número Inteiro aleatório entre 1 e 2 que decide quem irá iniciar a partida
  public getRandom()
  {   
    if(this.Jogada == 0)
    {
      let min = Math.ceil(1);
      let max = Math.floor(2);
      this.Jogada = Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

  //Metodo responsável por iniciar o Jogo
  private Inicia()
  {
    if(this.Jogador1 && this.Jogador2)
    {
      //Define o status do Jogo como iniciado
      this.Init = true;
      this.Emite();
    }
  }
  //Passa os resultados para o componente filho
  private Emite()
  {
    this.NomeArray = [this.Jogador1, this.Jogador2];
    this.Emiter.emit(this.Init);
    this.Emiter.emit(this.Jogada);
    this.Nomes.emit(this.NomeArray);
  }


}
