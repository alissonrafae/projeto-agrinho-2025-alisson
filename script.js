document.addEventListener('DOMContentLoaded', () => {
    const btnSaibaMais = document.getElementById('btnSaibaMais');

    // Suaviza o scroll ao clicar no botão "Saiba Mais"
    if (btnSaibaMais) {
        btnSaibaMais.addEventListener('click', () => {
            document.getElementById('beneficios').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Exemplo de interatividade: Alerta ao clicar em uma imagem da galeria
    const galeriaImagens = document.querySelectorAll('.galeria-fotos img');
    galeriaImagens.forEach(img => {
        img.addEventListener('click', () => {
            alert(`Você clicou na imagem: ${img.alt}!`);
            // Poderia abrir um modal, expandir a imagem, etc.
        });
    });

    // Você pode adicionar mais interatividade aqui, como:
    // - Um carrossel de imagens na galeria
    // - Um formulário de contato com validação
    // - Efeitos de paralaxe
    // - Animações ao rolar a página (usando Intersection Observer)
});
