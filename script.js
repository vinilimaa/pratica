let prato, bebida, sobremesa;


function escolherFarofa() {

document.getElementById("farofa").style.borderColor = "green";
document.getElementById("arroz").style.borderColor = "white";
document.getElementById("prato").style.borderColor = "white";
prato="Farofa";


}

function escolherArroz () {
    document.getElementById("farofa").style.borderColor = "white";
    document.getElementById("arroz").style.borderColor = "green";
    document.getElementById("prato").style.borderColor = "white";
    prato = "Arroz";
   
    

}

function escolherPrato () {
    document.getElementById("farofa").style.borderColor = "white";
    document.getElementById("arroz").style.borderColor = "white";
    document.getElementById("prato").style.borderColor = "green";
    prato = "Prato-feito";
   


}

function escolherSuco () {
    document.getElementById("suco").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";
    bebida = "Suco";
   

}

function escolherCoca () {

    document.getElementById("suco").style.borderColor = "white";
    document.getElementById("coca").style.borderColor = "green";
    bebida = "Coca-Cola"
    
}

function escolherPudim(){
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("sorvete").style.borderColor = "white";
    sobremesa = "Pudim";
    
}

function escolherSorvete (){
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("sorvete").style.borderColor = "green";
    sobremesa = "Sorvete";
    

}

function finalizarPedido () {
    alert("Você pediu: " + prato  + ", " + bebida + " e " + sobremesa +".");
   
   
}

