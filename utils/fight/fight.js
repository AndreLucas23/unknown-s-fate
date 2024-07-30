const delay = require('../delay');
const statusAndAction = require('./fight-status');
const processAction = require('./process-fight-action');
const resetFight = require('./reset-fight');

// Criação da função de lutas gerais, a não ser que possuam especificidades
// próprias e sejam representadas por outras funções
async function fight(mainChar, enemy) {
    // Declaração das variáveis "temp" usadas para repôr as poções antes de cada tentativa do jogador
    const tempLifePotion = mainChar.inventory.find(item => item.name === 'Poção De Vida Pequena');
    const tempStrengthPotion = mainChar.inventory.find(item => item.name === 'Poção De Força Pequena');

    // Criação do loop while que sinaliza os turnos da luta
    while (true) {
        console.log();
        let action = await statusAndAction(mainChar, enemy);
        console.log();

        processAction(action, mainChar, enemy);

        console.log();
        await delay(1500); 

        // Caso os pontos de vida do inimigos cheguem a zero,
        // ele é derrotado
        if (enemy.hitPoints <= 0) {
            process.stdout.write(`Você derrotou ${enemy.name}!`);
            return true;
        }

        // De 1 a 9, um número aleatório é escolhido e definirá o
        // golpe do inimigo
        let randAtkNumber = Math.floor(Math.random() * 10) + 1

        // Os ataques do inimigo são definidos por uma probabilidade
        // geral de cada golpe possível
        if (randAtkNumber >= 1 && randAtkNumber <= 3) {
            let dmg = Math.floor(enemy.weakAttack() - mainChar.armorPoints);
            mainChar.hitPoints -= dmg;

            console.log(`Sem perder tempo, ${enemy.name} aplica um ataque rápido e fraco, o qual causa ${dmg} de dano direto!`);
        } else if (randAtkNumber >= 4 && randAtkNumber <= 5) {
            let dmg = Math.floor(enemy.mediumAttack() - mainChar.armorPoints);
            mainChar.hitPoints -= dmg;

            console.log(`Em contrapartida, ${enemy.name} estoca seu ataque em potência média e realiza ${dmg} pontos de dano!`);
        } else if (randAtkNumber === 6) {
            let dmg = Math.floor(enemy.strongAttack() - mainChar.armorPoints);
            mainChar.hitPoints -= dmg;

            console.log(`${enemy.name}, em um tom agressivo, usa um golpe forte, que surpreende com ${dmg} de dano bruto!`);
        } else {
            console.log(`${enemy.name} desfere um poderoso golpe, mas você consegue desviar.`);
        }

        // Caso os pontos de vida do personagem principal chegem a zero,
        // o jogador é derrotado
        if (mainChar.hitPoints <= 0) {
            resetFight(mainChar, tempLifePotion, tempStrengthPotion);

            console.log(`Você foi derrotado por ${enemy.name}!`);
            return false;
        }
        
    }
}

module.exports = fight;
