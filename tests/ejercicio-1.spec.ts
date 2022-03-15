import 'mocha';
import { expect } from 'chai';
import { Combat } from "../src/ejercicio-1/combat";
import { Pokedex } from "../src/ejercicio-1/pokedex";


describe('Tests for POKEMON GAME', ()=>{

    const pikachu:Pokedex = new Pokedex("pikachu", 50, 45, "electric", [90, 55, 110, 60]);
    const charizard:Pokedex = new Pokedex("charizard", 60, 55, "fire", [84, 78, 100, 78]);

    describe('Tests for the class Combat', () => {
    
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
        })

        describe('Tests para el objeto pikachu (class Pokedex)', () => {
            
            it('Nombre = pikachu', () => {
                expect(pikachu.getName()).to.be.equal("pikachu");
            });

            it('peso = 50', () => {
                expect(pikachu.getWeight()).to.be.eq(50);
            });

            it('altura = 45', () => {
                expect(pikachu.getHeight()).to.be.eq(45);
            });

            it('tipo = electric', () => {
                expect(pikachu.getType()).to.be.equal("electric");
            });

            it('ataque = 90', () => {
                expect(pikachu.getAttack()).to.be.eq(90);
            });

            it('defensa = 55', () => {
                expect(pikachu.getDefense()).to.be.eq(55);
            });

            it('velocidad = 110', () => {
                expect(pikachu.getSpeed()).to.be.eq(110);
            });

            it('HP = 60', () => {
                expect(pikachu.getHP()).to.be.eq(60);
            });
        });

        describe('Tests para el objeto charizard (class Pokedex)', () => {
            
            it('Nombre = charizard', () => {
                expect(charizard.getName()).to.be.equal("charizard");
            });

            it('peso = 60', () => {
                expect(charizard.getWeight()).to.be.eq(60);
            });

            it('altura = 55', () => {
                expect(charizard.getHeight()).to.be.eq(55);
            });

            it('tipo = fire', () => {
                expect(charizard.getType()).to.be.equal("fire");
            });

            it('ataque = 84', () => {
                expect(charizard.getAttack()).to.be.eq(84);
            });

            it('defensa = 78', () => {
                expect(charizard.getDefense()).to.be.eq(78);
            });

            it('velocidad = 100', () => {
                expect(charizard.getSpeed()).to.be.eq(100);
            });

            it('HP = 78', () => {
                expect(charizard.getHP()).to.be.eq(78);
            });
        });
        
    });
});