const prompt = require("prompt-sync")();

function depositar(saldo, historico) {
    let valorDeposito = Number(prompt("Valor do depósito: "));

    if (isNaN(valorDeposito) || valorDeposito <= 0) {
        console.log("Valor inválido. Tente novamente.");
        return;
    }

    saldo += valorDeposito;
    historico.push(`Depósito de R$${valorDeposito.toFixed(2)}`);
    console.log(`Depósito de R$${valorDeposito.toFixed(2)} realizado com sucesso.`);
    console.log(`Saldo atualizado: R$${saldo.toFixed(2)}.`);
    return saldo;
}

module.exports = depositar;