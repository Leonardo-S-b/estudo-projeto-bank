const prompt = require("prompt-sync")();

const mostrarMenu = require("./menu");

let saldo = 0;
let historico = [];

let continuar = true;
while (continuar){
    continuar = mostrarMenu(saldo, historico)
}