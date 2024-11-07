let grupoAtual = 1;
const totalGrupos = 17; // Total de grupos

// Inicia exibindo apenas o primeiro grupo quando a página for carregada
document.addEventListener('DOMContentLoaded', function() {
    // Esconde todos os grupos de perguntas
    document.querySelectorAll('.grupo').forEach(function(grupo) {
        grupo.classList.remove('ativo'); // Remove 'ativo' de todos os grupos
    });
    // Exibe o primeiro grupo
    document.getElementById('grupo1').classList.add('ativo'); // Mostra o grupo 1
    // Atualiza os botões de navegação
    atualizarBotoes();
});

// Função para atualizar os botões de "Próximo" e "Enviar"
function atualizarBotoes() {
    document.getElementById('botaoVoltar').style.display = grupoAtual > 1 ? 'inline' : 'none';
    document.getElementById('botaoProximo').style.display = grupoAtual < totalGrupos ? 'inline' : 'none';
    document.getElementById('botaoEnviar').style.display = grupoAtual === totalGrupos ? 'inline' : 'none';
}

// Função para mostrar o próximo grupo de perguntas
function proximoGrupo() {
    document.getElementById('grupo' + grupoAtual).classList.remove('ativo');
    grupoAtual++;
    document.getElementById('grupo' + grupoAtual).classList.add('ativo');
    atualizarBotoes();
}

// Função para voltar ao grupo anterior de perguntas
function voltarGrupo() {
    document.getElementById('grupo' + grupoAtual).classList.remove('ativo');
    grupoAtual--;
    document.getElementById('grupo' + grupoAtual).classList.add('ativo');
    atualizarBotoes();
}

