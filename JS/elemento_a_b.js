<meta charset="UTF-8">

<script>
    function pulaLinha() {

        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    function a(numero1, numero2) {
        return numero1 + numero2;
    }

    function b(numero1, numero2) {
        return numero1 / numero2;
    }

    function c(numero1, numero2) {
        return numero1 - numero2;
    }

    function d(numero1, numero2) {
        return numero1 * numero2;
    }

    var resultado = a(10,20) + b(30,2) + c(5,5) + d (10,2);

    mostra(resultado);
</script>