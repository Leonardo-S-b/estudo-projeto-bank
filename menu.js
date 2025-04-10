const prompt = require("prompt-sync")();

function mostrarMenu(saldo, historico){
    console.log("====//Menu do banco====//")
    console.log("1 - ver saldo")
    console.log("2 - Depositar")
    console.log("3 - Ver extrato")
    console.log("4 - Crédito")
    console.log("5 - Simular Financiamento")
    console.log("6 - Saque")
    console.log("0 - Sair")
   

const opcao = prompt("Escolha uma das opções")

switch(opcao){
    case "1":
         require("./versaldo")(saldo);
        break;
        case "2":
           saldo = require("./deposito")(saldo, historico);
            break;
            case "3":
              saldo =  require("./extrato")(saldo, historico);
                 break;
                 case "4":
           saldo = require("./credito")(saldo, historico);
            break;
        case "5":
           saldo = require("./financiamento")(saldo, historico);
            break;
            case "6":
          saldo =  require("./saque")(saldo, historico);
            break;
 
        case "0":
            console.log("Saindo...");
            return false;
        default:
            console.log("Opção inválida.");
}

return true; 
}
module.exports = mostrarMenu;