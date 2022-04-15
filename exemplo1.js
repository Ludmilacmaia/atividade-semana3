//Elabore um algoritmo que receba um número (1-7)
//devolva o dia da semana correspondente.

function diaDaSemana (numero){
switch (numero){
    case 1:
        return 'é domingo'
    
    case 2 :
        return 'é segunda-feira'

    case 3 :
        return 'é terça-feira'

    case 4 :
        return 'é quarta-feira'

    case 5:
        return 'é quinta-feira'

    case 6 :
        return 'é sexta-feira'

    case 7 :
        return 'é sábado'

    default:
        return 'Este não é um número válido'
    }
}
console.log(diaDaSemana(7))