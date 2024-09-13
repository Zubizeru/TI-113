/* Crie um algoritmo usando funções que leia até 50 números inteiros e armazene-os numa lista de 
números, considere as premissas abaixo:
• Não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura.
• Não pode informar números negativos.
• Crie um menu que o usuário escolha cadastrar 5, 15, 25 ou 50.
• Ao final do cadastro ele tem um outro menu pra escolher exibir:
• A lista cadastrada, somente os pares, ou somente os impares. */

// Variáveis usadas
let numeros = [];
let pares = [];
let impares = [];

executarAlgoritmo();

function executarAlgoritmo() {
    let mensagem = "";
    let option = menudeNumeros();
    switch (option) {
        case "1":
            lerNumeros(5);
            break;
        case "2":
            lerNumeros(15);
            break;
        case "3":
            lerNumeros(25);
            break;
        case "4":
            lerNumeros(50);
            break;
        case "5":
            return;
        default:
            mensagem = "Operação inválida. Por favor, escolha um número entre 1 e 5.";
            alert(mensagem);
            return executarAlgoritmo();
    }
    separacaoNumeros(numeros);
    let exibicao = menudeExibicao();
    switch (exibicao) {
        case "1":
            exibirCompleto(numeros);
            break;
        case "2":
            exibirPares(pares);
            break;
        case "3":
            exibirImpares(impares);
            break;
        default:
            mensagem = "Operação inválida. Por favor, escolha um número entre 1 e 3.";
            alert(mensagem);
            return executarAlgoritmo();
    }
}

function menudeNumeros() {
    let infoMenu = `Informe quantos números você deseja cadastrar:
1. Cinco números.
2. Quinze números.
3. Vinte e cinco números.
4. Cinquenta números.
5. Sair.`;
    let opcao = prompt(infoMenu);
    return opcao;
}

function lerNumeros(quantidade) {
    for (let i = 0; i < quantidade; i++) {
        let numero;
        let entrada;
        do {
            entrada = prompt(`Leitura dos ${quantidade} números.\nInforme o ${i + 1}º número:`).trim();
            if (entrada === "") {
                alert("Espaço em branco. Por favor, digite um número.");
            } else {
                numero = parseFloat(entrada);
                if (isNaN(numero)) {
                    alert("Número inválido. Por favor, digite um número válido.");
                } else if (numero < 0) {
                    alert("O número não pode ser negativo. Por favor, digite um número positivo.");
                } else {
                    numeros.push(numero);
                }
            }
        } while (entrada === "" || isNaN(numero) || numero < 0);
    }
}

function separacaoNumeros(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }
}

function menudeExibicao() {
    let infoMenu = `Informe os números você deseja exibir:
1. Todos os números digitados.
2. Somente os números Pares.
3. Somente os números Ímpares.`;
    let exibicao = prompt(infoMenu);
    return exibicao;
}

function exibirCompleto(numeros) {
    let mensagem = `Os números que você digitou foram: \n`;
    for (let i = 0; i < numeros.length; i++) {
        if (i < numeros.length - 1) {
            mensagem += `${numeros[i]}, `;
        } else {
            mensagem += `${numeros[i]}.`;
        }
    }
    alert(mensagem);
    return;
}

function exibirPares(pares) {
    let mensagem = `Os números pares que você digitou foram: \n`;
    for (let i = 0; i < pares.length; i++) {
        if (i < pares.length - 1) {
            mensagem += `${pares[i]}, `;
        } else {
            mensagem += `${pares[i]}.`;
        }
    }
    alert(mensagem);
    return;
}

function exibirImpares(impares) {
    let mensagem = `Os números ímpares que você digitou foram: \n`;
    for (let i = 0; i < impares.length; i++) {
        if (i < impares.length - 1) {
            mensagem += `${impares[i]}, `;
        } else {
            mensagem += `${impares[i]}.`;
        }
    }
    alert(mensagem);
    return;
}
