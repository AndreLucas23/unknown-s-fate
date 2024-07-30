const prompt = require('prompt-sync')();

// Criação da função recursiva que pede uma resposta com 
// "S" ou "N" do usuário até que ele preencha corretamente
function verifyAnswer(answer) {
    if (answer.toUpperCase() !== 'S' && answer.toUpperCase() !== 'N') {
        return verifyAnswer(prompt('Escreva uma resposta com "S" ou "N": ').toUpperCase())
    }
    return answer
}

module.exports = verifyAnswer
