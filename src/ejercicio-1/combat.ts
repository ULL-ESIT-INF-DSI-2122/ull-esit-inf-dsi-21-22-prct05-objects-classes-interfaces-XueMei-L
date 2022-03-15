import { Pokedex } from "./pokedex";

export class Combat {
    private pokemon1:Pokedex;
    private pokemon2:Pokedex;

    constructor(pokemon1:Pokedex, pokemon2:Pokedex) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    /**
     * _Calcular el ataque de pokemon A hacia pokemon B_
     * @param pokemon_attacker tipo de pokemon atacator
     * @param pokemon_defender tipo de pokemon defensor
     * @param attack el daño que realiza el atacator
     * @param defense el daño que defensa el defensor
     * @returns daño realizado por el defensor
     */
    private pokemonGame(pokemon_attacker:string, pokemon_defender:string, attack:number, defense:number):number{
        let efectiveness: number = 0;
        let damage_total: number = 0;

        if(pokemon_attacker == pokemon_defender){
            efectiveness = 0.5;
        }else{
            switch(pokemon_attacker){
                case "fire":
                    if(pokemon_defender == "grass"){
                        efectiveness = 2;
                    }else if(pokemon_defender == "water"){
                        efectiveness = 0.5;
                    }else{
                        efectiveness = 1;
                    }
                case "water":
                    if(pokemon_defender == "fire"){
                        efectiveness = 2;
                    }
                    if(pokemon_defender == "grass" || pokemon_defender == "electric"){
                        efectiveness = 0.5;
                    }
                case "grass":
                    if(pokemon_defender == "fire"){
                        efectiveness = 0.5;
                    }else if(pokemon_defender == "electric"){
                        efectiveness = 1;
                    }else{
                        efectiveness = 2;
                    }
                case "electric":
                    if(pokemon_defender == "fire" || pokemon_defender == "grass"){
                        efectiveness = 1;
                    }else{
                        efectiveness = 2;
                    }
            }
        }
        
        damage_total = 50 * ( attack / defense ) * efectiveness;
        
        return damage_total;
    }



}