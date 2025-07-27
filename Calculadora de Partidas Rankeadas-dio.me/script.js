document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcularBtn');
    const resultadoDiv = document.getElementById('resultado');

    calcularBtn.addEventListener('click', function() {
        const vitorias = parseInt(document.getElementById('vitorias').value);
        const derrotas = parseInt(document.getElementById('derrotas').value);

        if (isNaN(vitorias) || isNaN(derrotas)) {
            resultadoDiv.textContent = 'Por favor, insira valores válidos para vitórias e derrotas!';
            return;
        }

        const resultado = calcularNivel(vitorias, derrotas);
        resultadoDiv.textContent = resultado;
    });

    function calcularNivel(vitorias, derrotas) {
        const saldoVitorias = vitorias - derrotas;
        let nivel;

        if (vitorias < 10) {
            nivel = "Ferro";
        } else if (vitorias <= 20) {
            nivel = "Bronze";
        } else if (vitorias <= 50) {
            nivel = "Prata";
        } else if (vitorias <= 80) {
            nivel = "Ouro";
        } else if (vitorias <= 90) {
            nivel = "Diamante";
        } else if (vitorias <= 100) {
            nivel = "Lendário";
        } else {
            nivel = "Imortal";
        }

        return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
    }
});