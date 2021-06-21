<Meta charset="UTF-8">


<script>
	
function pulaLinha() {

	document.write("<br>");
	document.write("<br>");

}

function mostra (frase) {

	document.write(frase);
	pulaLinha();
}

function calculeImc(altura, peso) {
	return peso / (altura * altura);

}

var nome = prompt("Informe o seu nome");
var alturaInformada = prompt(nome + ", Infome a sua altura");
var pesoInformado = prompt(nome + ", Informe o seu peso");

var imc = calculeImc (alturaInformada, pesoInformado);

mostra("O IMC calculado e " + imc);


document.write("<br>");


</script>