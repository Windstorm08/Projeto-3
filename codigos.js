
var numeroSecreto = parseInt(Math.random(numeroSecreto) * 11)

function Chutar(){

   var chute = document.getElementById("valor").value

   var resultado = document.getElementById("resultado")


   if(chute == numeroSecreto){

    alert("Voce Acertou!!! ")
    resultado.innerHTML = "O resultado é " + parseInt(chute)

   } else if(chute > 10 || chute < 0 || chute == ""){
      
     alert("DIGITE NUMEROS ENTRE 0 E 10 ")
 
   } else if(numeroSecreto > chute ){

    alert("Errou, O numero é maior que esse " + chute)
    resultado.innerHTML = "O numero digitado é " + parseInt(chute)

   } else if (numeroSecreto <  chute){
 
    alert("Errou, O numero é menor que " + chute )
    resultado.innerHTML = "O numero digitado é " + parseInt(chute)

   } 
   
}
