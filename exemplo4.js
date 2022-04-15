//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parImpar (parâmetro){
    if (parâmetro %2==0){ 
            return `${parâmetro} é par`
    }
        else{
            return `${parâmetro} é ímpar`
            
    }
        
}
console.log(parImpar(0))
