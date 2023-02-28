function calc() {
    let soma = 0;
    let N1 = 0;
    let N2 = 1;
    let value = prompt("Digite um número:");
    
    while (value > soma) {
        soma = N1 + N2;
        N1 = N2;
        N2 = soma;
    }
    
    if (value == 0 || value == 1) {
        alert("O número faz parte da sequência de Fibonacci.");
    } else if (value == soma) {
        alert("O número faz parte da sequência de Fibonacci.");
    } else {
        alert("O número digitado não faz parte da sequência de Fibonacci.");
    }
}



