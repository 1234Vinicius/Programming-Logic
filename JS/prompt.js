<Meta charset="UTF-8">



<script>
    
function pulaLinha() {

    document.write("<br>");
    document.write("<br>");

}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}


var numero1 = prompt("Digite um número ");
var numero2 = prompt("Digite outro número");

mostra(" O valor de " + numero1 + " vezes " + numero2 + " é de " + (numero1 * numero2));




</script>