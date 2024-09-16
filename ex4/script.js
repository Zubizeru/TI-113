/* Crie um algoritmo usando funções que tenha um menu de cadastro de nomes e salários bruto de até 
50 pessoas, e ao final, mostre os nomes, salários brutos e os salários líquidos de todos que foram lidos, 
considerando 10% de INSS a descontar. */
// Arrays para armazenar os dados
// Função que exibe o menu principal e controla o cadastro de pessoas
principal4();
function principal4() {
    let nomes = [];
    let salarios = [];
    let continuar = true;
    while (continuar && nomes.length < 50) {
        cadastrarPessoa(nomes, salarios);
        continuar = confirm("Deseja continuar o cadastro?");
    }
    exibirCadastro(nomes, salarios);
}

function cadastrarPessoa(nomes, salarios) {
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
}

function exibirCadastro(nomes, salarios) {
    const descontoINSS = 0.10;
    let mensagem = '';

    for (let i = 0; i < nomes.length; i++) {
        let salarioBruto = salarios[i];
        let salarioLiquido = salarioBruto - (salarioBruto * descontoINSS);
        mensagem += `<b>Nome</b>: ${nomes[i]}<br>`;
        mensagem += `<b>Salário bruto</b>: R$${salarioBruto.toFixed(2)}<br>`;
        mensagem += `<b>Salário líquido</b>: R$${salarioLiquido.toFixed(2)}<br><br>`;
    }
    document.write(mensagem);
}

