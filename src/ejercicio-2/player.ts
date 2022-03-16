export class Player {
    private name:string;
    private numFichas:number = 21;

    constructor(name:string) {
        this.name = name;
    }

    getName() { return this.name; }
    getNumFichas() { return this.numFichas; }

    setNumFichas(numFichas:number) { this.numFichas = numFichas}

    public getRandom() {
        const columnas = [0, 1, 2, 3, 4, 5, 6];
        return Math.floor(Math.random() * columnas.length);
    }
}