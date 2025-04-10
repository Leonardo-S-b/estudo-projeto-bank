const prompt = require("prompt-sync")();
function sacar(saldo, historico){
    let valorDeSaque = Number(prompt("Valor de Saque: "))

    if (valorDeSaque > saldo){
        console.log(`valor em saldo insuficiente!`)
        historico.push(`saque de ${valorDeSaque.toFixed(2)} negado!`) // usei .push para registrar isso com um dado la no historico //
    }

else {
    saldo -= valorDeSaque
    historico.push(`Saque de R$${valorDeSaque.toFixed(2)}`); // Aqui de novo mesmo caso//
    console.log(`o valor sacado de: ${valorDeSaque.toFixed(2)}, foi sacado com sucesso!`)
    console.log(`valor de saldo atualizado: ${saldo.toFixed(2)}.`)
}
return saldo;
}


module.exports = sacar