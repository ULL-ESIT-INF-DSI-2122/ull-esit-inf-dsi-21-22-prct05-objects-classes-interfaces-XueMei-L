import { Grid } from "./grid";
import { Player } from "./player";

export class GameConect4 {

    private player1:Player;
    private player2:Player;

    constructor(jugador1:Player, jugador2:Player) {
        this.player1 = jugador1;
        this.player2 = jugador2;
    }
    
    private getRandom() {
        const columnas = [0, 1, 2, 3, 4, 5, 6];
        return Math.floor(Math.random() * columnas.length);
    }

    public gamePlayConect4() {
        // Game start
        console.log(`-----------------Bienvenido al juego Conecta 4-----------------`); 
        grid.showGrid();
        console.log(`\n>> Empieza el jugador "${this.player1.getName()}"`);
        let round:number = 1;
        let findWinner:boolean = false;
        
        while(round < 31 ) {
            console.log(`\n>> Rounda [${round}]`);
            let colums:number = this.getRandom();
            console.log(`columna: ${colums}`);

            if(round % 2 != 0) {
                if(grid.isValid(colums)) {
                    console.log(`>> El jugador ${this.player1.getName()} pone una ficha en la columa ${colums+1}`);
                    console.log(`>> El jugador ${this.player1.getName()} queda ${this.player1.getNumFichas()} fichas.`);

                    //Pasar la poscion actual para analizar
                    this.gameWinner(grid.setPosAndGetI(colums), colums);

                    // Disminuir el numero de fichas
                    this.player1.setNumFichas(this.player1.getNumFichas()-1);
                }else{
                    console.log(`>> El jugador vuelve a poner una ficha.`);
                    console.log(`>> El jugador ${this.player1.getName()} pone una ficha en la columa ${colums+1}`);
                    this.player1.setNumFichas(this.player1.getNumFichas()+1);
                    round--;
                }
            }else{
                if(grid.isValid(colums)) {
                    console.log(`>> El jugador ${this.player2.getName()} pone una ficha en la columa ${colums+1}`);
                    console.log(`>> El jugador ${this.player2.getName()} queda ${this.player2.getNumFichas()} fichas.`);
                    // Insertar la posicion
                    console.log(`col = ${colums}`);

                    //Pasar la poscion actual para analizar
                    this.gameWinner(grid.setPosAndGetI(colums), colums);

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
            round++;
        }
    }



    
}
                
let a:Player = new Player("Juan");
let b:Player = new Player("Ana");
let game = new GameConect4(a, b);
let grid = new Grid();

var scanf = require('scanf');
console.log(`introduzca un numero`);
var name = scanf('%s');
console.log(`nombre es = ${name}`);


// game.gamePlayConect4();
// game.gameWinner(5,6);
// grid.showGrid();