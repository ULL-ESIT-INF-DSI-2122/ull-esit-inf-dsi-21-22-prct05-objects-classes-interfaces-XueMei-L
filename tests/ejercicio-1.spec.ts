import 'mocha';
import { expect } from 'chai';
import { Combat } from "../src/ejercicio-1/combat";
import { Pokemon } from "../src/ejercicio-1/pokedex";


describe('Tests for POKEMON GAME', ()=>{
//   describe('Tests for the class Combat', () => {
    
//     it('Existe una clase combat', () => {
//       expect();
//     });
//   });

  describe('Tests for the class Pokedex', () => {
    it('Existe una clase Pokedex', () => {
        expect(Pokemon).not.to.be.null;
    });
  });
});