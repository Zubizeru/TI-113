/* Crie um algoritmo usando funções que tenha um cadastro de nomes e salários bruto de até 50 pessoas, 
há um menu de continuação ou parada do cadastro e na parada final, mostre os nomes, salários brutos e os salários líquidos de todos que foram lidos, 
considerando 10% de INSS a descontar. */
let nomes = [];
let salarios = [];
let inss = [];

function cadastrarPessoa() {
    let nome = prompt(`Informe o ${nomes.length + 1}º nome:`).trim();
    if (nome === '' || nome === null) {
        alert("Nome inválido, tente novamente.");
        return false;
    }
    let salario = parseFloat(prompt(`Informe o salário da ${nomes.length + 1}º pessoa:`));
    if (isNaN(salario) || salario <= 0) {
        alert("Salário inválido, tente novamente.");
        return false;
    }
    nomes.push(nome);
    salarios.push(salario);
    inss.push(calcularSalarioLiquido(salario));
    return true;
}

function calcularSalarioLiquido(salario) {
    return salario - (salario * 0.10);
}

function menuPrincipal() {
    let continuar = true;
    while (continuar && nomes.length < 50) {
        let cadastroRealizado = cadastrarPessoa();
        if (!cadastroRealizado) {
            continue;
        }
        let resposta = prompt("Deseja continuar o cadastro? (Digite 's' para continuar ou 'n' para parar)").toLowerCase();
        continuar = (resposta === 's');
    }
}

function exibirCadastro() {
    let mensagem = '';
    for (let i = 0; i < nomes.length; i++) {
        mensagem += `<a style="color: blue">Nome</a>: ${nomes[i]}. <br>`;
        mensagem += `<a style="color: blue">Salário bruto</a>: R$${salarios[i].toFixed(2)}. <br>`;
        mensagem += `<a style="color: blue">Salário líquido</a>: R$${inss[i].toFixed(2)}. <br><br>`;
    }
    document.write(mensagem);
}



menuPrincipal();
exibirCadastro();
