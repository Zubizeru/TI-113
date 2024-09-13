/* Crie um algoritmo usando funções que tenha um menu de cadastro de nomes e salários bruto de até 
50 pessoas, e ao final, mostre os nomes, salários brutos e os salários líquidos de todos que foram lidos, 
considerando 10% de INSS a descontar. */
// Arrays para armazenar os dados
let nomes = [];
let salarios = [];
let salariosLiquidos = [];

// Função para cadastrar uma pessoa (nome e salário)
function cadastrarPessoa() {
    let nome = '';
    let salario = 0;

    // Loop para garantir que o nome seja válido
    while (!nome) {
        nome = prompt(`Informe o nome da ${nomes.length + 1}ª pessoa:`).trim();
        
        // Valida o nome
        if (!nome) {
            alert("Nome inválido, tente novamente.");
        }
    }

    // Loop para garantir que o salário seja válido
    while (salario <= 0 || isNaN(salario)) {
        salario = parseFloat(prompt(`Informe o salário da ${nomes.length + 1}ª pessoa:`));
        
        // Valida o salário
        if (isNaN(salario) || salario <= 0) {
            alert("Salário inválido, tente novamente.");
        }
    }

    // Armazena os dados nos arrays
    nomes.push(nome);
    salarios.push(salario);
    salariosLiquidos.push(calcularSalarioLiquido(salario));
}

// Função para calcular o salário líquido com desconto de 10% de INSS
function calcularSalarioLiquido(salario) {
    const descontoINSS = 0.10;
    return salario - (salario * descontoINSS);
}

// Função que exibe o menu principal e controla o cadastro de pessoas
function menuPrincipal() {
    let continuar = true;

    while (continuar && nomes.length < 50) {
        cadastrarPessoa();
        
        // Pergunta ao usuário se deseja continuar
        let resposta = prompt("Deseja continuar o cadastro? (Digite 's' para sim ou 'n' para não)").toLowerCase();
        continuar = (resposta === 's');
    }
}

// Função para exibir o cadastro completo (nomes, salários brutos e líquidos)
function exibirCadastro() {
    let mensagem = '';

    // Monta a mensagem com os dados cadastrados
    for (let i = 0; i < nomes.length; i++) {
        mensagem += `<b>Nome</b>: ${nomes[i]}<br>`;
        mensagem += `<b>Salário bruto</b>: R$${salarios[i].toFixed(2)}<br>`;
        mensagem += `<b>Salário líquido</b>: R$${salariosLiquidos[i].toFixed(2)}<br><br>`;
    }

    // Exibe os dados no documento
    document.write(mensagem);
}

// Executa o programa
menuPrincipal();
exibirCadastro();