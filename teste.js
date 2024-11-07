// Array para armazenar a última resposta de cada pergunta
let respostas = Array(10).fill(null); // Ajuste conforme o número total de perguntas

// Tabela de pontuação para cada pergunta
const tabelaPontuacao = {
    pergunta1: { zeus: 6, poseidon: 3, hades: 1 },
    pergunta2: { zeus: 5, poseidon: 6, hades: 1 },
    pergunta3: { zeus: 2, poseidon: 3, hades: 5 },
    pergunta4: { zeus: 1, poseidon: 3, hades: 4 },
    pergunta5: { zeus: 3, poseidon: 1, hades: 4 },
    // Adicione mais perguntas aqui conforme necessário
};

// Variáveis para controlar a navegação
let perguntasPorPagina = 5;
let paginaAtual = 0;

// Função para mostrar perguntas de acordo com a página
function atualizarExibicaoPerguntas() {
    // Oculta todas as perguntas
    document.querySelectorAll('.pergunta').forEach(pergunta => {
        pergunta.style.display = 'none';
    });

    // Exibe o grupo atual de perguntas
    for (let i = paginaAtual * perguntasPorPagina; i < (paginaAtual + 1) * perguntasPorPagina; i++) {
        const pergunta = document.getElementById(`pergunta${i + 1}`);
        if (pergunta) {
            pergunta.style.display = 'block';
        }
    }

    // Atualiza os botões de navegação
    document.getElementById('botaoAnterior').style.display = paginaAtual === 0 ? 'none' : 'inline-block';
    document.getElementById('botaoProximo').style.display = paginaAtual < Math.ceil(respostas.length / perguntasPorPagina) - 1 ? 'inline-block' : 'none';
    document.getElementById('botaoEnviar').style.display = paginaAtual === Math.ceil(respostas.length / perguntasPorPagina) - 1 ? 'inline-block' : 'none';
}

// Função para registrar resposta
function registrarResposta(perguntaIndex, valor) {
    respostas[perguntaIndex] = valor;
}

// Adiciona event listeners nos botões de cada pergunta
document.querySelectorAll('.pergunta').forEach((perguntaEl, index) => {
    const botoes = perguntaEl.querySelectorAll('button');
    botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            registrarResposta(index, parseInt(botao.value));
        });
    });
});

// Botões de navegação
document.getElementById('botaoProximo').addEventListener('click', () => {
    paginaAtual++;
    atualizarExibicaoPerguntas();
});

document.getElementById('botaoAnterior').addEventListener('click', () => {
    paginaAtual--;
    atualizarExibicaoPerguntas();
});

// Enviar resposta
document.getElementById('botaoEnviar').addEventListener('click', function(event) {
    event.preventDefault();

    // Verifica se todas as perguntas foram respondidas
    if (respostas.includes(null)) {
        alert("Por favor, responda todas as perguntas antes de enviar.");
        return;
    }

    // Inicializa pontuações para cada deus
    let pontuacoes = { zeus: 0, poseidon: 0, hades: 0 };

    // Calcula a pontuação de cada deus com base nas respostas
    respostas.forEach((resposta, index) => {
        const pontuacaoPergunta = tabelaPontuacao[`pergunta${index + 1}`];
        if (pontuacaoPergunta && resposta !== null) {
            Object.keys(pontuacaoPergunta).forEach(deus => {
                if (pontuacaoPergunta[deus] === resposta) {
                    pontuacoes[deus] += 1; // Adiciona 1 ponto para o deus correspondente
                }
            });
        }
    });

    // Identifica o deus com a maior pontuação
    let deusFinal = Object.keys(pontuacoes).reduce((a, b) => pontuacoes[a] > pontuacoes[b] ? a : b);

    // Mostra a resposta final
    document.getElementById('resposta').innerText = `Você é filho de ${deusFinal}`;
});

// Exibe a primeira página de perguntas ao carregar
atualizarExibicaoPerguntas();
