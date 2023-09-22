// Aguarda até que todo o conteúdo do DOM esteja carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão "Voltar ao topo" pelo seu ID
    const botaoVoltarAoTopo = document.getElementById("backToTop");

    // Adiciona um ouvinte de evento de rolagem à janela
    window.onscroll = function() {
        // Verifica se a página foi rolada para baixo mais de 20 pixels
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // Mostra o botão "Voltar ao topo"
            botaoVoltarAoTopo.style.display = "block";
        } else {
            // Esconde o botão "Voltar ao topo"
            botaoVoltarAoTopo.style.display = "none";
        }
    };

    // Adiciona um ouvinte de evento de clique ao botão "Voltar ao topo"
    botaoVoltarAoTopo.addEventListener("click", function() {
        // Rola suavemente para o topo da página
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Seleciona todos os links de navegação que têm um href começando com "#"
    const linksNavegacao = document.querySelectorAll('.navbar-nav a[href^="#"]');
  
    // Adiciona um ouvinte de evento de clique a cada link de navegação
    linksNavegacao.forEach(link => {
        link.addEventListener("click", function(e) {
            // Previne o comportamento padrão do link
            e.preventDefault();
            // Pega o valor do atributo href e remove o "#" inicial
            const destino = this.getAttribute("href").substring(1);
            // Seleciona o elemento alvo pelo seu ID
            const elementoAlvo = document.getElementById(destino);
            // Rola suavemente até o elemento alvo
            elementoAlvo.scrollIntoView({ behavior: "smooth" });
        });
    });
});

// Função para exibir o contador regressivo
function mostrarContagemRegressiva(dataFinal) {
    // Inicia um temporizador que se repete a cada 1 segundo (1000 ms)
    const temporizador = setInterval(function () {
      // Obtém o momento atual em milissegundos
      const agora = new Date().getTime();
      // Calcula a diferença entre o momento de término e o momento atual
      const distancia = dataFinal - agora;
  
      // Calcula os dias, horas, minutos e segundos restantes
      const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  
      // Atualiza os elementos HTML com os valores calculados
      document.getElementById("dias").innerHTML = dias;
      document.getElementById("horas").innerHTML = horas;
      document.getElementById("minutos").innerHTML = minutos;
      document.getElementById("segundos").innerHTML = segundos;
  
      // Verifica se o contador chegou a zero
      if (distancia < 0) {
        // Para o temporizador
        clearInterval(temporizador);
        // Atualiza o texto do contador
        document.getElementById("contagemRegressiva").innerHTML = "Temporada Iniciada!";
      }
    }, 1000);
}
  
// Data e hora de término do contador (30 de setembro de 2023, 21:00:00 GMT-0300)
const dataFinal = new Date("Sep 30, 2023 21:00:00 GMT-0300").getTime();
  
// Inicia a contagem regressiva
mostrarContagemRegressiva(dataFinal);
