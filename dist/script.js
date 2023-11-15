var numeroSecreto = 581;
while (chute != numeroSecreto){
    var chute = prompt("Digite um numero entre 1 a 1000");

    if(chute == numeroSecreto){
        alert("Acertou!");
    }
    else if (chute > numeroSecreto){
        alert("Errou! digite um numero menor");
    }

    else{
        alert("Errou! digite um numero maior");
    }
}