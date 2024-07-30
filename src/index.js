const level1 = require('../levels/level1');
const level2 = require('../levels/level2')
const level3 = require('../levels/level3');

// Importação do objeto "mainChar" (personagem principal), que será usado e aprimorado durante as fases do jogo
const mainChar = require('../characters/main-character')

// Criação da função assíncrona que apresenta ordenadamente as três fases do jogo
async function game() {
    await level1(mainChar);
    await level2(mainChar);
    await level3(mainChar);
}

// Inicialização do jogo inteiro
game();
