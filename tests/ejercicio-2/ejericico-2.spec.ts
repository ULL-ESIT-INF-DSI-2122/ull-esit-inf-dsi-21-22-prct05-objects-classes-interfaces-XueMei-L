import 'mocha';
import { expect } from 'chai';
import { Grid } from "../src/ejercicio-2/grid";

describe('Tests for ejercicio-2 Conect 4', () =>{

    const grid = new Grid();

    describe('Tests for the class Grid', () => {

        it('Existe una clase Pokedex', () => {
            expect(grid).not.to.be.null;
        });

    });
});