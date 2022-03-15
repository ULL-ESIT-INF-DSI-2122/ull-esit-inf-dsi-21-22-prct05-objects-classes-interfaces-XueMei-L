//class Pokedex

/*
Nombre del Pokemon
Peso y altura
Tipo
Estadísticas básicas: ataque, 
defensa, velocidad, daño máximo (HP). 
*/

export class Pokedex {
    private name:string;
    private weight:number;
    private height:number;
    private type:string;
    private info = Array(4);

    /**
     * _Constructor de la clase Pokedex_
     * @param name nombre de pokemon
     * @param weight peso de pokemon
     * @param height altura de pokemon
     * @param type tipo de pokemon
     * @param info informacion que contiene ataque, defensa, velocidad, HP de pokemon
     */
    constructor(name:string, weight:number, height:number, 
        type:string, info:number[]) {
            this.name = name;
            this.weight = weight;
            this.height = height;
            this.type = type;
            this.info = info;
        }

    getName() { return this.name; }
    getWeight() { return this.weight; }
    getHeight() { return this.height; }
    getType() { return this.type; }
    getAttack() { return this.info[0]; }
    getDefense() { return this.info[1]; }
    getSpeed() { return this.info[2]; }
    getHP() { return this.info[3]; }
}