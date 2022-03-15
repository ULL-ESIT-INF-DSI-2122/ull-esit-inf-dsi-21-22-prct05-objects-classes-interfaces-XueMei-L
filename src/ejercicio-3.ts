// Ejercicio 3 - Decodificar resistencias

/**
 * _print 2 digits depending on the number we enter_
 * @param [color0] "black"  color represents the number 0
 * @param [color1] "brown"  color represents the number 1
 * @param [color2] "red"    color represents the number 2
 * @param [color3] "orange" color represents the number 3
 * @param [color4] "yellow" color represents the number 4
 * @param [color5] "green"  color represents the number 5
 * @param [color6] "blue"   color represents the number 6
 * @param [color7] "purple" color represents the number 7
 * @param [color8] "gray"   color represents the number 8
 * @param [color9] "write"  color represents the number 9
 * @returns Numbers represented by two colors
 */

export function decodeResistor(...params:string[]):string{
    let map = new Map<string, string>()
        map.set('negro', "0")
        map.set('marron', "1")
        map.set('rojo', "2")
        map.set('naranja', "3")
        map.set('amarillo', "4")
        map.set('verde', "5")
        map.set('azul', "6")
        map.set('violeta', "7")
        map.set('gris', "8")
        map.set('blanco', "9")

    let result:string = "";
    result += map.get(params[0]) as string;
    result += map.get(params[1]) as string;

    return result;
}