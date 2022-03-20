export class Grid {

    private rows:number = 6;
    private cols:number = 7;
    private grid:number[][] = [];
    private saveLastPos = Array(7);
    private countRound:number = 0;
    private ValueI:number = 0;

    constructor() {
        for(let i: number = 0; i < this.rows; i++) {
            this.grid[i] = [];
            for(let j: number = 0; j < this.cols; j++) {
                this.grid[i].push(0);
            }
        }
    }


    // constructor() {
    //     this.grid = [ [0, 0, 0, 0, 0, 0, 0],
    //                   [0, 0, 2, 0, 0, 0, 2],
    //                   [2, 1, 2, 2, 2, 1, 0],
    //                   [1, 2, 1, 1, 2, 1, 0],
    //                   [1, 1, 1, 2, 1, 2, 0],
    //                   [1, 2, 2, 1, 2, 1, 0],
    //                 ];

    // }

    public getCols() { return this.cols; }
    public getRows() { return this.rows; }
    public getValueI() { return this.ValueI; }
    public getGrid() { return this.grid; }

    public showGrid() {
        console.log(`>> Mostrar Regilla`)
        for(var i: number = 0; i < this.rows; i++) {
            console.log(`${this.grid[i]}`);
        }
    }

    public isValid(colums:number) :boolean {
        if(this.grid[0][colums] == 0) {
            return true;
        }else{
            console.log(`Error, ${colums} está completa`);
            return false;
        }
    }

    public setPosAndGetI(colums:number):number{
        this.countRound++;
            
        //Obtener la i posicion que inserta el jugador
        const getLastPosI = this.getLastPositionOfColumns(colums);
        console.log(`la ultima = ${getLastPosI}`);
        this.ValueI = getLastPosI;
        // impar toca el jugador 1 - par toca el jugador 2
            if(this.countRound % 2 != 0) {
                this.grid[getLastPosI][colums] = 1;
            }else{
                this.grid[getLastPosI][colums] = 2;
            }

        //Actualizar la ultima nueva posicion
        this.saveLastPos[colums] = getLastPosI;
        // console.log(`la ultima = ${getLastPosI}`);
        return this.ValueI;
    }

    private getLastPositionOfColumns(colums:number):number {
        if(this.saveLastPos[colums] == null) {
            return 5;
        }else{
            return this.saveLastPos[colums]-1;
        }
    }
}