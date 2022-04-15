//Crie um algoritmo que receba três notas de um aluno
//calcule sua média
//mostre as seguintes mensagens de acordo com cada situação:

  //- Se a media for igual ou maior que 7 - Aprovado
  //- Se a media for maior e igual a cinco e menor que 7 - Recuperação
  //- Se a media for menor que 5 - Reprovado

  function boletim (nota1,nota2,nota3){
      const media = ((nota1+nota2+nota3)/3).toFixed(1)
      if (media >=7){
          return `média = ${media} : aprovada`
      } else if (media >=5 || media <7){
          return `média = ${media} : recuperação`
      } else{
          return `média = ${media} : reprovada`
      }

  }console.log (boletim(10,9,9))