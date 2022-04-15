//crie um algoritmo que converte dias em horas, quando recebe um número de dias.

function conversorHoras(dias){
    const horas = dias*24
    return `${dias} dias equivalem a ${horas} horas` 
}
console.log(conversorHoras(2))