import 'mocha';
import { expect } from 'chai';
import { Grid } from "../../src/ejercicio-2/grid";
import { Player } from "../../src/ejercicio-2/player";

describe('Tests for ejercicio-2 Conect 4', () =>{

    const player1 = new Player("player01");
    const player2 = new Player("player02");

    const grid = new Grid();

    describe('Tests for the class Grid', () => {

        // it('Existe una clase Grid', () => {
        //     expect(grid).not.to.be.null;
        // });

        it('Existe un metodo en la clase Grid llamado showGrid()', () =>{
            expect(grid.showGrid()).not.to.be.null;
        });

        
    });

    describe('Tests for the class Player', () =>{

        it('Nombre del jugador', () =>{
            expect(player1.getName()).to.eq("player01");
            expect(player2.getName()).to.eq("player02");
        });
    });
});