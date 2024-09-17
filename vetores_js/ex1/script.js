/* Crie um sistema de cadastro de funcionários usando funções onde devem ser lidos os nomes, idades e salários de até 
100 pessoas considerando os seguintes critérios:
• Considere que o usuário não pode informar conteúdo vazio.
• Nomes completos válidos (nome e sobrenome). 
• Idades válidas e maiores de 14 anos e menores de 120 anos.
• Os salários informados devem ser válidos e não podem ser inferiores a R$ 2000,00 e acima de 20000,00.
• Deve-se cadastrar no mínimo 5 pessoas.
Exiba todos os cadastrados na página HTML. */
principal1();
function principal1() {
    let nomes = [];
    let idades = [];
    let salarios = [];
    let continuar = true;

    while (continuar && nomes.length < 100) {
        cadastrarFuncionario(nomes, idades, salarios); 
        if (nomes.length >= 5) {
            continuar = confirm("Deseja continuar o cadastro? (OK para sim, Cancelar para não)");
        }
        if (nomes.length < 5) {
            continuar = true;
        }
    }
    exibirCadastrodeFuncionario(nomes, idades, salarios);
}

function cadastrarFuncionario(nomes, idades, salarios) {
    let nome = '';
    let salario = 0;
    let idade;

    // Cadastro do Nome
    do {
        nome = prompt(`Informe nome e sobrenome do ${nomes.length + 1}º funcionário:`).trim();
        if (nome === "") {
            alert("Espaço em branco, por favor, digite um nome válido.");
        } else if (!nome.includes(" ") || !isNaN(nome)) {
            alert("Nome inválido. Por favor, informe seu nome e sobrenome.");
        }
    } while (nome === "" || !nome.includes(" "));

    // Cadastro da Idade
    do {
        idade = prompt(`Informe a idade do ${nomes.length + 1}º funcionário:`).trim();
        if (idade === "") {
            alert("Espaço em branco, por favor, digite uma idade válida.")
        } else {
            idade = parseInt(idade);
            if (isNaN(idade) || idade <= 14 || idade >= 120) {
                alert("Idade inválida, por favor, informe uma idade maior que 14 anos e menor que 120 anos.");
            }
        }
    } while (isNaN(idade) || idade <= 14 || idade >= 120);

    // Cadastro do Salário
    do {
        salario = prompt(`Informe o salário da ${nomes.length + 1}ª pessoa:`).trim();
        if (salario === "") {
            alert("Espaço em branco, por favor, digite um salário válido.");
        } else {
            salario = parseFloat(salario);
            if (isNaN(salario) || salario <= 2000 || salario >= 20000) {
                alert("Salário inválido, por favor, informe um salário acima de R$2000.00 e menor que R$20000.00.");
            }
        }
    } while (isNaN(salario) || salario <= 2000 || salario >= 20000);

    nomes.push(nome);
    salarios.push(salario);
    idades.push(idade);
}

function exibirCadastrodeFuncionario(nomes, idades, salarios) {
    let mensagem = '';
    for (let i = 0; i < nomes.length; i++) {
        mensagem += `<b>Nome</b>: ${nomes[i]}<br> 
        <b>Idade</b>: ${idades[i]} anos<br> 
        <b>Salário</b>: R$${salarios[i].toFixed(2)}<br><br>`;
    }
    document.write(mensagem);
}
