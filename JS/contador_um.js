<meta charset="UTF-8">
<script>
    function pulaLinha() {
        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    var contador = 30;

    while(contador <= 60) {

    if(contador == 33) {
        contador = contador + 1;
    }
    if (contador == 35) {
        contador = contador + 1;
    } else {
        mostra(contador);
        contador = contador + 1;
    }
    }

    mostra("FIM");



</script>