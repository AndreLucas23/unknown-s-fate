// Criação da função que cria um delay de tempo específico no terminal
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = delay;
