document.addEventListener('DOMContentLoaded', () => {
    
    // Rolar suavemente ao clicar no botão explorar
    const btnExplorar = document.getElementById('btnExplorar');
    if (btnExplorar) {
        btnExplorar.addEventListener('click', () => {
            const seçãoPilares = document.getElementById('pilares');
            seçãoPilares.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Interatividade simples nos cards de pilares
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const informacaoAdicional = card.getAttribute('data-info');
            alert(`Mais detalhes sobre este pilar:\n\n${informacaoAdicional}`);
        });
    });
});
