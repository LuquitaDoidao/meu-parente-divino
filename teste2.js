// Array para armazenar a última resposta de cada pergunta
let respostas = Array(86).fill(null); // Ajuste conforme o número total de perguntas

// Tabela de pontuação para cada pergunta
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
    }

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



function mudarCor(valor) {
    // Seleciona todos os botões da pergunta atual
    const botoes = document.querySelectorAll('#pergunta1 button');

    // Define a cor "podre" para todos os botões
    botoes.forEach(botao => {
        botao.classList.remove("amarelo", "laranja", "rosa", "lilas", "roxo-claro", "roxo-escuro");
        if (botao.value === "1") botao.classList.add("amarelo-podre");
        else if (botao.value === "2") botao.classList.add("laranja-podre");
        else if (botao.value === "3") botao.classList.add("rosa-podre");
        else if (botao.value === "4") botao.classList.add("lilas-podre");
        else if (botao.value === "5") botao.classList.add("roxo-claro-podre");
        else if (botao.value === "6") botao.classList.add("roxo-escuro-podre");
    });

    // Agora, altera apenas o botão clicado para a cor normal específica
    const botaoClicado = document.querySelector(`#pergunta1 button[value="${valor}"]`);
    botaoClicado.classList.remove(`${botaoClicado.classList[1]}`);

    // Adiciona a cor normal correspondente
    if (valor === "1") botaoClicado.classList.add("amarelo");
    else if (valor === "2") botaoClicado.classList.add("laranja");
    else if (valor === "3") botaoClicado.classList.add("rosa");
    else if (valor === "4") botaoClicado.classList.add("lilas");
    else if (valor === "5") botaoClicado.classList.add("roxo-claro");
    else if (valor === "6") botaoClicado.classList.add("roxo-escuro");
}




