let candidato = Number(prompt("Deseja cadastrar um novo candidato? \n 1-Sim \n2-Nâo"))
let idadeMedia = 0
let qtdCandidato =0
let candidatoAprovado = ""
let totalidade =0
let totalCandid=0


while (candidato == 1) {


let numCand = Number (prompt("Digite o numero do candidato(a)"))
let idadeCand =Number (prompt("Digite a idade do candidato(a)"))
let sexoCand = prompt("Digite o sexo do candidato(a). \F-Feminino \n M-Masculino")
let expCand = Number(prompt("O candidato(a) possui experiencia profissional. \n 1-sim \n2-Não"))

totalidade += idadeCand;
totalCandid++;

idadeMedia = totalidade / totalCandid

if (expCand ==1 && idadeCand >=18) {
    candidatoAprovado += numCand + " - " + idadeCand + " - " + sexoCand +"</br>"
    
}
    candidato = Number(prompt("Deseja cadastrar um novo candidato? \n 1-Sim \n2-Nâo"))
    
}
document.getElementById("idade-media").innerHTML=idadeMedia
document.getElementById("qtd-candi").innerHTML=totalCandid
document.getElementById("cand-apv").innerHTML=candidatoAprovado
