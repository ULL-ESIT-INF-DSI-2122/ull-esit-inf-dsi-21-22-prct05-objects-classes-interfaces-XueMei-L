export class Player {
    private name:string;
    private numFichas:number = 21;

    constructor(name:string) {
        this.name = name;
    }

    getName() { return this.name; }
    getNumFichas() { return this.numFichas; }

    setNumFichas(numFichas:number) { this.numFichas = numFichas}

}