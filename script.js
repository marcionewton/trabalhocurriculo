// Função para validar o formulário e exibir mensagem de confirmação
document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Verifica se todos os campos estão preenchidos
    if (nome && email && mensagem) {
        alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso."); // Alerta de confirmação

        // Limpa os campos do formulário sem recarregar a página
        document.getElementById("contatoForm").reset();
    } else {
        alert("Por favor, preencha todos os campos antes de enviar."); // Alerta caso algum campo esteja vazio
    }
});

// Função para aplicar rolagem suave ao clicar nos links do menu
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Obtém a seção alvo
        const targetSection = document.querySelector(this.getAttribute("href"));
        
        // Rola suavemente até a seção correspondente, ajustando a posição
        const headerOffset = document.querySelector('header').offsetHeight; // Altura do cabeçalho
        const elementPosition = targetSection.getBoundingClientRect().top; // Posição do elemento
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset; // Posição ajustada

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth" // Rolagem suave
        });
    });
});

