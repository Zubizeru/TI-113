function imprimirTamanhoNomes() {
    const nomes = [];
    for (let i = 0; i < 3; i++) {
        nomes.push(prompt(`Insira o nome ${i + 1}:`));
    }
    let resultado = '';
    for (let i = 0; i < nomes.length; i++) {
        resultado += `${nomes[i].trim()} tem ${nomes[i].length} caracteres.\n`;
    }
    alert(resultado);
}

function converterParaMaiusculas() {
    const pessoas = [];
    for (let i = 0; i < 3; i++) {
        pessoas.push(prompt(`Insira o nome ${i + 1}:`));
    }
    let resultado = '';
    for (let i = 0; i < pessoas.length; i++) {
        resultado += pessoas[i].toUpperCase() + '\n';
    }
    alert(resultado);
}

function converterParaMinusculas() {
    const pessoas = [];
    for (let i = 0; i < 3; i++) {
        pessoas.push(prompt(`Insira o nome ${i + 1}:`));
    }
    let resultado = '';
    for (let i = 0; i < pessoas.length; i++) {
        resultado += pessoas[i].toLowerCase() + '\n';
    }
    alert(resultado);
}

function imprimirPrimeiroCaractere() {
    const palavras = [];
    for (let i = 0; i < 3; i++) {
        palavras.push(prompt(`Insira a palavra ${i + 1}:`));
    }
    let resultado = '';
    for (let i = 0; i < palavras.length; i++) {
        resultado += `Primeira letra de ${palavras[i].trim()}: ${palavras[i].charAt(0)}\n`;
    }
    alert(resultado);
}

function encontrarIndiceLetra() {
    const palavras = [];
    for (let i = 0; i < 3; i++) {
        palavras.push(prompt(`Insira a palavra ${i + 1}:`));
    }
    const letra = prompt("Insira a letra para encontrar o índice:");
    let resultado = '';
    for (let i = 0; i < palavras.length; i++) {
        resultado += `Índice de "${letra}" em ${palavras[i].trim()}: ${palavras[i].indexOf(letra)}\n`;
    }
    alert(resultado);
}

function encontrarUltimoIndiceLetra() {
    const palavras = [];
    for (let i = 0; i < 3; i++) {
        palavras.push(prompt(`Insira a palavra ${i + 1}:`));
    }
    const letra = prompt("Insira a letra para encontrar o último índice:");
    let resultado = '';
    for (let i = 0; i < palavras.length; i++) {
        resultado += `Último índice de "${letra}" em ${palavras[i].trim()}: ${palavras[i].lastIndexOf(letra)}\n`;
    }
    alert(resultado);
}

function fatiaFrutas() {
    const frutas = [];
    for (let i = 0; i < 3; i++) {
        frutas.push(prompt(`Insira a fruta ${i + 1}:`));
    }
    const inicio = parseInt(prompt("Insira o índice inicial:"));
    const fim = parseInt(prompt("Insira o índice final:"));
    let resultado = '';
    for (let i = 0; i < frutas.length; i++) {
        resultado += `Fatia de ${frutas[i].trim()}: ${frutas[i].slice(inicio, fim)}\n`;
    }
    alert(resultado);
}

function substringFrutas() {
    const frutas = [];
    for (let i = 0; i < 3; i++) {
        frutas.push(prompt(`Insira a fruta ${i + 1}:`));
    }
    const inicio = parseInt(prompt("Insira o índice inicial:"));
    const fim = parseInt(prompt("Insira o índice final:"));
    let resultado = '';
    for (let i = 0; i < frutas.length; i++) {
        resultado += `Substring de ${frutas[i].trim()}: ${frutas[i].substring(inicio, fim)}\n`;
    }
    alert(resultado);
}

function substituirPalavra() {
    const frases = [];
    for (let i = 0; i < 3; i++) {
        frases.push(prompt(`Insira a frase ${i + 1}:`));
    }
    const antigaPalavra = prompt("Insira a palavra a ser substituída:");
    const novaPalavra = prompt("Insira a nova palavra:");
    let resultado = '';
    for (let i = 0; i < frases.length; i++) {
        resultado += frases[i].replace(antigaPalavra, novaPalavra) + '\n';
    }
    alert(resultado);
}

function dividirFrases() {
    const frases = [];
    for (let i = 0; i < 3; i++) {
        frases.push(prompt(`Insira a frase ${i + 1}:`));
    }
    const separador = prompt("Insira o caractere separador:");
    let resultado = '';
    for (let i = 0; i < frases.length; i++) {
        resultado += `Divisão de "${frases[i]}": ${frases[i].split(separador).join(', ')}\n`;
    }
    alert(resultado);
}

function removerEspacos() {
    const frases = [];
    for (let i = 0; i < 3; i++) {
        frases.push(prompt(`Insira a frase ${i + 1}:`));
    }
    let resultado = '';
    for (let i = 0; i < frases.length; i++) {
        resultado += `Frase sem espaços: "${frases[i].trim()}"\n`;
    }
    alert(resultado);
}

function verificarFruta() {
    const frutas = [];
    for (let i = 0; i < 3; i++) {
        frutas.push(prompt(`Insira a fruta ${i + 1}:`));
    }
    const frutaProcurada = prompt("Insira a fruta a ser verificada:");
    let resultado = '';
    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i].includes(frutaProcurada)) {
            resultado += `${frutaProcurada} está presente em ${frutas[i].trim()}\n`;
        } else {
            resultado += `${frutaProcurada} não está presente em ${frutas[i].trim()}\n`;
        }
    }
    alert(resultado);
}