const delay = require('../delay');
const statusAndAction = require('./fight-status');
const resetFight = require('./reset-fight');

async function executionerFight(mainChar, enemy) {
    const tempLifePotion = mainChar.inventory.find(item => item.name === 'Poção De Vida Pequena');
    const tempStrengthPotion = mainChar.inventory.find(item => item.name === 'Poção De Força Pequena');
    let tempAttackDmg = mainChar.attackDmg;

    // Criação da variável usada no golpe especial do "Carrasco"
    let attackDebuffCount = 0;

    while (true) {
        if (attackDebuffCount > 0) {
            attackDebuffCount--;
            if (attackDebuffCount === 0) {
                console.log();
                console.log('A redução de dano de ataque terminou.');
                mainChar.attackDmg = tempAttackDmg;
            }
        }

        // Apenas nessa luta, o medalhão está disponível e sua habilidade é usada
        if (mainChar.inventory.some(item => item.name === 'Medalhão Solar')) {
            mainChar.inventory.find(item => item.name === 'Medalhão Solar').passRound(mainChar);
        }


        console.log();
        let action = await statusAndAction(mainChar, enemy);
        console.log();

        if (action === 1) {
        let dmg = Math.floor(mainChar.weakAttack() - enemy.armorPoints);
        let randDodgeNum = Math.floor(Math.random() * 11) + 1;

        if (randDodgeNum <= 9) {
            enemy.hitPoints -= dmg;

            console.log(`O seu ataque fraco acerta ${enemy.name} em cheio, causando ${dmg} de dano!`);
        } else {
            console.log(`Que azar... seu golpe passa direto por ${enemy.name} e não faz nada.`);
        }
    } else if (action === 2) {
        let dmg = Math.floor(mainChar.mediumAttack() - enemy.armorPoints);
        let randDodgeNum = Math.floor(Math.random() * 11) + 1;

        if (randDodgeNum <= 8) {
            enemy.hitPoints -= dmg;

            console.log(`Seu golpe médio é efetivo e causa ${dmg} de dano total!`);
        } else {
            console.log(`Infelizmente, seu ataque não foi rápido o suficiente e ${enemy.name} desviou!`);
        }
    } else if (action === 3) {
        let dmg = Math.floor(mainChar.strongAttack() - enemy.armorPoints);
        let randDodgeNum = Math.floor(Math.random() * 11) + 1;

        if (randDodgeNum <= 7) {
            enemy.hitPoints -= dmg;
            
            console.log(`Um devastador ataque forte arrasa ${enemy.name}, que recebe ${dmg} de dano!`);
        } else {
            console.log(`Seu pesado golpe foi inefetivo e deu brecha para ${enemy.name} esquivar!`);
        }
    } else if (action === 4 && mainChar.inventory.some(item => item.name === 'Poção De Vida Pequena')) {
        let lifePotion = mainChar.inventory.find(item => item.name === 'Poção De Vida Pequena')
        mainChar.useLifePotion(lifePotion);

        console.log('Poção De Vida Pequena utilizada!');
        mainChar.removeByName(lifePotion.name);
    } else if (action === 4 && !mainChar.inventory.some(item => item.name === 'Poção De Vida Pequena')) {
        console.log();
        console.log('Você não possui Poção De Vida Pequena!');
    } else if (action === 5 && mainChar.inventory.some(item => item.name === 'Poção De Força Pequena')) {
        let strengthPotion = mainChar.inventory.find(item => item.name === 'Poção De Força Pequena');
        mainChar.useStrengthPotion(strengthPotion);

        console.log('Poção De Força Pequena utilizada!');
        tempAttackDmg = mainChar.attackDmg;
        mainChar.removeByName(strengthPotion.name);
    } else if (action === 5 && !mainChar.inventory.some(item => item.name === 'Poção De Força Pequena')) {
        console.log('Você não possui Poção De Força Pequena!');
    } else {
        console.log('Claramente, você não digita nada válido e perde sua chance de atacar!');
    }

        console.log();
        await delay(1500); 

        if (enemy.hitPoints <= 0) {
            process.stdout.write(`Você derrotou ${enemy.name}!`);
            return true;
        }

        let randAtkNumber = Math.floor(Math.random() * 11) + 1

        if (randAtkNumber >= 1 && randAtkNumber <= 3) {
            let dmg = Math.floor(enemy.weakAttack() - mainChar.armorPoints);
            mainChar.hitPoints -= dmg;

            console.log(`${enemy.name} ataca você com a cauda e causa ${dmg} de dano direto!`);
        } else if (randAtkNumber >= 4 && randAtkNumber <= 5) {
            let dmg = Math.floor(enemy.mediumAttack() - mainChar.armorPoints);
            mainChar.hitPoints -= dmg;

            console.log(`Em contrapartida, ${enemy.name} realiza um corte de ${dmg} pontos de dano com sua garra!`);
        } else if (randAtkNumber === 6) {
            let dmg = Math.floor(enemy.strongAttack() - mainChar.armorPoints);
            mainChar.hitPoints -= dmg;

            console.log(`${enemy.name}, morde você com força, que surpreende com ${dmg} de dano bruto!`);
        // Esse ataque é especial da luta contra o "Carrasco"
        } else if (randAtkNumber === 7) {
            mainChar.hitPoints -= 10;

            mainChar.attackDmg -= 4;
            attackDebuffCount = 2;

            console.log(`${enemy.name} cospe uma gosma que cobre todo o seu corpo. Você recebe 10 pontos de dano e por 2 rodadas seguidas, causa 4 de dano a menos.`);
        } else {
            console.log(`${enemy.name} desfere um poderoso golpe, mas você consegue desviar.`);
        }

        if (mainChar.hitPoints <= 0) {
            resetFight(mainChar, tempLifePotion, tempStrengthPotion);

            console.log(`Você foi derrotado por ${enemy.name}!`);
            return false;
        }
    }
}

module.exports = executionerFight;
