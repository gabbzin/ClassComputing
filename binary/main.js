const blocos = document.querySelectorAll('.bloco');
const resultado = document.querySelector('.resultado')

// Função para alternar o estado do bloco
function alternarBloco(event) {
    const bloco = event.target;
    let isLit = bloco.classList.contains('bloco-aceso');

    // Alterna entre as classes 'bloco-aceso' e 'bloco-apagado'
    if (isLit) {
        bloco.classList.remove('bloco-aceso');
        bloco.classList.add('bloco-apagado');
        bloco.textContent = '0'; // Atualiza o texto do bloco
    } else {
        bloco.classList.remove('bloco-apagado');
        bloco.classList.add('bloco-aceso');
        bloco.textContent = '1'; // Atualiza o texto do bloco
    }

    somarResultado()
}

// Adiciona o evento de clique a todos os blocos
blocos.forEach(bloco => {
    bloco.addEventListener('click', alternarBloco);
});

function somarResultado(){
    const valores = [];
    let binario = 1
    let soma = 0;

    blocos.forEach(bloco => {
        valores.push(bloco.textContent);
    });

    valores.slice().reverse().forEach(numero => {
        soma += binario * numero;

        binario *= 2
    });

    resultado.innerHTML = `O resultado é: ${soma}`
}