import { Grid } from "./grid";
import { Player } from "./player";

export class GameConect4 {

    private player1:Player;
    private player2:Player;

    constructor(jugador1:Player, jugador2:Player) {
        this.player1 = jugador1;
        this.player2 = jugador2;
    }

    public GamePlayConect4() {
        // Game start
        console.log(`-----------------Bienvenido al juego Conecta 4-----------------`); 
        grid.showGrid();
        console.log(`\n>> Empieza el jugador "${this.player1.getName()}"`);
        let round:number = 1;
        let gameFinish:boolean = false;
        
        while(round < 31 ) {
            console.log(`\n>> Rounda [${round}]`);
            let colums:number = 0;
            if(round % 2 != 0) {
                colums = this.player1.getRandom();
                if(grid.isValid(colums)) {
                    console.log(`>> El jugador ${this.player1.getName()} pone una ficha en la columa ${colums+1}`);
                    console.log(`>> El jugador ${this.player1.getName()} queda ${this.player1.getNumFichas()} fichas.`);
                    // Insertar la posicion
                    grid.SetPos(colums);

                    // Disminuir el numero de fichas
                    this.player1.setNumFichas(this.player1.getNumFichas()-1);
                }else{
                    console.log(`>> El jugador vuelve a poner una ficha.`);
                    console.log(`>> El jugador ${this.player1.getName()} pone una ficha en la columa ${colums+1}`);
                    this.player1.setNumFichas(this.player1.getNumFichas()+1);
                    round--;
                }
            }else{
                colums = this.player2.getRandom();
                console.log(`columna: ${colums}`);
                if(grid.isValid(colums)) {
                    console.log(`>> El jugador ${this.player2.getName()} pone una ficha en la columa ${colums+1}`);
                    console.log(`>> El jugador ${this.player2.getName()} queda ${this.player2.getNumFichas()} fichas.`);
                    // Insertar la posicion
                    grid.SetPos(colums);

                    // Disminuir el numero de fichas
                    this.player2.setNumFichas(this.player2.getNumFichas()-1);

                }else{
                    console.log(`>> El jugador vuelve a poner una ficha.`);
                    console.log(`>> El jugador ${this.player2.getName()} pone una ficha en la columa ${colums+1}`);
                    this.player2.setNumFichas(this.player2.getNumFichas()+1);
                    round--;
                }
            }        
            grid.showGrid();
            gameFinish = true;
            round++;
        }
    }

    private gameWinner(posActualI:number, posActualJ:number):string{
        let count = 0;
        for(var i:number = 0; i < grid.)


        
        if() {
            return this.player1.getName();
        }else{
            return this.player2.getName();
        }
    }
    
}

let a:Player = new Player("Juan");
let b:Player = new Player("Ana");
let game = new GameConect4(a, b);
let grid = new Grid();
game.GamePlayConect4();