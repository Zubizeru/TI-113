/* Crie uma função que lê um vetor de 5 números inteiros e mostre-os, considere que o usuário não pode 
informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura caso ocorra. */
  let numeros = leituraNumeros(5);
  exibirNumeros(numeros);


function leituraNumeros(quantidade) {
  let numeros = [];
  for (let i = 0; i < quantidade; i++) {
      let numero;
      let entrada;
    do {
      entrada = prompt(`Digite o ${i + 1}° número inteiro:`);
        if (entrada.trim() === "") {
            alert("Espaço em branco. Por favor, digite um número válido")
        }
      else {
          numero = parseInt(entrada);
                if (isNaN(numero))
        alert("Por Favor, digite um número válido")
      }
    } while (entrada.trim() === "" || isNaN(numero)); 
    numeros.push(numero);
  }
  return numeros;
}

function exibirNumeros(numeros) {
  let mensagem = `Os números digitados foram:\n`;
  for (let i = 0; i < numeros.length; i++) {
    mensagem += numeros[i];
    if (i === numeros.length - 1) {
      mensagem += ".";
    } else if (i === numeros.length - 2) {
      mensagem += " e ";
    } else {
      mensagem += ", ";
    }
  }
  alert(mensagem);
}