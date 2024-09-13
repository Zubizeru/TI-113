/* Crie um algoritmo usando funções que faça uma leitura de 10 letras em um vetor, e após verificar 
quantas vogais foram lidas e mostre somente consoantes no alert. */
const letras = lerLetras(10);
const { consoantes, vogais } = separarConsoantes(letras);
exibirConsoantes(consoantes, vogais);

function lerLetras(quantidade) {
    let letras = [];
    for (let i = 0; i < quantidade; i++) {
        let letra = prompt(`Informe a ${i + 1}ª letra (somente uma letra):`).toUpperCase();
        letras.push(letra);
    }
    return letras;
}

function separarConsoantes(letras) {
    let consoantes = [];
    let vogais = [];
    for (let j = 0; j < letras.length; j++) {
        if (letras[j] === "A" ||
             letras[j] === "E" ||
              letras[j] === "I" ||
               letras[j] === "O" ||
                letras[j] === "U") {
            vogais.push(letras[j]);
        } else {
            consoantes.push(letras[j]);
        }
    }
    return { consoantes, vogais };
}

function exibirConsoantes(consoantes, vogais) {
    let mensagem = `Algoritmo de dez letras: \nForam lidas ${vogais.length} vogais!\n`;
    for (let i = 0; i < consoantes.length; i++) {
        mensagem += consoantes[i];
        if (i === consoantes.length - 1) {
            mensagem += "";
        } else if (i === consoantes.length - 2) {
            mensagem += " e ";
        } else {
            mensagem += ", ";
        }
    }
    mensagem += ` são as consoantes do algoritmo (${consoantes.length} consoantes)`;
    alert(mensagem);
}