document.getElementById('perguntasFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura todos os inputs de tipo "number" do formulário
    let perguntas = document.querySelectorAll('input[type="number"]');
    let respostas = []; // Array para armazenar as respostas numéricas

    // Pontuação para cada cor (inicialmente zero)
    let pontuacoes = {
        zeus: 0,
        poseidon: 0,
        hades: 0,
        apolo: 0,
        hermes: 0,
        ares: 0,
        afrodite: 0,
        dionisio: 0,
        hefesto: 0,
        atena: 0,
        iris: 0,
        hipinos: 0,
        nemesis: 0,
        hebe: 0,
        tique: 0,
        hecate: 0,
        eolo: 0,
        eros: 0,
    };

    // Tabela de pontuação revisada com 83 perguntas
    const tabelaPontuacao = {
        pergunta1: { zeus: 3, poseidon: 1, hades: 2, apolo: 4, hermes: 2, ares: 1, afrodite: 6, dionisio: 5, hefesto: 1, atena: 2, iris: 4, hipinos: 1, nemesis: 2, hebe: 5, tique: 3, hecate: 3, eolo: 1, eros: 6 },
        pergunta2: { zeus: 2, poseidon: 1, hades: 1, apolo: 4, hermes: 2, ares: 1, afrodite: 6, dionisio: 3, hefesto: 1, atena: 1, iris: 4, hipinos: 2, nemesis: 1, hebe: 5, tique: 2, hecate: 1, eolo: 1, eros: 6 },
        pergunta3: { zeus: 1, poseidon: 2, hades: 1, apolo: 4, hermes: 6, ares: 1, afrodite: 2, dionisio: 5, hefesto: 2, atena: 1, iris: 3, hipinos: 2, nemesis: 1, hebe: 3, tique: 5, hecate: 1, eolo: 1, eros: 6 },
        pergunta4: { zeus: 1, poseidon: 1, hades: 1, apolo: 4, hermes: 3, ares: 1, afrodite: 3, dionisio: 3, hefesto: 1, atena: 1, iris: 5, hipinos: 2, nemesis: 1, hebe: 6, tique: 3, hecate: 1, eolo: 1, eros: 6 },
        pergunta5: { zeus: 2, poseidon: 4, hades: 1, apolo: 3, hermes: 2, ares: 5, afrodite: 3, dionisio: 3, hefesto: 2, atena: 1, iris: 2, hipinos: 1, nemesis: 4, hebe: 2, tique: 2, hecate: 2, eolo: 2, eros: 6 },
        pergunta6: { zeus: 2, poseidon: 2, hades: 1, apolo: 4, hermes: 2, ares: 1, afrodite: 4, dionisio: 3, hefesto: 2, atena: 1, iris: 5, hipinos: 2, nemesis: 2, hebe: 5, tique: 3, hecate: 2, eolo: 1, eros: 6 },
        pergunta7: { zeus: 4, poseidon: 2, hades: 2, apolo: 2, hermes: 2, ares: 1, afrodite: 3, dionisio: 2, hefesto: 4, atena: 6, iris: 3, hipinos: 2, nemesis: 5, hebe: 2, tique: 4, hecate: 5, eolo: 6, eros: 2 },
        pergunta8: { zeus: 5, poseidon: 2, hades: 4, apolo: 2, hermes: 2, ares: 1, afrodite: 3, dionisio: 2, hefesto: 3, atena: 6, iris: 3, hipinos: 2, nemesis: 5, hebe: 2, tique: 3, hecate: 5, eolo: 6, eros: 2 },
        pergunta9: { zeus: 6, poseidon: 3, hades: 4, apolo: 2, hermes: 2, ares: 1, afrodite: 4, dionisio: 1, hefesto: 3, atena: 6, iris: 3, hipinos: 2, nemesis: 6, hebe: 2, tique: 3, hecate: 6, eolo: 6, eros: 2 },
        pergunta10: { zeus: 5, poseidon: 3, hades: 6, apolo: 2, hermes: 2, ares: 3, afrodite: 4, dionisio: 1, hefesto: 4, atena: 6, iris: 3, hipinos: 2, nemesis: 6, hebe: 2, tique: 1, hecate: 6, eolo: 6, eros: 2 },
        pergunta11: { zeus: 5, poseidon: 4, hades: 6, apolo: 3, hermes: 2, ares: 4, afrodite: 3, dionisio: 1, hefesto: 5, atena: 5, iris: 3, hipinos: 2, nemesis: 6, hebe: 2, tique: 1, hecate: 5, eolo: 6, eros: 2 },
        pergunta12: { zeus: 4, poseidon: 5, hades: 4, apolo: 2, hermes: 2, ares: 5, afrodite: 3, dionisio: 1, hefesto: 3, atena: 3, iris: 1, hipinos: 1, nemesis: 6, hebe: 1, tique: 2, hecate: 6, eolo: 4, eros: 2 },
        pergunta13: { zeus: 1, poseidon: 1, hades: 3, apolo: 2, hermes: 1, ares: 1, afrodite: 2, dionisio: 2, hefesto: 1, atena: 1, iris: 3, hipinos: 2, nemesis: 1, hebe: 4, tique: 2, hecate: 6, eolo: 1, eros: 3 },
        pergunta14: { zeus: 4, poseidon: 3, hades: 6, apolo: 1, hermes: 2, ares: 6, afrodite: 2, dionisio: 2, hefesto: 6, atena: 4, iris: 2, hipinos: 3, nemesis: 3, hebe: 1, tique: 3, hecate: 6, eolo: 5, eros: 1 },
        pergunta15: { zeus: 4, poseidon: 3, hades: 6, apolo: 2, hermes: 2, ares: 5, afrodite: 2, dionisio: 3, hefesto: 6, atena: 5, iris: 2, hipinos: 5, nemesis: 4, hebe: 1, tique: 3, hecate: 6, eolo: 4, eros: 1 },
        pergunta16: { zeus: 5, poseidon: 3, hades: 5, apolo: 3, hermes: 3, ares: 2, afrodite: 3, dionisio: 3, hefesto: 2, atena: 4, iris: 4, hipinos: 3, nemesis: 5, hebe: 1, tique: 3, hecate: 6, eolo: 2, eros: 4 },
        pergunta17: { zeus: 2, poseidon: 3, hades: 1, apolo: 2, hermes: 3, ares: 3, afrodite: 2, dionisio: 4, hefesto: 2, atena: 1, iris: 2, hipinos: 1, nemesis: 2, hebe: 3, tique: 6, hecate: 2, eolo: 1, eros: 3 },
        pergunta18: { zeus: 2, poseidon: 2, hades: 1, apolo: 5, hermes: 4, ares: 2, afrodite: 2, dionisio: 3, hefesto: 2, atena: 1, iris: 2, hipinos: 1, nemesis: 2, hebe: 3, tique: 6, hecate: 2, eolo: 1, eros: 4 },
        pergunta19: { zeus: 4, poseidon: 4, hades: 6, apolo: 2, hermes: 2, ares: 6, afrodite: 2, dionisio: 2, hefesto: 3, atena: 5, iris: 2, hipinos: 2, nemesis: 4, hebe: 1, tique: 6, hecate: 2, eolo: 1, eros: 3 },
        pergunta21: { zeus: 5, poseidon: 3, hades: 3, apolo: 2, hermes: 2, ares: 3, afrodite: 4, dionisio: 1, hefesto: 4, atena: 6, iris: 3, hipinos: 3, nemesis: 5, hebe: 3, tique: 6, hecate: 2, eolo: 3, eros: 3 },
        pergunta23: { zeus: 3, poseidon: 4, hades: 3, apolo: 3, hermes: 6, ares: 2, afrodite: 3, dionisio: 4, hefesto: 5, atena: 4, iris: 3, hipinos: 3, nemesis: 5, hebe: 3, tique: 6, hecate: 3, eolo: 3, eros: 5 },
        pergunta24: { zeus: 3, poseidon: 2, hades: 2, apolo: 3, hermes: 3, ares: 2, afrodite: 3, dionisio: 3, hefesto: 2, atena: 4, iris: 5, hipinos: 3, nemesis: 4, hebe: 6, tique: 3, hecate: 2, eolo: 3, eros: 5 },
        pergunta25: { zeus: 3, poseidon: 3, hades: 1, apolo: 2, hermes: 4, ares: 2, afrodite: 2, dionisio: 4, hefesto: 2, atena: 2, iris: 5, hipinos: 2, nemesis: 1, hebe: 6, tique: 2, hecate: 2, eolo: 1, eros: 5 },
        pergunta26: { zeus: 3, poseidon: 3, hades: 1, apolo: 4, hermes: 4, ares: 2, afrodite: 4, dionisio: 5, hefesto: 3, atena: 2, iris: 5, hipinos: 3, nemesis: 1, hebe: 6, tique: 4, hecate: 2, eolo: 2, eros: 5 },
        pergunta27: { zeus: 2, poseidon: 1, hades: 1, apolo: 3, hermes: 2, ares: 1, afrodite: 2, dionisio: 3, hefesto: 3, atena: 1, iris: 4, hipinos: 5, nemesis: 1, hebe: 6, tique: 4, hecate: 2, eolo: 1, eros: 4 },
        pergunta28: { zeus: 2, poseidon: 1, hades: 1, apolo: 3, hermes: 2, ares: 1, afrodite: 2, dionisio: 3, hefesto: 3, atena: 1, iris: 4, hipinos: 3, nemesis: 1, hebe: 6, tique: 4, hecate: 2, eolo: 1, eros: 4 },
        pergunta29: { zeus: 2, poseidon: 1, hades: 1, apolo: 3, hermes: 3, ares: 1, afrodite: 3, dionisio: 3, hefesto: 1, atena: 1, iris: 3, hipinos: 1, nemesis: 1, hebe: 6, tique: 3, hecate: 2, eolo: 1, eros: 3 },
        pergunta30: { zeus: 5, poseidon: 2, hades: 4, apolo: 3, hermes: 3, ares: 2, afrodite: 3, dionisio: 2, hefesto: 3, atena: 6, iris: 3, hipinos: 3, nemesis: 6, hebe: 6, tique: 3, hecate: 2, eolo: 3, eros: 3 },
        pergunta31: { zeus: 4, poseidon: 4, hades: 2, apolo: 2, hermes: 3, ares: 6, afrodite: 3, dionisio: 2, hefesto: 3, atena: 3, iris: 3, hipinos: 3, nemesis: 6, hebe: 1, tique: 3, hecate: 3, eolo: 4, eros: 2 },
        pergunta32: { zeus: 4, poseidon: 4, hades: 2, apolo: 5, hermes: 3, ares: 2, afrodite: 5, dionisio: 4, hefesto: 3, atena: 4, iris: 5, hipinos: 3, nemesis: 6, hebe: 6, tique: 4, hecate: 2, eolo: 3, eros: 5 },
        pergunta33: { zeus: 5, poseidon: 4, hades: 4, apolo: 2, hermes: 2, ares: 4, afrodite: 2, dionisio: 1, hefesto: 3, atena: 4, iris: 3, hipinos: 3, nemesis: 6, hebe: 2, tique: 1, hecate: 2, eolo: 4, eros: 1 },
        pergunta34: { zeus: 5, poseidon: 3, hades: 3, apolo: 4, hermes: 4, ares: 2, afrodite: 4, dionisio: 3, hefesto: 2, atena: 5, iris: 6, hipinos: 4, nemesis: 6, hebe: 6, tique: 4, hecate: 4, eolo: 4, eros: 4 },
        pergunta35: { zeus: 2, poseidon: 2, hades: 4, apolo: 3, hermes: 2, ares: 1, afrodite: 5, dionisio: 3, hefesto: 3, atena: 5, iris: 6, hipinos: 6, nemesis: 5, hebe: 6, tique: 4, hecate: 3, eolo: 4, eros: 3 },
        pergunta36: { zeus: 1, poseidon: 2, hades: 2, apolo: 3, hermes: 3, ares: 4, afrodite: 3, dionisio: 3, hefesto: 2, atena: 1, iris: 2, hipinos: 6, nemesis: 2, hebe: 3, tique: 3, hecate: 3, eolo: 3, eros: 3 },
        pergunta37: { zeus: 1, poseidon: 2, hades: 2, apolo: 3, hermes: 4, ares: 1, afrodite: 3, dionisio: 3, hefesto: 2, atena: 1, iris: 4, hipinos: 6, nemesis: 2, hebe: 4, tique: 3, hecate: 3, eolo: 1, eros: 3 },
        pergunta38: { zeus: 1, poseidon: 2, hades: 2, apolo: 3, hermes: 4, ares: 1, afrodite: 2, dionisio: 3, hefesto: 2, atena: 1, iris: 4, hipinos: 6, nemesis: 1, hebe: 4, tique: 2, hecate: 2, eolo: 1, eros: 3 },
        pergunta39: { zeus: 4, poseidon: 2, hades: 6, apolo: 3, hermes: 2, ares: 1, afrodite: 3, dionisio: 2, hefesto: 5, atena: 4, iris: 4, hipinos: 6, nemesis: 3, hebe: 4, tique: 2, hecate: 5, eolo: 4, eros: 3 },
        pergunta40: { zeus: 6, poseidon: 3, hades: 5, apolo: 3, hermes: 3, ares: 2, afrodite: 3, dionisio: 2, hefesto: 5, atena: 5, iris: 6, hipinos: 6, nemesis: 3, hebe: 5, tique: 2, hecate: 5, eolo: 4, eros: 5 },
        pergunta41: { zeus: 4, poseidon: 3, hades: 2, apolo: 3, hermes: 3, ares: 3, afrodite: 3, dionisio: 5, hefesto: 3, atena: 5, iris: 6, hipinos: 4, nemesis: 4, hebe: 6, tique: 4, hecate: 4, eolo: 3, eros: 5 },
        pergunta42: { zeus: 4, poseidon: 3, hades: 2, apolo: 3, hermes: 3, ares: 1, afrodite: 3, dionisio: 2, hefesto: 2, atena: 5, iris: 5, hipinos: 4, nemesis: 3, hebe: 6, tique: 4, hecate: 3, eolo: 1, eros: 3 },
        pergunta43: { zeus: 4, poseidon: 3, hades: 2, apolo: 4, hermes: 3, ares: 1, afrodite: 4, dionisio: 4, hefesto: 3, atena: 5, iris: 6, hipinos: 4, nemesis: 3, hebe: 6, tique: 3, hecate: 3, eolo: 2, eros: 1 },
        pergunta44: { zeus: 4, poseidon: 2, hades: 2, apolo: 4, hermes: 6, ares: 4, afrodite: 4, dionisio: 6, hefesto: 6, atena: 5, iris: 6, hipinos: 6, nemesis: 5, hebe: 6, tique: 3, hecate: 4, eolo: 3, eros: 4 },
        pergunta45: { zeus: 3, poseidon: 3, hades: 6, apolo: 2, hermes: 1, ares: 2, afrodite: 2, dionisio: 1, hefesto: 6, atena: 3, iris: 2, hipinos: 6, nemesis: 4, hebe: 1, tique: 3, hecate: 4, eolo: 5, eros: 1 },
        pergunta46: { zeus: 5, poseidon: 4, hades: 6, apolo: 2, hermes: 2, ares: 6, afrodite: 2, dionisio: 1, hefesto: 5, atena: 6, iris: 2, hipinos: 4, nemesis: 4, hebe: 1, tique: 3, hecate: 4, eolo: 5, eros: 1 },
        pergunta47: { zeus: 2, poseidon: 2, hades: 6, apolo: 2, hermes: 1, ares: 4, afrodite: 2, dionisio: 1, hefesto: 5, atena: 3, iris: 2, hipinos: 6, nemesis: 4, hebe: 1, tique: 2, hecate: 3, eolo: 5, eros: 1 },
        pergunta48: { zeus: 4, poseidon: 2, hades: 6, apolo: 2, hermes: 1, ares: 3, afrodite: 2, dionisio: 2, hefesto: 5, atena: 6, iris: 2, hipinos: 6, nemesis: 4, hebe: 5, tique: 2, hecate: 3, eolo: 5, eros: 2 },
        pergunta49: { zeus: 4, poseidon: 2, hades: 1, apolo: 4, hermes: 4, ares: 3, afrodite: 6, dionisio: 5, hefesto: 1, atena: 3, iris: 2, hipinos: 1, nemesis: 3, hebe: 3, tique: 4, hecate: 2, eolo: 1, eros: 6 },
        pergunta50: { zeus: 3, poseidon: 3, hades: 1, apolo: 4, hermes: 4, ares: 3, afrodite: 6, dionisio: 6, hefesto: 1, atena: 3, iris: 4, hipinos: 1, nemesis: 3, hebe: 4, tique: 4, hecate: 2, eolo: 1, eros: 6 },
        pergunta51: { zeus: 1, poseidon: 3, hades: 2, apolo: 4, hermes: 6, ares: 3, afrodite: 3, dionisio: 6, hefesto: 2, atena: 1, iris: 2, hipinos: 6, nemesis: 1, hebe: 4, tique: 3, hecate: 2, eolo: 1, eros: 5 },
        pergunta52: { zeus: 3, poseidon: 4, hades: 2, apolo: 4, hermes: 6, ares: 5, afrodite: 3, dionisio: 6, hefesto: 2, atena: 2, iris: 2, hipinos: 1, nemesis: 3, hebe: 4, tique: 4, hecate: 2, eolo: 2, eros: 4 },
        pergunta53: { zeus: 1, poseidon: 3, hades: 1, apolo: 4, hermes: 6, ares: 2, afrodite: 4, dionisio: 6, hefesto: 2, atena: 2, iris: 2, hipinos: 1, nemesis: 2, hebe: 3, tique: 4, hecate: 2, eolo: 2, eros: 4 },
        pergunta54: { zeus: 3, poseidon: 3, hades: 1, apolo: 5, hermes: 6, ares: 1, afrodite: 4, dionisio: 6, hefesto: 2, atena: 4, iris: 5, hipinos: 2, nemesis: 4, hebe: 6, tique: 3, hecate: 2, eolo: 2, eros: 5 },
        pergunta55: { zeus: 4, poseidon: 5, hades: 1, apolo: 5, hermes: 6, ares: 1, afrodite: 3, dionisio: 6, hefesto: 3, atena: 4, iris: 6, hipinos: 3, nemesis: 5, hebe: 6, tique: 4, hecate: 2, eolo: 2, eros: 5 },
        pergunta56: { zeus: 4, poseidon: 5, hades: 1, apolo: 5, hermes: 6, ares: 1, afrodite: 4, dionisio: 5, hefesto: 1, atena: 3, iris: 4, hipinos: 1, nemesis: 2, hebe: 4, tique: 3, hecate: 3, eolo: 3, eros: 4 },
        pergunta57: { zeus: 4, poseidon: 5, hades: 1, apolo: 5, hermes: 6, ares: 1, afrodite: 5, dionisio: 6, hefesto: 2, atena: 4, iris: 6, hipinos: 2, nemesis: 3, hebe: 6, tique: 4, hecate: 3, eolo: 3, eros: 5 },
        pergunta58: { zeus: 6, poseidon: 4, hades: 5, apolo: 4, hermes: 6, ares: 2, afrodite: 5, dionisio: 4, hefesto: 4, atena: 6, iris: 4, hipinos: 2, nemesis: 6, hebe: 4, tique: 5, hecate: 5, eolo: 5, eros: 4 },
        pergunta59: { zeus: 5, poseidon: 4, hades: 5, apolo: 4, hermes: 6, ares: 2, afrodite: 4, dionisio: 4, hefesto: 5, atena: 6, iris: 4, hipinos: 2, nemesis: 6, hebe: 4, tique: 5, hecate: 5, eolo: 5, eros: 4 },
        pergunta60: { zeus: 2, poseidon: 3, hades: 2, apolo: 4, hermes: 3, ares: 1, afrodite: 6, dionisio: 5, hefesto: 1, atena: 2, iris: 3, hipinos: 1, nemesis: 3, hebe: 4, tique: 3, hecate: 2, eolo: 2, eros: 6 },
        pergunta61: { zeus: 6, poseidon: 4, hades: 3, apolo: 4, hermes: 4, ares: 5, afrodite: 6, dionisio: 6, hefesto: 2, atena: 6, iris: 4, hipinos: 3, nemesis: 6, hebe: 4, tique: 4, hecate: 5, eolo: 5, eros: 6 },
        pergunta62: { zeus: 4, poseidon: 4, hades: 1, apolo: 5, hermes: 4, ares: 3, afrodite: 6, dionisio: 6, hefesto: 2, atena: 5, iris: 5, hipinos: 3, nemesis: 4, hebe: 6, tique: 4, hecate: 5, eolo: 2, eros: 6 },
        pergunta63: { zeus: 3, poseidon: 2, hades: 1, apolo: 4, hermes: 3, ares: 1, afrodite: 6, dionisio: 5, hefesto: 2, atena: 5, iris: 2, hipinos: 1, nemesis: 3, hebe: 2, tique: 2, hecate: 3, eolo: 2, eros: 5 },
        pergunta64: { zeus: 2, poseidon: 3, hades: 2, apolo: 4, hermes: 5, ares: 1, afrodite: 3, dionisio: 3, hefesto: 6, atena: 5, iris: 2, hipinos: 1, nemesis: 3, hebe: 1, tique: 2, hecate: 3, eolo: 2, eros: 2 },
        pergunta65: { zeus: 4, poseidon: 3, hades: 2, apolo: 3, hermes: 3, ares: 1, afrodite: 3, dionisio: 2, hefesto: 6, atena: 6, iris: 5, hipinos: 1, nemesis: 3, hebe: 5, tique: 2, hecate: 3, eolo: 3, eros: 4 },
        pergunta66: { zeus: 6, poseidon: 4, hades: 2, apolo: 4, hermes: 4, ares: 3, afrodite: 3, dionisio: 2, hefesto: 6, atena: 6, iris: 5, hipinos: 2, nemesis: 5, hebe: 5, tique: 2, hecate: 4, eolo: 4, eros: 4 },
        pergunta67: { zeus: 2, poseidon: 4, hades: 2, apolo: 6, hermes: 4, ares: 1, afrodite: 4, dionisio: 5, hefesto: 2, atena: 4, iris: 5, hipinos: 3, nemesis: 3, hebe: 5, tique: 2, hecate: 4, eolo: 3, eros: 5 },
        pergunta68: { zeus: 4, poseidon: 5, hades: 1, apolo: 6, hermes: 5, ares: 3, afrodite: 4, dionisio: 5, hefesto: 3, atena: 4, iris: 5, hipinos: 3, nemesis: 3, hebe: 6, tique: 2, hecate: 4, eolo: 3, eros: 5 },
        pergunta69: { zeus: 5, poseidon: 4, hades: 2, apolo: 6, hermes: 5, ares: 3, afrodite: 4, dionisio: 6, hefesto: 3, atena: 4, iris: 5, hipinos: 2, nemesis: 2, hebe: 6, tique: 2, hecate: 3, eolo: 2, eros: 5 },
        pergunta70: { zeus: 3, poseidon: 4, hades: 3, apolo: 6, hermes: 6, ares: 2, afrodite: 3, dionisio: 4, hefesto: 4, atena: 6, iris: 3, hipinos: 2, nemesis: 3, hebe: 5, tique: 4, hecate: 3, eolo: 2, eros: 3 },
        pergunta71: { zeus: 3, poseidon: 2, hades: 4, apolo: 4, hermes: 3, ares: 1, afrodite: 3, dionisio: 2, hefesto: 3, atena: 6, iris: 4, hipinos: 4, nemesis: 4, hebe: 4, tique: 4, hecate: 6, eolo: 3, eros: 4 },
        pergunta72: { zeus: 6, poseidon: 3, hades: 5, apolo: 3, hermes: 3, ares: 4, afrodite: 3, dionisio: 2, hefesto: 5, atena: 6, iris: 2, hipinos: 3, nemesis: 6, hebe: 1, tique: 3, hecate: 5, eolo: 6, eros: 3 },
        pergunta73: { zeus: 6, poseidon: 3, hades: 3, apolo: 4, hermes: 3, ares: 5, afrodite: 2, dionisio: 1, hefesto: 1, atena: 6, iris: 2, hipinos: 1, nemesis: 5, hebe: 1, tique: 4, hecate: 5, eolo: 5, eros: 3 },
        pergunta74: { zeus: 2, poseidon: 3, hades: 3, apolo: 5, hermes: 4, ares: 6, afrodite: 3, dionisio: 4, hefesto: 2, atena: 1, iris: 3, hipinos: 2, nemesis: 1, hebe: 3, tique: 4, hecate: 3, eolo: 3, eros: 6 },
        pergunta75: { zeus: 3, poseidon: 4, hades: 3, apolo: 2, hermes: 4, ares: 6, afrodite: 3, dionisio: 4, hefesto: 2, atena: 1, iris: 1, hipinos: 1, nemesis: 3, hebe: 1, tique: 2, hecate: 3, eolo: 1, eros: 2 },
        pergunta76: { zeus: 2, poseidon: 4, hades: 1, apolo: 1, hermes: 2, ares: 6, afrodite: 1, dionisio: 2, hefesto: 2, atena: 1, iris: 1, hipinos: 1, nemesis: 2, hebe: 1, tique: 1, hecate: 1, eolo: 3, eros: 2 },
        pergunta77: { zeus: 2, poseidon: 4, hades: 3, apolo: 2, hermes: 3, ares: 6, afrodite: 3, dionisio: 2, hefesto: 4, atena: 5, iris: 1, hipinos: 2, nemesis: 5, hebe: 1, tique: 3, hecate: 2, eolo: 4, eros: 2 },
        pergunta78: { zeus: 6, poseidon: 4, hades: 2, apolo: 4, hermes: 4, ares: 6, afrodite: 5, dionisio: 3, hefesto: 5, atena: 5, iris: 6, hipinos: 4, nemesis: 4, hebe: 6, tique: 3, hecate: 2, eolo: 4, eros: 6 },
        pergunta79: { zeus: 6, poseidon: 6, hades: 4, apolo: 4, hermes: 2, ares: 3, afrodite: 3, dionisio: 2, hefesto: 5, atena: 6, iris: 5, hipinos: 4, nemesis: 4, hebe: 6, tique: 4, hecate: 3, eolo: 4, eros: 5 },
        pergunta80: { zeus: 5, poseidon: 6, hades: 4, apolo: 5, hermes: 3, ares: 4, afrodite: 4, dionisio: 3, hefesto: 4, atena: 5, iris: 6, hipinos: 3, nemesis: 4, hebe: 6, tique: 4, hecate: 3, eolo: 1, eros: 5 },
        pergunta81: { zeus: 5, poseidon: 6, hades: 3, apolo: 5, hermes: 3, ares: 6, afrodite: 5, dionisio: 4, hefesto: 3, atena: 6, iris: 3, hipinos: 2, nemesis: 5, hebe: 1, tique: 3, hecate: 3, eolo: 5, eros: 2 },
        pergunta82: { zeus: 2, poseidon: 6, hades: 4, apolo: 5, hermes: 4, ares: 1, afrodite: 3, dionisio: 4, hefesto: 1, atena: 2, iris: 3, hipinos: 2, nemesis: 2, hebe: 1, tique: 3, hecate: 3, eolo: 2, eros: 4 },
        pergunta83: { zeus: 4, poseidon: 6, hades: 4, apolo: 5, hermes: 4, ares: 1, afrodite: 3, dionisio: 5, hefesto: 3, atena: 2, iris: 4, hipinos: 2, nemesis: 2, hebe: 6, tique: 3, hecate: 3, eolo: 1, eros: 5 },
        pergunta84: { zeus: 6, poseidon: 3, hades: 2, apolo: 3, hermes: 2, ares: 4, afrodite: 2, dionisio: 1, hefesto: 2, atena: 6, iris: 2, hipinos: 1, nemesis: 4, hebe: 2, tique: 3, hecate: 3, eolo: 1, eros: 3 },
        pergunta85: { zeus: 6, poseidon: 4, hades: 3, apolo: 4, hermes: 5, ares: 6, afrodite: 2, dionisio: 3, hefesto: 2, atena: 6, iris: 2, hipinos: 1, nemesis: 5, hebe: 2, tique: 5, hecate: 4, eolo: 5, eros: 3 },
        pergunta86: { zeus: 6, poseidon: 4, hades: 5, apolo: 4, hermes: 3, ares: 6, afrodite: 2, dionisio: 4, hefesto: 2, atena: 6, iris: 2, hipinos: 1, nemesis: 3, hebe: 1, tique: 3, hecate: 4, eolo: 5, eros: 3 },
        
    };

    // Itera sobre os campos de perguntas e armazena as respostas no array
    perguntas.forEach(function(pergunta) {
        respostas.push(parseInt(pergunta.value));
    });

    // Itera sobre as respostas e aplica a tabela de pontuação
    respostas.forEach(function(resposta, index) {
        let perguntaChave = `pergunta${index + 1}`; // Cria a chave da pergunta (ex: "pergunta1")
        let pontos = tabelaPontuacao[perguntaChave]; // Recupera a tabela de pontos correspondente à pergunta


        // Agora, só atribuímos pontos às cores que têm o valor correspondente à resposta do usuário
        if (pontos && typeof pontos === 'object') {
            Object.keys(pontos).forEach(function(cor) {
                if (pontos[cor] === resposta) {
                    pontuacoes[cor] += 1; // Somamos os pontos apenas se coincidir com a resposta
                }
            });
        } else {
            console.error('pontos não é um objeto ou está indefinido:', pontos);
        } 
    });

    // Exibir pontuações de depuração (opcional: para você ver o que está acontecendo)
    console.log("Pontuações finais:", pontuacoes);

    // Descobrir a cor com a maior pontuação
    let corFinal = Object.keys(pontuacoes).reduce((a, b) => pontuacoes[a] > pontuacoes[b] ? a : b);

    // Exibir a resposta final
    document.getElementById('resposta').innerText = `Você é filho de ${corFinal}`;

    let el = document.getElementById('fundo_colorido');
    el.classList.remove('fundo_cinza');
    el.classList.add(`fundo_${corFinal}`);
    

});

// Inicializa os botões
atualizarBotoes();
