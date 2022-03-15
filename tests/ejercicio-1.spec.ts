import 'mocha';
import { expect } from 'chai';
import { Combat } from "../src/ejercicio-1/combat";
import { Pokedex } from "../src/ejercicio-1/pokedex";


describe('Tests for POKEMON GAME', ()=>{
  describe('Tests for the class Combat', () => {
    
    let pikachu = new Pokedex("pikachu", 50, 45, "electric", [90, 55, 110, 60]);
    let charizard = new Pokedex("charizard", 60, 55, "fire", [84, 78, 100, 78]);
    let blastoise = new Pokedex("blastoise", 80, 50, "water", [83, 100, 78, 79]);

    it('Existe una clase combat', () => {
        expect(Combat).not.to.be.null;
    });
  });

  describe('Tests for the class Pokedex', () => {
    it('Existe una clase Pokedex', () => {
        expect(Pokedex).not.to.be.null;
    });

    it('Existe objetos instanciados de la clase Pokedex', () => {
        expect(pikachu).not.to.be.null;
        expect(charizard).not.to.be.null;
        expect(blastoise).not.to.be.null;
    })
  });
});