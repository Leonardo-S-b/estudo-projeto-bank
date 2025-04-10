const prompt = require("prompt-sync")();
function financiamento(saldo, historico){
    let renda = Number(prompt("Informe sua renda; "))
    
    let entrada = Number(prompt("Entrada: "))
    historico.push(`Valor de entrada no financiamento de R$${entrada.toFixed(2)}`)
    let financiamento =  Number(prompt("Valor do financiamento: "))
    historico.push(`Valor de financiamento desejado de R${financiamento.toFixed(2)}`)
    
    
           //verificação de valores
    
    let campos = [
        {nome: "Renda", valor: renda},  // arrays determinadas
        {nome: "Entrada", valor: entrada},
        {nome: "Financiamento", valor: financiamento}
    ];

    for (let campo of campos) { //loop
        if(isNaN(campo.valor) || campo.valor <= 0 ){ 
            //isnan retorna um valor true entao verifica tudo que não for um numero/campo. valor esta percorrendo a array para verificar os valores campo.valor <= 0  verifica se algum dos valores digitados nas arrays seja menor ou igual a zero
            console.log(`Erro: ${campo.nome} inválido.`);
        return; }
   
    }


   let desconto = Math.floor(financiamento - entrada);
   let parcelas= 90
        let ValorParcelas = desconto / 90
   
        if (entrada < renda * 0.3) {
            console.log(`//------//------//`)
            console.log(`Valor de entrada muito baixo. Financiamento negado.`);
        } else if (ValorParcelas > renda * 0.6) {
            console.log(`//------//------//`)
            console.log(`Parcelas comprometem mais de 60% da sua renda. Financiamento negado.`);
        } else {
            console.log(`//------//------//`)
            console.log(`Financiamento aprovado!`);
        }
    
    
}
module.exports = financiamento