import 'mocha';
import { expect } from 'chai';
import { Combat } from "../../src/ejercicio-1/combat";
import { Pokedex } from "../../src/ejercicio-1/pokedex";


describe('Tests for POKEMON GAME', ()=>{

    const pikachu:Pokedex = new Pokedex("pikachu", 50, 45, "electric", [90, 55, 110, 60]);
    const charizard:Pokedex = new Pokedex("charizard", 60, 55, "fire", [84, 78, 100, 78]);

    let combat:Combat = new Combat(pikachu, charizard);

    describe('Tests for the class Combat', () => {
    
        it('Existe una clase combat', () => {
            expect(Combat).not.to.be.null;
        });

        it('Combate entre pikachu y charizard', () => {
            expect(combat.start()).to.be.equal("pikachu");
        });
    });

});