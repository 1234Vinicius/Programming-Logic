<Meta charset="UTF8">



<script>


function pulaLinha() {

    document.write("<br>");
    document.write("<br>");

}


function mostra(frase) {

    document.write(frase);
    pulaLinha();

}

function somatresnumeros (numeroUm, numeroDois, numeroTres) {

    mostra("A soma dos três números  é de: " + (numeroUm + numeroDois + numeroTres));


}


somatresnumeros(100,90,22);


</script>