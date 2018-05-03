import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-velha',
  templateUrl: './velha.component.html',
  styleUrls: ['./velha.component.scss']
})
export class VelhaComponent implements OnInit {
  //Recebe Os Jogadores em ordem
  private Player1: string;
  private Player2: string;
  //Recebe array de outro component
  @Input() Jogadores: string[];
  //Recebe a jogada
  @Input() Joga: Number; 
  private Jogada: Number = 1;
  //Cria array de controle das jogadas por usuario
  private Player: Number[][] = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];

  //Cria uma Matriz de Bool para controle das casas clicadas
  private TesteM: boolean[][] = [
    [false,false,false],
    [false,false,false],
    [false,false,false]
  ];

  constructor() { }

  //Seta o valor passado como verdade na Matriz de Bools
  public setTrue(Linha: number, Coluna: number)
  {
    this.TesteM[Linha][Coluna] = true;
    //Aloca a jogada na matriz de jogadores 
    if(this.Player[Linha][Coluna] == 0)
      this.Player[Linha][Coluna] = this.Jogada;
    
    this.ChangesTurn();
  }

  //Muda o Turno dos jogadores
  public ChangesTurn()
  {
    if(this.Jogada == 1)
      this.Jogada = 2;
    else
      this.Jogada = 1;
  }


  ngOnInit() {
    if(this.Joga == 1)
    {
      this.Player1 = this.Jogadores[0];
      this.Player2 = this.Jogadores[1];
    }
    else
    {
      this.Player1 = this.Jogadores[1];
      this.Player2 = this.Jogadores[0];
    }
  }

}