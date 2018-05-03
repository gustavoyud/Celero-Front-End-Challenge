import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-velha',
  templateUrl: './velha.component.html',
  styleUrls: ['./velha.component.scss']
})
export class VelhaComponent implements OnInit {
  //Recebe array de outro component
  @Input() Jogadores: string[];
  //Recebe a jogada
  @Input() Jogada: Number;
  //Cria array de controle das jogadas por usuario
  Player: Number[][] = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];

  //Cria uma Matriz de Bool para controle das casas clicadas
  TesteM: boolean[][] = [
    [false,false,false],
    [false,false,false],
    [false,false,false]
  ];


  constructor() { }

  //Seta o valor passado como verdade na Matriz de Bools
  setTrue(Linha: number, Coluna: number)
  {
    this.TesteM[Linha][Coluna] = true;
    //Aloca a jogada na matriz de jogadores 
    if(this.Player[Linha][Coluna] == 0)
      this.Player[Linha][Coluna] = this.Jogada;
    
    this.ChangesTurn();
  }

  //Retorna se as condições são verdadeiras e muda a classe  
  getTrue(Linha: number, Coluna: number, Jogador: number)
  {
    if(this.Player[Linha][Coluna] == Jogador && this.Jogada == Jogador && this.TesteM[Linha][Coluna] == true)
    {
      return true;

    }
  }

  ChangesTurn()
  {
    //Muda o Turno dos jogadores
    if(this.Jogada == 1)
      this.Jogada = 2;
    else
      this.Jogada = 1;
  }


  ngOnInit() {
  }

}