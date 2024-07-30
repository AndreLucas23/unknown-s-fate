const delay = require('../delay');
const statusAndAction = require('./fight-status');
const processAction = require('./process-fight-action');
const resetFight = require('./reset-fight');

// Criação da função da luta contra O Rei
async function kingFight(mainChar, enemy) {
    // Declaração das variáveis usadas nos golpes especiais do Rei
    let poisonCount = 0;
    let stuned = false;

    const tempLifePotion = mainChar.inventory.find(item => item.name === 'Poção De Vida Pequena');
    const tempStrengthPotion = mainChar.inventory.find(item => item.name === 'Poção De Força Pequena');

    while (true) {
        // Caso esteja atordoado, não será possível realizar ações
        if (stuned) {
            console.log('O raio de mutação impede que você retorne ataques.');

            stuned = false;
        } else {
            console.log();
            let action = await statusAndAction(mainChar, enemy);
            console.log();

            processAction(action, mainChar, enemy);
            console.log();
        }

        await delay(1500); 

        if (enemy.hitPoints <= 0) {
            process.stdout.write(`Você derrotou ${enemy.name}!`);
            console.log();
            return true;
        }

        if (poisonCount !== 0) {
            mainChar.hitPoints -= 10;
            console.log('A marca real causa 10 pontos de dano.');
            console.log();
            poisonCount--;
        }

        let randAtkNumber = Math.floor(Math.random() * 14) + 1

        if (randAtkNumber >= 1 && randAtkNumber <= 3) {
            let dmg = Math.floor(enemy.weakAttack() - mainChar.armorPoints);
            mainChar.hitPoints -= dmg;

            console.log(`Sem perder tempo, ${enemy.name} usa sua espada para um ataque rápido, o qual causa ${dmg} de dano direto!`);
        } else if (randAtkNumber >= 4 && randAtkNumber <= 5) {
            let dmg = Math.floor(enemy.mediumAttack() - mainChar.armorPoints);
            mainChar.hitPoints -= dmg;

            console.log(`Em contrapartida, um raio sai na sua direção pela armadura de ${enemy.name} e realiza ${dmg} pontos de dano!`);
        } else if (randAtkNumber === 6) {
            let dmg = Math.floor(enemy.strongAttack() - mainChar.armorPoints);
            mainChar.hitPoints -= dmg;

            console.log(`${enemy.name} leva sua espada para cima e se prepara para te atacar de uma forma devastadora. O corte faz um estrago de ${dmg} pontos de dano!`);
        // A partir desse, os golpes abaixo são especiais da luta contra O Rei
        } else if (randAtkNumber === 7) {
            poisonCount += 3;

            console.log(`${enemy.name} enfinca sua espada no chão e faz com que uma marca real surja, causando 10 de dano pelos próximos 3 turnos.`);
        } else if (randAtkNumber === 8) {
            stuned = true;

            console.log(`Um raio verde escapa pela pele mutante de ${enemy.name} e o atinge. O raio imobiliza você por 1 turno.`);
        } else if (randAtkNumber === 9) {
            enemy.hitPoints += 15;
            if (enemy.hitPoints > 300) {
                enemy.hitPoints = 300;
            }

            console.log(`A armadura de ${enemy.name} se sobrecarrega e brilha em verde, o que o cura em 15 pontos de vida.`);
        } else if (randAtkNumber >= 10 && randAtkNumber <= 11) {
            mainChar.gainHp(30);

            console.log(`A armadura de ${enemy.name} se sobrecarrega e brilha em verde, mas a tentativa é falha e raios vão em sua direção, curando-o em 30 pontos de vida.`);
        } else {
            console.log(`${enemy.name} desfere um poderoso golpe, mas você consegue desviar.`);
        }

        if (mainChar.hitPoints <= 0) {
            resetFight(mainChar, tempLifePotion, tempStrengthPotion);

            console.log(`Você foi derrotado por ${enemy.name}!`);
            return false;
        }

        console.log();
    }
}

module.exports = kingFight;
