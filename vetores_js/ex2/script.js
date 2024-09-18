/* Crie um sistema de cadastro de alunos usando funções onde devem ser lidos os nomes, matriculas, matérias e três 
notas de até 100 pessoas e mostre-os no fim do cadastro com as respectivas médias conforme os seguintes critérios: 
• Considere que o usuário não pode informar conteúdo vazio.
• Nomes completos válidos (nome e sobrenome). 
• Matrículas válidas com 8 caracteres de números (00000000 a 99999999).
• As notas informadas devem ser válidas e não podem ser inferiores a 0 e acima de 10. 
• Deve-se cadastrar no mínimo 5 alunos.
• As médias devem ser mostradas com suas notas no seguinte formato: 
• “N1: 0,00 / N2: 0,00 / N3: 0,00 / Media: 0,00”. */
principal2();
function principal2() {
    const nomes = [];
    const matriculas = [];
    const materias = [];
    const notas = [];
    let continuar = true;
    while (continuar && nomes.length < 100) {
        cadastrarAlunos(nomes, matriculas, materias, notas);
        if (nomes.length >= 5) {
            continuar = confirm("Deseja continuar o cadastro? (OK para sim, Cancelar para não)");
        }
    }
    exibirCadastrodeAlunos(nomes, matriculas, materias, notas);
}

function cadastrarAlunos(nomes, matriculas, materias, notas) {
    const nome = obterNome(nomes.length + 1);
    const matricula = obterMatricula(nomes.length + 1);
    const materia = obterMateria(nomes.length + 1);
    const notasAluno = obterNotas(nomes.length + 1);
    // Adicionando os dados às listas
    nomes.push(nome);
    matriculas.push(matricula);
    materias.push(materia);
    notas.push(notasAluno);
}

function obterNome(indice) {
    let nome;
    do {
        nome = prompt(`Informe nome e sobrenome do ${indice}º aluno:`).trim();
        if (nome === "" || !nome.includes(" ") || !isNaN(nome)) {
            alert("Nome inválido. Por favor, informe seu nome e sobrenome.");
        }
    } while (nome === "" || !nome.includes(" "));
    return nome;
}

function obterMatricula(indice) {
    let matricula;
    do {
        matricula = prompt(`Informe o número da ${indice}º matrícula (8 dígitos):`).trim();
        if (matricula.length !== 8 || isNaN(matricula)) {
            alert("Matrícula inválida, por favor, informe uma matrícula com 8 dígitos.");
        }
    } while (matricula.length !== 8 || isNaN(matricula));
    return matricula;
}

function obterMateria(indice) {
    let materia;
    do {
        materia = prompt(`Informe a matéria da ${indice}ª pessoa:`).trim();
        if (materia === "") {
            alert("Espaço em branco, por favor, digite uma matéria válida.");
        }
    } while (materia === "");
    return materia;
}

function obterNotas(indice) {
    const notasAluno = [];
    for (let i = 0; i < 3; i++) {
        let nota;
        do {
            nota = prompt(`Informe a ${i + 1}ª nota da ${indice}ª pessoa:`).trim();
            if (nota === "") {
                alert("Espaço em branco, por favor, digite uma nota válida.");
            } else {
                nota = parseFloat(nota);
                if (isNaN(nota) || nota < 0 || nota > 10) {
                    alert("Nota inválida, por favor, informe uma nota entre 0 e 10.");
                }
            }
        } while (isNaN(nota) || nota < 0 || nota > 10);
        notasAluno.push(nota);
    }
    return notasAluno;
}

function calculoDeMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

function exibirCadastrodeAlunos(nomes, matriculas, materias, notas) {
    let mensagem = '';
    for (let i = 0; i < nomes.length; i++) {
        const media = calculoDeMedia(notas[i]);
        mensagem += `Nome: ${nomes[i]}<br> Matrícula: ${matriculas[i]}<br> <b>Matéria</b>: ${materias[i]}<br> Nota 1:${notas[i][0].toFixed(2)} / Nota 2:${notas[i][1].toFixed(2)} / Nota 3:${notas[i][2].toFixed(2)}<br> Média: ${media.toFixed(2)}<br><br>`;
    }
    document.write(mensagem);
}


