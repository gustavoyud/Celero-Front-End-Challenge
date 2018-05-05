import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-velha',
  templateUrl: './velha.component.html',
  styleUrls: ['./velha.component.scss']
})
export class VelhaComponent implements OnInit {
  //Recebe Os Jogadores em ordem
  public player1: string;
  public player2: string;

  //Controla o que será exibido como resposta
  public status: string;
  
  //Contador de Pontos
  public scoreboardPlayer1: number = 0;
  public scoreboardPlayer2: number = 0;

  //variável responsável pelas animações
  public animate: boolean = false;

  //variável responsável por reiniciar o Jogo
  public reset: boolean = false;

  //Recebe array de outro component
  @Input() public players: string[];

  //Recebe o Jogador que inicia 
  @Input() public initialPlayer: Number; 

  //Controla de qual jogador é a vez
  private turn: Number = 1;

  //Cria array de controle das jogadas por usuario
  public player: Number[][] = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];

  //Cria uma Matriz de Bool para controle das casas clicadas
  public mainMatrix: boolean[][] = [
    [false,false,false],
    [false,false,false],
    [false,false,false]
  ];

  //Seta o valor passado como verdade na Matriz de Bools
  public SetTrue(Linha: number, Coluna: number)
  {
    //Se a matriz Já não estiver alocada
    if(this.mainMatrix[Linha][Coluna] == false)
    {
      this.mainMatrix[Linha][Coluna] = true;
      //Aloca a jogada na matriz de jogadores 
      if(this.player[Linha][Coluna] == 0)
        this.player[Linha][Coluna] = this.turn;

      this.LogicalVerify(this.turn);
      //Troca o turno
      this.NextTurn();
    }
  }

  //Método responsável pela lógica do jogo
  private LogicalVerify(jogador: Number)
  {
    //Define as variaveis para controle
    let velha = 0;
    let firstLineVerifier = 0;
    let secondLineVerifier = 0;
    let thirdLineVerifier = 0;
    let firstCollumnVerifier = 0;
    let secondCollumnVerifier = 0;
    let thirdCollumnVerifier = 0;
    let diagonalVerifier = 0;
    let leftDiagonalVerifier = 0;

    //Verifica se 'deu velha'
    for(let i = 0; i < 3; i++)
      for(let j = 0; j < 3; j++)  
        if(this.player[i][j] > 0)
          velha++;

    //Realiza a verificação vertical
    for(let i = 0; i < 3; i++)
    {
      //Verifica a primeira coluna 
      if(this.player[i][0] == jogador)
        firstCollumnVerifier++;
      //Verifica a segunda coluna
      if(this.player[i][1] == jogador)
        secondCollumnVerifier++;
      //verifica a terceira coluna
      if(this.player[i][2] == jogador)
        thirdCollumnVerifier++;
    }

    //Realiza a verificação vertical
    for(let i = 0; i < 3; i++)
    {
      //Verifica a primeira linha
      if(this.player[0][i] == jogador)
        firstLineVerifier++;
        
      //verifica a segunda linha
      if(this.player[1][i] == jogador)
        secondLineVerifier++;

      //verifica a terceira linha
      if(this.player[2][i] == jogador)
        thirdLineVerifier++;
    }
    //Variavel auxiliar
    let leftDiagonal = 2;
    //Realiza a verificação Diagonal    
    for (let i = 0; i <3; i++)
    {
      //Diagonal direita
      if(this.player[i][i] == jogador)
        diagonalVerifier++;

      //Diagonal esquerda
      if(this.player[leftDiagonal][i] == jogador)
        leftDiagonalVerifier++;

      //Decrementa da variavel auxiliar
      leftDiagonal--;
    }

    //Se algum dos valores tiver marcado 3 casas o jogo termina
    if(firstLineVerifier == 3 || secondLineVerifier == 3 || thirdLineVerifier == 3 || firstCollumnVerifier == 3 || secondCollumnVerifier == 3 || thirdCollumnVerifier == 3 || diagonalVerifier == 3 || leftDiagonalVerifier == 3)
      this.Finish(jogador,false);
    else if(velha == 9)
      this.Finish(jogador,true);
  }

  private Finish(jogador: Number,velha: boolean)
  {
    //Esconde o tabuleiro e mostra o placar
    this.reset= true;

    //Zera as matrizes
    for(let i = 0; i < 3; i ++)
    {
      for(let j = 0; j < 3; j++)
      {
        //Zera a matriz de booleans
        if(this.mainMatrix[i][j] == true)
          this.mainMatrix[i][j] = false;
        //Zera a matriz de jogadores
        if(this.player[i][j] > 0)
          this.player[i][j] = 0;
      }
    }
     
    //Retorna que o jogador 1 foi o vencedor
    if(jogador == 1 && velha == false)
    {
      this.scoreboardPlayer1++;
      this.status = this.player1+" venceu a rodada!";
    }
    //Retorna que o jogador 2 foi o vencedor
    else if(jogador == 2 && velha == false)
    {
      this.scoreboardPlayer2++;
      this.status = this.player2+" venceu a rodada!";
    }
    //Retorna que foi velha
    else if(velha)
      this.status = 'O Jogo deu velha';
  }

  //Muda o Turno dos jogadores
  private NextTurn()
  {
    if(this.turn == 1)
      this.turn = 2;
    else
      this.turn = 1;
  }


  ngOnInit() {
    //Ordena os Jogadores
    if(this.initialPlayer == 1)
    {
      this.player1 = this.players[0];
      this.player2 = this.players[1];
    }
    else
    {
      this.player1 = this.players[1];
      this.player2 = this.players[0];
    }
  }

}