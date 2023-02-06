
let situacao = prompt ("voce quer cadastrar uma nova peça? \n 1 - Sim \n 2-Não")
let pReprovadas = "";
let pTotalReprovadas=0;
let pTotalAprovadas=0;
let pTotalPecas =0

while (situacao == "1") {
    let numerodaPeca = prompt ("Digite o número da peça");
    let situacaoPeca = prompt ("Digite a situação da peça \n 1-Aprovado \n 2-Reprovado")


    if (situacaoPeca =="2") {
        pReprovadas += numerodaPeca + "</br> "
        pTotalReprovadas++
        
    }
    if (situacaoPeca == "1") {
        pTotalAprovadas++
        
    }
    pTotalPecas = pTotalAprovadas + pTotalReprovadas
    
    situacao = prompt ("voce quer cadastrar uma nova peça? \n 1 - Sim \n 2-Não")
}
document.getElementById("pReprovadas").innerHTML = pReprovadas
document.getElementById("ptotalReprovadas").innerHTML = pTotalReprovadas
document.getElementById("ptotalPecas").innerHTML =pTotalPecas
document.getElementById("ptotalAprovadas").innerHTML=pTotalAprovadas