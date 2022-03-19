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
                    // Insertar la posicion
                    grid.setPosAndGetI(colums);

                    //Pasar la poscion actual para analizar
                    
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
                    grid.setPosAndGetI(colums);
                    
                    //Pasar la poscion actual para analizar

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



    public gameWinner(posActualI:number, posActualJ:number):boolean {
        let winner:boolean = false;
        let winnerToken:number = 0;
        let countToken:number;

        //hay que hacer 4 bucle for para comprobar

        //horizontal
        countToken = 0;
        // console.log(`${grid.getCols()}`);
        for(let i:number = 0; i < grid.getCols()-1; i++) {
            if(grid.getGrid()[posActualI][i] == 0) {
                continue;
            }else if(grid.getGrid()[posActualI][posActualJ] == grid.getGrid()[posActualI][i]) {
                if(grid.getGrid()[posActualI][i] == grid.getGrid()[posActualI][i+1]){
                    countToken++;
                    if(countToken==3) {
                        winner = true;
                        winnerToken = grid.getGrid()[posActualI][posActualJ];
                        // console.log(`es: ${grid.getGrid()[posActualI][posActualJ]}`);
                    }
                }
            }else{
                continue;
            }
        }

        //vertical
        countToken = 0;
        // console.log(`${grid.getRows()}`);
        for(let i:number = posActualI; i < grid.getRows()-1; i++) {
            if(grid.getGrid()[i][posActualJ] == 0) {
                continue;
            }else if(grid.getGrid()[posActualI][posActualJ] == grid.getGrid()[i][posActualJ]) {
                if(grid.getGrid()[i][posActualJ] == grid.getGrid()[i+1][posActualJ]){
                    countToken++;
                    if(countToken==3) {
                        winner = true;
                        // console.log(`${winner}`);
                    }
                    // console.log(`${countToken}`);
                }
            }else{
                continue;
            }
        }


        //diagonal izq
        countToken = 0;
        let initCountPosI_izq:number = posActualI + posActualJ;
        let initCountPosJ_izq:number = 0;
        if(initCountPosI_izq < grid.getRows()) {
            initCountPosI_izq = 0;
        }else{
            initCountPosI_izq = initCountPosI_izq - grid.getRows();
            initCountPosJ_izq = grid.getCols()-1;
        }
        for(let i:number = initCountPosI_izq, j:number = initCountPosJ_izq; i < grid.getRows()-1; i++, j--) {
            // console.log(`wo zai i = ${i} j = ${j}`);

            if(grid.getGrid()[i][j] == 0) {
                continue;
            }else if(grid.getGrid()[i][j] == grid.getGrid()[i+1][j-1]) {
                countToken++;
                    if(countToken==3) {
                        winner = true;
                        // console.log(`${winner}`);
                    }
            }else{
                continue;
            }
        }

        //diagonal der
        countToken = 0;
        let initCountPosI_der:number = posActualI - Math.min(posActualI, posActualJ);
        let initCountPosJ_der:number = posActualJ - Math.min(posActualI, posActualJ);
        // console.log(`${initCountPosI_der}, ${initCountPosJ_der}`)

        for(let i:number = initCountPosI_der, j:number = initCountPosJ_der; i < grid.getRows()-1; i++, j++) {
            // console.log(`wo zai i = ${i} j = ${j}`);

            if(grid.getGrid()[i][j] == 0) {
                continue;
            }else if(grid.getGrid()[i][j] == grid.getGrid()[i+1][j+1]) {
                countToken++;
                    if(countToken==3) {
                        winner = true;
                        // console.log(`${winner}`);
                    }
            }else{
                continue;
            }
        }
        return winner;
    }
}
                
let a:Player = new Player("Juan");
let b:Player = new Player("Ana");
let game = new GameConect4(a, b);
let grid = new Grid();
game.gamePlayConect4();
game.gameWinner(5,6);
grid.showGrid();