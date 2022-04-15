//Elabore um algoritmo que receba dois números
//determine qual é o maior entre eles
//se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function maiorNumero (num1,num2){
    if(num1>num2){
        return `${num1} é maior que ${num2}`
}   
    else if (num2 > num1){
        return `${num2} é maior que ${num1}`

}   else{
        return 'Os números são iguais'
}
}
console.log(maiorNumero(5,5))

