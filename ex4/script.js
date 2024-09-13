/* Crie um algoritmo usando funções que tenha um menu de cadastro de nomes e salários bruto de até 
50 pessoas, e ao final, mostre os nomes, salários brutos e os salários líquidos de todos que foram lidos, 
considerando 10% de INSS a descontar. */
// Arrays para armazenar os dados
// Função que exibe o menu principal e controla o cadastro de pessoas
principal4();
function principal4() {
    let nomes = [];
    let salarios = [];
    let salariosLiquidos = [];
    let continuar = true;

    while (continuar && nomes.length < 50) {
        cadastrarPessoa(nomes, salarios, salariosLiquidos);
        let resposta = prompt("Deseja continuar o cadastro? (Digite 's' para sim ou 'n' para não)").toLowerCase();
        continuar = (resposta === 's');
    }
    exibirCadastro(nomes, salarios, salariosLiquidos);
}

function cadastrarPessoa(nomes, salarios, salariosLiquidos) {
    let nome = '';
    let salario = 0;
    while (!nome) {
        nome = prompt(`Informe o nome da ${nomes.length + 1}ª pessoa:`).trim();
        if (!nome) {
            alert("Nome inválido, tente novamente.");
        }
    }
    while (salario <= 0 || isNaN(salario)) {
        salario = parseFloat(prompt(`Informe o salário da ${nomes.length + 1}ª pessoa:`));
        if (isNaN(salario) || salario <= 0) {
            alert("Salário inválido, tente novamente.");
        }
    }
    nomes.push(nome);
    salarios.push(salario);
    salariosLiquidos.push(calcularSalarioLiquido(salario));
}

function calcularSalarioLiquido(salario) {
    const descontoINSS = 0.10;
    return salario - (salario * descontoINSS);
}

function exibirCadastro(nomes, salarios, salariosLiquidos) {
    let mensagem = '';
    for (let i = 0; i < nomes.length; i++) {
        mensagem += `<b>Nome</b>: ${nomes[i]}<br>`;
        mensagem += `<b>Salário bruto</b>: R$${salarios[i].toFixed(2)}<br>`;
        mensagem += `<b>Salário líquido</b>: R$${salariosLiquidos[i].toFixed(2)}<br><br>`;
    }
    
    document.write(mensagem);
}