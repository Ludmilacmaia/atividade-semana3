//Crie uma função que recebe 2 parâmetros 
// e retorna o resultado da divisão entre eles. 
//Diga se esse número é par ou ímpar.

function divisão(dividendo,divisor){
    const resultado = (dividendo/divisor).toFixed(4)
    if (resultado %2 == 0){
        return `${resultado} é par`
    }
    else{
        return `${resultado} é ímpar`
    }
}console.log(divisão(40,5))

