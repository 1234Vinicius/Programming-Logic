<meta charset="UTF-8">

<script>

function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {

    document.write(frase) {
    pulaLinha();

}


var loginCadastrado = "Vinicius123";
var senhaCadastrada = "123";


var loginInformado = prompt("Informe seu login");
var senhaInformada = prompt("Informe sua senha");

if(loginCadastrado == loginInformado && senhaCadastrada == senhaInformada) {

    alert("Bem vindo ao sistema! " + loginInformado );

} else {
    alert("Login inválido. Tente novamente");
}



   

</script>