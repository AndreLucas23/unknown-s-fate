const delay = require('../delay')
const prompt = require('prompt-sync')();

// Criação da função que exibe os status de cada personagem
// de uma luta antes das ações de turno
async function statusAndAction (mainChar, enemy) {
    console.log('-------------------');
    console.log('Seus status:');
    mainChar.showStatus();
    await delay(1500);
    console.log('-------------------');
    console.log(`Status de ${enemy.name}:`);
    enemy.showStatus();
    await delay(1500); 

    console.log('-------------------');
    console.log('É o seu turno.');
    console.log();
    console.log('Ações:');
    console.log('1) Ataque fraco');
    console.log('2) Ataque médio');
    console.log('3) Ataque forte');
    console.log('4) Usar Poção De Vida Pequena');
    console.log('5) Usar Poção De Força Pequena');

    return +prompt('Escolha uma ação pelo número: ');
}

module.exports = statusAndAction;
