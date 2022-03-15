/**
 * _Funcion que comproba cadenas si es palindrome_
 * @param cadena un aray que contiene varios caracteres
 * @returns retorna el numero maximo de caracter palindrome si no retorna undefined
 */

export function palindromeCount(cadena: string[]):number | undefined{
    let word: string[] = [];
    let word2: string[] = [];
    let maxLength: number = 0;
    let findWord: boolean = false;
    let returnNum: number | undefined;

    cadena.forEach((value) =>{
        let len: number = 0 ;
        word = value.split("");
        word2 = value.split("");
        word.reverse();
        word.forEach((element, index) => {
            if(element == word2[index]){
                len++;
            }
            if(len == word.length){
                if(word.length > maxLength){
                    maxLength = word.length;
                    returnNum = word.length;
                }else{
                    returnNum = maxLength;
                }
            }

            if(len == word.length){
                findWord = true;
            }
        });
    })

    //comprbar si hay palabra palindrome
    if(findWord == false) {
        return undefined;
    }

    return returnNum;
}






