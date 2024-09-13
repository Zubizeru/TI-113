/* Crie um algoritmo usando funções que leia até 50 números inteiros e armazene-os numa lista de 
números, considere as premissas abaixo:
• Não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura.
• Não pode informar números negativos.
• Crie um menu que o usuário escolha cadastrar 5, 15, 25 ou 50.
• Ao final do cadastro ele tem um outro menu pra escolher exibir:
• A lista cadastrada, somente os pares, ou somente os impares. */
let numeros = [];
let pares = [];
let impares = [];

principal5();
function principal5() {
    let option = menudeNumeros();
    if (processarCadastro(option)) { 
        return;
    }
    separacaoNumeros(numeros);
    let exibicao = menudeExibicao();
    if (processarExibicao(exibicao)) {
        return;
    }
}
 
function menudeNumeros() {
    let opcao;
    let infoMenu = `Informe quantos números você deseja cadastrar:
1. Cinco números.
2. Quinze números.
3. Vinte e cinco números.
4. Cinquenta números.
5. Sair.`;
    
    do {
        opcao = prompt(infoMenu);
        if (opcao !== "1" &&
             opcao !== "2" &&
              opcao !== "3" &&
               opcao !== "4" &&
                opcao !== "5") {
            alert("Opção inválida. Por favor, escolha um número entre 1 e 5.");
        }
    } while (opcao !== "1" &&
         opcao !== "2" &&
          opcao !== "3" &&
           opcao !== "4" &&
            opcao !== "5");
    
    return opcao;
}

function processarCadastro(option) {
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
            alert("Você escolheu sair do algoritmo.");
            return true;
        default:
            alert("Operação inválida. Por favor, escolha um número entre 1 e 5.");
            principal5();
    }
    return false;
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
    pares = [];
    impares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }
}

function menudeExibicao() {
    let exibicao;
    let infoMenu = `Informe o que você deseja exibir:
1. Todos os números digitados.
2. Somente os números Pares.
3. Somente os números Ímpares.
4. Mudei de ideia, não quero usar o algoritmo.`;
    
    do {
        exibicao = prompt(infoMenu);
        if (exibicao !== "1" &&
             exibicao !== "2" &&
              exibicao !== "3" &&
               exibicao !== "4") {
            alert("Opção inválida. Por favor, escolha um número entre 1 e 4.");
        }
    } while (exibicao !== "1" &&
         exibicao !== "2" &&
          exibicao !== "3" &&
           exibicao !== "4");
    
    return exibicao;
}

function processarExibicao(exibicao) {
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
        case "4":
            alert("Você escolheu sair do algoritmo.");
            return true;
        default:
            alert("Operação inválida. Por favor, escolha um número entre 1 e 4.");
            principal5();
    }
    return false;
}

function exibirCompleto(numeros) {
    let mensagem = `Os números que você digitou foram: \n`;
    for (let i = 0; i < numeros.length; i++) {
        mensagem += (i < numeros.length - 1) ? `${numeros[i]}, ` : `${numeros[i]}.`;
    }
    alert(mensagem);
}

function exibirPares(pares) {
    let mensagem = `Os números pares que você digitou foram: \n`;
    for (let i = 0; i < pares.length; i++) {
        mensagem += (i < pares.length - 1) ? `${pares[i]}, ` : `${pares[i]}.`;
    }
    alert(mensagem);
}

function exibirImpares(impares) {
    let mensagem = `Os números ímpares que você digitou foram: \n`;
    for (let i = 0; i < impares.length; i++) {
        mensagem += (i < impares.length - 1) ? `${impares[i]}, ` : `${impares[i]}.`;
    }
    alert(mensagem);
}

