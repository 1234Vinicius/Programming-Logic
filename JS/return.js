<meta charset="UTF-8">



<script>
	

function pulaLinha() {

	document.write("<br>");
	document.write("<br>");

}


function mostra(frase) {

	document.write(frase);
	pulaLinha();
}


var numeroUm = parseInt(prompt("Digite um número "));
var numeroDois = parseInt(prompt("Digite outro número"));

var numeroTotal = numeroUm + numeroDois;

mostra("O resultado somado de " + numeroUm + numeroDois + "é de " + numeroTotal);


</script>