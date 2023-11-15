var numeroSecreto = parseInt(Math.random() * 1001);
var tentativas = 10;

while (tentativas > 0) {
    var chute = prompt("Adivinhe um numero entre 0 a 1000 com 10 tentativas. Digite um número");
    tentativas--; //pós cada palpite feito pelo usuário, o número de tentativas restantes é reduzido em 1.

    if (chute == numeroSecreto) {
        alert("Acertou!");
        break; // Para encerrar o loop se o usuário acertou
    } else if (chute > numeroSecreto) {
        alert("Errou! O " + chute + " é maior do que o número secreto. Tentativas restantes: " + tentativas);
    } else {
        alert("Errou! O " + chute + " é menor do que o número secreto. Tentativas restantes: " + tentativas);
    }
}

// Exibir a resposta correta ao final
if (tentativas === 0 && chute != numeroSecreto) {
    alert("Suas tentativas acabaram. O número secreto era: " + numeroSecreto);
}
