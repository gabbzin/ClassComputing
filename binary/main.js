// Seleciona todos os elementos com a classe 'bloco'
const blocos = document.querySelectorAll('.bloco');

// Função para alternar o estado do bloco
function alternarBloco(event) {
    const bloco = event.target;

    // Alterna entre as classes 'bloco-aceso' e 'bloco-apagado'
    if (bloco.classList.contains('bloco-aceso')) {
        bloco.classList.remove('bloco-aceso');
        bloco.classList.add('bloco-apagado');
        bloco.textContent = '0'; // Atualiza o texto do bloco
    } else {
        bloco.classList.remove('bloco-apagado');
        bloco.classList.add('bloco-aceso');
        bloco.textContent = '1'; // Atualiza o texto do bloco
    }
}

// Adiciona o evento de clique a todos os blocos
blocos.forEach(bloco => {
    bloco.addEventListener('click', alternarBloco);
});
