//Crie uma função que recebe o ano de nascimento da pessoa 
//informando se ela é maior de idade ou menor.

function maioridade(anoNascimento){
    const idade = (2022-anoNascimento)
    if (idade >=18){
        return `${idade} anos: maior de idade`
    }
    else{
        return `${idade} anos: menor de idade`
    }

}console.log(maioridade(1980))
