const prompt = require("prompt-sync")();

function extrato(saldo, historico){
    console.log(`===Extrato Bancario===`)

    if (historico.length === 0 ){   // Aqui entra uma parte complicada que precisei de ajuda externa//
        // Length serve para me devolver os números dentro do historico, aqui ele esta se referindo, em caso de leitura não tiver nada no historico ele retorna isso
                 ///     vvv   ///
        console.log(`nenhum movimento ou valor encontrado`)
    }
    else{
        historico.forEach((item, index) => { // usei forEach para ler linha por linha (item) para representar os valores e index para começar na ordem começando por zero// //confesso que não entendi ainda
            console.log(`${index + 1}. ${item}`); // index usado apenas para estilização.//
        });
        }
        console.log(`---------//-------//-------`)
        console.log(`saldo atual R$${saldo.toFixed(2)}`)
}
     function credito(){
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

    module.exports = extrato