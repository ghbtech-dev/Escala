document.getElementById('formFiltro').addEventListener('submit', function(e) {
    e.preventDefault();

    let diaSemana = document.getElementById('selectDiaSemana').value;
    let turno = document.getElementById('selectTurno').value;
    let diaMes = document.getElementById('inputDiaMes').value;

    let tabelaAcompanhantes = document.getElementById('tabelaAcompanhantes');
    let linhas = tabelaAcompanhantes.getElementsByTagName('tr');

    for (let i = 1; i < linhas.length; i++) {
        let linha = linhas[i];
        let colunas = linha.getElementsByTagName('td');
        
        let nome = colunas[0].innerText;
        let diaSemanaTabela = colunas[1].innerText;
        let diaMesTabela = colunas[2].innerText;
        let turnoTabela = colunas[3].innerText;

        if ((nome === 'George' || nome === 'Alysson' || nome === 'Gutemberg' || nome === 'Rose' || nome === 'Lucas' || nome === 'André' || nome === 'Rafael') &&
            diaSemanaTabela === diaSemana && turnoTabela === turno && diaMesTabela === diaMes) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    }
});
