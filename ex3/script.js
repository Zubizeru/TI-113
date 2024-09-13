/* Crie um algoritmo usando funções que faça uma leitura de 10 letras em um vetor, e após verificar 
quantas vogais foram lidas e mostre somente consoantes no alert. */
const letras = lerLetras(10);
const consoantes = separarConsoantes(letras);
const vogais = separarVogais(letras);
exibirSeparacao(consoantes, vogais);

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
    for (let j = 0; j < letras.length; j++) {
        if (letras[j] !== "A" &&
            letras[j] !== "E" &&
            letras[j] !== "I" &&
            letras[j] !== "O" &&
            letras[j] !== "U") {
            consoantes.push(letras[j]);
        }
    }
    return consoantes;
}

function separarVogais(letras) {
    let vogais = [];
    for (let k = 0; k < letras.length; k++) {
        if (letras[k] === "A" ||
            letras[k] === "E" ||
            letras[k] === "I" ||
            letras[k] === "O" ||
            letras[k] === "U") {
            vogais.push(letras[k]);
        }
    }
    return vogais;
}

function exibirSeparacao(consoantes, vogais) {
    let mensagem = `Algoritmo de dez letras: \nForam lidas ${vogais.length} vogais!\n`;
    for (let l = 0; l < consoantes.length; l++) {  // Usando 'l' aqui
        mensagem += consoantes[l];
        if (l === consoantes.length - 1) {
            mensagem += "";
        } else if (l === consoantes.length - 2) {
            mensagem += " e ";
        } else {
            mensagem += ", ";
        }
    }
    mensagem += ` são as consoantes do algoritmo (${consoantes.length} consoantes)`;
    alert(mensagem);
}