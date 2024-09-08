const form = document.getElementById('form-atividade'); //coleta todos o HTML do formulário

// variável com o conteudo dos emojis - const 
const imgAprovado  = '<img src="./images/aprovado.png" alt="img" />';
const imgReprovado  = '<img src="./images/reprovado.png" alt="img" />';
const aprovado = '<span  class="resultado aprovado" >Aprovado</span>' // var para adicionar o valor na tabela
const reprovado = '<span  class="resultado reprovado" >Reprovado</span>' // var para adicionar o valor na tabela
const atividades = [] // Array vazio para coletas os valores das atividades 
const notas = [] // Array vazio para coletas os valores das notas


// variável para adicionar linha 
let linhas = ''

// Ao clicar, dispara as funções.
form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizatabela();
    atualizaMediaFinal();
    atualizaMediaFinal();
})


function adicionalinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade') //coleta o valor inserido na input Nome da atividade.
    const inputNotaAtividade = document.getElementById('nota-atividade') //coleta o valor inserido na iunput nota da atividade.
    const atividadeInclusa = document.getElementById('atividade')
    const valorMédiaNota = (document.getElementById('média-atividade')) // var constante para o valor da media

    if (atividades.includes(inputNomeAtividade.value)) {
        atividadeInclusa.innerHTML = 'A atividade já foi inserida'
    } else {           
    atividades.push(inputNomeAtividade.value) // atualiza os valores do array
    notas.push(Number(inputNotaAtividade.value)) // atualiza os valores do array e converte em número
    atividadeInclusa.innerHTML = ' '
    
    let linha = '<tr>' // Adiciona uma linha na varíavel linha 
    linha += `<td>${inputNomeAtividade.value}</td>` // Adiciona uma coluna com o valor da variável 
    linha += `<td>${inputNotaAtividade.value}</td>` // Adiciona uma coluna com o valor da variável 
    linha += `<td>${inputNotaAtividade.value >= Number(valorMédiaNota.value) ? imgAprovado : imgReprovado }</td>` // Adiciona uma coluna com o valor da variável 
    linha += '</tr>' // fecha a linha.

    linhas += linha // insere o valor na variável linhas, definida anteriormente.
    }


    inputNomeAtividade.value = '' // reseta os valores dos inputs 
    inputNotaAtividade.value = '' // reseta os valores dos inputs
}

function atualizatabela() {

    const corpoTabela = document.querySelector('tbody') // Conecta com o HTML
    corpoTabela.innerHTML = linhas // Insere os valores no HTML
}

function atualizaMediaFinal() {
    const médiaFinal = calculaMédiaFinal(); // retorna o valor da função da soma das notas
    const valorMédiaNota = document.getElementById('média-atividade') // var constante para o valor da media 

    document.getElementById('média-final').innerHTML = médiaFinal.toFixed(2) // add o valor no html e limita duas casas decimais apos a virgula.
    document.getElementById('média-final-resultado').innerHTML = médiaFinal >= valorMédiaNota.value ? aprovado : reprovado // condicao ternária para add valor no html
}

function calculaMédiaFinal() {
    let somaDasNotas = 0 // var para adicionar os valores dentro do array notas.

    for (let i = 0; i < notas.length; i++ ) {
        somaDasNotas = somaDasNotas + notas[i] // adicona o valor dentro da var
    }

    return somaDasNotas / notas.length // retorno da funcao 
}
