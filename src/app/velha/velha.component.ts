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
    let p = 0;
    let s = 0;
    let t = 0;
    let p1 = 0;
    let s1 = 0;
    let t1 = 0;
    let d = 0;
    let d2 = 0;

    //Verifica se 'deu velha'
    for(let i = 0; i < 3; i++)
      for(let j = 0; j < 3; j++)  
        if(this.player[i][j] > 0)
          velha++;

    //Realiza a verificação vertical
    for(let i = 0; i < 3; i++)
    {
      if(this.player[i][0] == jogador)
        p++;
      else if(this.player[i][1] == jogador)
        s++;
      else if(this.player[i][2] == jogador)
        t++;
    }

    //Realiza a verificação vertical
    for(let i = 0; i < 3; i++)
    {
      if(this.player[0][i] == jogador)
        p1++;
      else if(this.player[1][i] == jogador)
        s1++;
      else if(this.player[2][i] == jogador)
        t1++;
    }

    //Variavel auxiliar
    let dv = 2;
    //Realiza a verificação Diagonal    
    for (let i = 0; i <3; i++)
    {
      if(this.player[i][i] == jogador)
        d++;
      
      if(this.player[dv][i] == jogador)
        d2++;
        
      dv--;
    }

    //Se algum dos valores tiver marcado 3 casas o jogo termina
    if(p == 3 || s == 3 || t == 3 || p1 == 3 || s1 == 3 || t1 == 3 || d == 3 || d2 == 3)
      this.Finish(jogador,false);
    else if(velha == 9)
      this.Finish(jogador,true);

  }

  private Finish(Jogador: Number,Velha: boolean)
  {
    this.reset= true;

    //Zera as matrizes de boolean
    for(let i = 0; i < 3; i ++)
    {
      for(let j = 0; j < 3; j++)
      {
        if(this.mainMatrix[i][j] == true)
          this.mainMatrix[i][j] = false;
        
        if(this.player[i][j] > 0)
          this.player[i][j] = 0;
      }
    }
     
    
    if(Jogador == 1 && Velha == false)
    {
      this.scoreboardPlayer1++;
      this.status = this.player1+" venceu a rodada!";
    }
    else if(Jogador == 2 && Velha == false)
    {
      this.scoreboardPlayer2++;
      this.status = this.player2+" venceu a rodada!";
    }
    else if(Velha)
      this.status = "O Jogo deu velha";
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