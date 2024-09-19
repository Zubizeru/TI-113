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

        if (nome === "") {
            alert("Nome inválido. O campo não pode estar vazio.");
        } else if (/[0-9]/.test(nome)) {
            alert("Nome inválido. O nome não pode conter números.");
        } else if (nome.indexOf(" ") < 3) {
            alert("Nome inválido. Você deve informar seu nome e sobrenome.");
        }

    } while (nome.indexOf(" ") < 3 || /[0-9]/.test(nome) || nome === '');
    return nome;
}

function obterMatricula(indice) {
    let matricula;
    do {
        matricula = prompt(`Informe o número da ${indice}º matrícula (8 dígitos):`).trim();

        if (matricula === "") {
            alert("Matrícula inválida. O campo não pode estar vazio.");
        } else if (matricula.length !== 8) {
            alert("Matrícula inválida. A matrícula deve ter exatamente 8 dígitos.");
        } else if (isNaN(matricula)) {
            alert("Matrícula inválida. A matrícula deve conter apenas números.");
        }

    } while (matricula === "" || matricula.length !== 8 || isNaN(matricula));
    return matricula;
}

function obterMateria(indice) {
    let materia;
    do {
        materia = prompt(`Escolha a matéria da ${indice}ª pessoa (Digite o número correspondente):
        1. Matemática
        2. Português
        3. História
        4. Geografia
        5. Física
        6. Química
        7. Biologia
        8. Inglês`).trim();

        switch (materia) {
            case "1":
                materia = "Matemática";
                break;
            case "2":
                materia = "Português";
                break;
            case "3":
                materia = "História";
                break;
            case "4":
                materia = "Geografia";
                break;
            case "5":
                materia = "Física";
                break;
            case "6":
                materia = "Química";
                break;
            case "7":
                materia = "Biologia";
                break;
            case "8":
                materia = "Inglês";
                break;
            default:
                alert("Matéria inválida. Por favor, escolha uma das opções disponíveis.");
                materia = "";
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
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

function exibirCadastrodeAlunos(nomes, matriculas, materias, notas) {
    let mensagem = '';
    for (let i = 0; i < nomes.length; i++) {
        const media = calculoDeMedia(notas[i]);
        mensagem += `<b>Nome</b>: ${nomes[i]}<br><b>Matrícula</b>: ${matriculas[i]}<br> <b>Matéria</b>: ${materias[i]}<br> <b>Nota 1</b>: ${notas[i][0].toFixed(2)} / <b>Nota 2</b>: ${notas[i][1].toFixed(2)} / <b>Nota 3</b>: ${notas[i][2].toFixed(2)}<br> <b>Média</b>: ${media.toFixed(2)}<br><br>`;
    }
    document.write(mensagem);
}
