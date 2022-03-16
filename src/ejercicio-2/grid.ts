export class Grid {

    private rows:number = 6;
    private cols:number = 7;
    private grid:number[][] = [];

    constructor() {
        for(let i: number = 0; i < this.rows; i++) {
            this.grid[i] = [];
            for(let j: number = 0; j < this.cols; j++) {
                this.grid[i][j] = 0;
            }
        }
    }
}