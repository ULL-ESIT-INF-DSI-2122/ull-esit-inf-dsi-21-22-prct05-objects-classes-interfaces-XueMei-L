// El Cartesiano

import { assert } from "chai";

/**
 * _Function that to check a shortWalk is avaible or not_
 * @param appRide an array of string that contains a short walk of a aplicacion
 * @return boolean, true the shortwalk is in time and back on the original position
 */
export function shortWalk(appRide:string[]) :boolean {
    assert(appRide.length != 0)

    let count = 0;
    let posActualI = 0;
    let posActualJ = 0;

    appRide.forEach((value) =>{
        switch(value) {
            case 'n':
                posActualI++;
                break;

            case 's':
                posActualI--;
                break;

            case 'e':
                posActualJ--;
                break;

            case 'o':
                posActualJ++;
                break;

            default:
                return false;
        }
        count++;
    })
    if(count == 10 && posActualI == 0 && posActualJ == 0){
        return true
    }
    return false;
}
