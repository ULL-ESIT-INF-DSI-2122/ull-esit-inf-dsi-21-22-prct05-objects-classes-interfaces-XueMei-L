# Práctica 4 - Arrays, tuplas y enumerados

```
Autor: XueMei Lin
Curso: 20201- 2022
Universidad: Universidad de La laguna
Asignatura: Desarrollo de Sistemas Informaticos
Herramienta: Visual Studio Code
Lenguaje de programción: TypeScipt
```

## 1. Introducción
Arrays, tuplas, y enumerados es una de las partes que debemos aprender en lenguaje TypeScript. Además, en esta práctica vamos a introducir el uso de TypeDoc que sirve para convertir los comentarios en el código fuente de TypeScript en documentación HTML renderizada o un modelo JSON. Y por otro lado el funcionamiento de Mocha y Chai.

## 2. Objetivos

Como hemos mencionado antes, vamos a utilizar arrays, tuplas y enumerados para realizar uan serie de ejercicios de programación en TypeScript y además usamos TypeDoc para general una documentación HTML. Asimismo, Usaremos Mocha y Chai para hacer las comprobaciones de funciones.

## 3. Ejercicios propuestas

### 3.1. Ejercicio 1 - Tablas de multiplicar

Ejercicio 1 consiste en realizar la tabla de multiplicacion de un numero natural.

***Funcion que calcula la tabla de multiplicacion de un numero***
```
export function productTable(num: number):number[][] {

    if(num < 1) return [[-1]]
    let result:number[][] = [];
    let array:number[] = [];
    let multiple = 0;
    for(let i:number = 1; i <= num; i++) {
        array = [];
        for(let j:number = 1; j <= num; j++) {
            multiple = i * j;
            array.push(multiple)
        }
        result.push(array);
    }

    return result;
}
```

La funcion recibe un paramtro de tipo `number`, y devuelve un array de array que contiene la tabla de multiplicacion de dicho parametro.
Crea una variable `result` para almacenar la tabla y otra `array` para almacenar cada multiplicacion. Recorre desde 1 hasta el valor `num`, y realiza la multiplicacion desde 1 con dicho valor, el resultado lo guarda en un array, y dicho array lo guarda en otro array. El resultado es como una matriz que contiene una tabla de multiplicacion. 




## 4. Utilizacion de Mocha, Chai y TypeDoc
En esta practica, tambien se utilzia Mocha, Chai, y TypeDoc para mejorar nuestro "proyecto".
[Mocha](https://mochajs.org/)
[Chai](https://www.chaijs.com/)
[TypeDoc](https://typedoc.org/)

La siguiente es la demostracion de los tests para cada ejercicio.
![](img/.png)
![](img/.png) 

