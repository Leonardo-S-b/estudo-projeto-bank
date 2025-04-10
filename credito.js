const prompt = require("prompt-sync")();
function credito(saldo, historico){
    let renda = Number(prompt("Renda: "))
    historico.push(`Renda declarada R$${renda.toFixed(2)}`)
   
if (renda >= 1000){
    let credito = Math.floor((renda * 50) / 100)
    historico.push(`crédito pré-aprovado de R$${credito.toFixed(2)} `)
    console.log(`//-------//----------//`)
    console.log(`Parabens você tem um limite Pré-arpovado de R$${credito.toFixed(2)}`)

}
else {
    console.log(` Informamos que não há analises de crédito pré aprovadas! `)

}

}
 module.exports = credito