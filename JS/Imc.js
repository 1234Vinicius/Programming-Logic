<Meta charset="UTF-8">


<script>
	
   function pulelinha() {


   	document.write("<br>");
   	document.write("<br>");

   }


   function mostra(frase) {

   	document.write(frase);
   	pulelinha();


   }

function calculeImc(altura, peso) {

   return  peso / (altura * altura);
   


}

   var nome = prompt(nome + ", Informe o seu nome");
   var alturaInformada = prompt(nome + ", Informe a sua altura");
   var pesoInformado = prompt (nome + ", Informe o seu peso");

   var imc = calculeImc  (alturaInformada, pesoInformado);


   document.write(nome + " ,O IMC calculado é " + imc);

 

   




</script>