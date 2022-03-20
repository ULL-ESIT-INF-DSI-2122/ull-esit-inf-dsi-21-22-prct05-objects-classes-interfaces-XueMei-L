import { TupleType } from "typedoc";
import { Grid } from "./grid";
import { Player } from "./player";

export class GameConect4 {

    private player1:Player;
    private player2:Player;

    constructor(jugador1:Player, jugador2:Player) {
        this.player1 = jugador1;
        this.player2 = jugador2;
    }
    
    public gamePlayConect4() {
        // Game start
        console.log(`---------------------------------Bienvenido al juego Conecta 4-----------------------------`); 
        grid.showGrid();
        console.log(`\n>> Empieza el jugador "${this.player1.getName()}"`);
        let round:number = 1;
        let winnerPlayerA:boolean = false;
        let winnerPlayerB:boolean = false;
        var scanf = require('scanf');

        // while(winnerPlayerA == false && winnerPlayerB == false) {
        while(winnerPlayerA == false && winnerPlayerB == false && this.player1.getNumFichas() > 0 && this.player2.getNumFichas() > 0 ) {

            console.log(`>> Rounda [${round}]\n`);

            if(round % 2 != 0) {
                console.log(`>> Hola jugador ${this.player1.getName()}. \n>> Ahora es su turno, qué columna quieres insertar una ficha?`);
                
                //para entrar al bucle while, si la columna no es valido, vuelva a insertar. 
                let valido:boolean = false;
                
                while(valido == false) {
                    console.log(`>> Indica un numero entre 0-6`);
                    var colums = scanf('%d');
                    console.log(`>> Usted ha insertado una ficha en la columna ${colums}.`);
                    if(grid.isValid(colums)) {
                        console.log(`-----------------------------------------------------------------------------------`);
                        console.log(`>> La columna ${colums} es valida`);
                        console.log(`>> El jugador ${this.player1.getName()} pone una ficha en la columa ${colums}`);
                        
                        // Disminuir el numero de fichas
                        this.player1.setNumFichas(this.player1.getNumFichas()-1);
                        console.log(`>> El jugador ${this.player1.getName()} queda ${this.player1.getNumFichas()} fichas.`);
    
                        //Pasar la poscion actual para analizar
                        winnerPlayerA = this.gameWinner(grid.setPosAndGetI(colums), colums);
                        valido = true;
                    }else{
                        console.log(`>> El jugador debe volver a poner una ficha.`);
                        valido = false;
                    }
                }
            }else{
                console.log(`>> Hola jugador ${this.player2.getName()}. \n>> Ahora es su turno, qué columna quieres insertar una ficha?`);
                
                //para entrar al bucle while, si la columna no es valido, vuelva a insertar. 
                let valido:boolean = false;

                while(valido == false) {
                    console.log(`>> Indica un numero entre 0-6`);
                    var colums = scanf('%d');
                    console.log(`>> Usted ha insertado una ficha en la columna ${colums}.`);

                    if(grid.isValid(colums)) {
                        console.log(`-----------------------------------------------------------------------------------`);
                        console.log(`>> La columna ${colums} es valida`);
                        console.log(`>> El jugador ${this.player2.getName()} pone una ficha en la columa ${colums}`);
                        
                        // Disminuir el numero de fichas
                        this.player2.setNumFichas(this.player1.getNumFichas()-1);
                        console.log(`>> El jugador ${this.player2.getName()} queda ${this.player2.getNumFichas()} fichas.`);
    
                        //Pasar la poscion actual para analizar
                        winnerPlayerB = this.gameWinner(grid.setPosAndGetI(colums), colums);

                        valido = true;
                    }else{
                        console.log(`>> El jugador debe volver a poner una ficha.`);
                        valido = false;
                    }
                }
            }
            // Mostrar regilla cada vez;
            grid.showGrid();

            // Comprobar que haya ganado uno de ellos
            if(winnerPlayerA == true) {
                console.log(`${this.player1.getName()} ha ganado el partido.`);
            }else if(winnerPlayerB == true) {
                console.log(`${this.player2.getName()} ha ganado el partido.`);
            }else{
            }
            round++;
        }
    }


    /**
     * _Metodo que comprobar que si la posicion actual se puede en contrar 4 fichas seguidas_
     * @param posActualI posicion horizontal para analizar que si haya ganado o no
     * @param posActualJ posicion vertical para analizar que si haya ganado o no
     */
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
                        console.log(`ying le 1`);
                        winner = true;
                        winnerToken = grid.getGrid()[posActualI][posActualJ];
                    }
                }
            }else{
                continue;
            }
        }

        //vertical
        countToken = 0;
        for(let i:number = posActualI; i < grid.getRows()-1; i++) {
            if(grid.getGrid()[i][posActualJ] == 0) {
                continue;
            }else if(grid.getGrid()[posActualI][posActualJ] == grid.getGrid()[i][posActualJ]) {
                if(grid.getGrid()[i][posActualJ] == grid.getGrid()[i+1][posActualJ]){
                    countToken++;
                    if(countToken==3) {
                        console.log(`ying le 2`);
                        winner = true;
                    }
                }
            }else{
                continue;
            }
        }


        //diagonal izq
        countToken = 0;
        // console.log(`I = ${posActualI} + J = ${posActualJ}`);
        let initCountPosI_izq:number = 0;
        let initCountPosJ_izq:number = posActualI + posActualJ;
        
        // Calcula la posicion diagonal inicial 
        if(initCountPosJ_izq < grid.getRows()) {
            initCountPosI_izq = 0;
        }else{
            // console.log(`zuo = ${initCountPosJ_izq}, cols = ${grid.getCols()}`);
            initCountPosI_izq = initCountPosJ_izq - grid.getRows();
            initCountPosJ_izq = grid.getCols()-1;
        }
        // console.log(`kaishi = ${initCountPosI_izq} + kaishi = ${initCountPosJ_izq}`);
        for(let i:number = initCountPosI_izq, j:number = initCountPosJ_izq; i < grid.getRows()-1; i++, j--) {
            // console.log(`wo zai I = ${i} + wo zai J = ${j}`);
            if(grid.getGrid()[i][j] == 0) {
                continue;
            }else if(grid.getGrid()[i][j] == grid.getGrid()[i+1][j-1]) {
                console.log(`jinru, token wei ${countToken}`);
                countToken++;
                    if(countToken==3) {
                        console.log(`ying le 3`);
                        winner = true;
                    }
            }else{
                continue;
            }
        }
        

        //diagonal der
        countToken = 0;
        let initCountPosI_der:number = posActualI - Math.min(posActualI, posActualJ);
        let initCountPosJ_der:number = posActualJ - Math.min(posActualI, posActualJ);
        for(let i:number = initCountPosI_der, j:number = initCountPosJ_der; i < grid.getRows()-1; i++, j++) {
            if(grid.getGrid()[i][j] == 0) {
                continue;
            }else if(grid.getGrid()[i][j] == grid.getGrid()[i+1][j+1]) {
                countToken++;
                    if(countToken==3) {
                        console.log(`ying le 4`);
                        winner = true;
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
// game.gameWinner(2,5);
grid.showGrid();