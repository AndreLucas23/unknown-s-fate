// Criação da função que recebe a ação enviada pelo jogador e realiza
// uma ação específica na luta
function processAction (action, mainChar, enemy) {
    // Caso a opção seja "1", sempre realizará uma ataque fraco
    // Ataques fracos, por padrão, possuem baixo dano e alta
    // probabilidade de acerto
    if (action === 1) {
        // Para os ataques, o dano é armazenado na variável "dmg" (damage)
        // e subtraida da vida atual do inimigo
        let dmg = Math.floor(mainChar.weakAttack() - enemy.armorPoints);
        let randDodgeNum = Math.floor(Math.random() * 11) + 1;

        if (randDodgeNum <= 9) {
            enemy.hitPoints -= dmg;

            console.log(`O seu ataque fraco acerta ${enemy.name} em cheio, causando ${dmg} de dano!`);
        } else {
            console.log(`Que azar... seu golpe passa direto por ${enemy.name} e não faz nada.`);
        }
    // Caso a opção seja "2", sempre realizará uma ataque médio
    // Ataques médios, por padrão, possuem médio dano e média
    // probabilidade de acerto
    } else if (action === 2) {
        let dmg = Math.floor(mainChar.mediumAttack() - enemy.armorPoints);
        let randDodgeNum = Math.floor(Math.random() * 11) + 1;

        if (randDodgeNum <= 8) {
            enemy.hitPoints -= dmg;

            console.log(`Seu golpe médio é efetivo e causa ${dmg} de dano total!`);
        } else {
            console.log(`Infelizmente, seu ataque não foi rápido o suficiente e ${enemy.name} desviou!`);
        }
    // Caso a opção seja "3", sempre realizará uma ataque forte
    // Ataques médios, por padrão, possuem alto dano e baixa
    // probabilidade de acerto
    } else if (action === 3) {
        let dmg = Math.floor(mainChar.strongAttack() - enemy.armorPoints);
        let randDodgeNum = Math.floor(Math.random() * 11) + 1;

        if (randDodgeNum <= 7) {
            enemy.hitPoints -= dmg;
            
            console.log(`Um devastador ataque forte arrasa ${enemy.name}, que recebe ${dmg} de dano!`);
        } else {
            console.log(`Seu pesado golpe foi inefetivo e deu brecha para ${enemy.name} esquivar!`);
        }
    // Caso a opção seja "4" e haja uma Poção De Vida Pequena no inventário,
    // ela será usada
    } else if (action === 4 && mainChar.inventory.some(item => item.name === 'Poção De Vida Pequena')) {
        let lifePotion = mainChar.inventory.find(item => item.name === 'Poção De Vida Pequena')
        mainChar.useLifePotion(lifePotion);

        console.log('Poção De Vida Pequena utilizada!');
        mainChar.removeByName(lifePotion.name);
    // Caso a opção seja "4" e não haja uma Poção De Vida pequena no inventário,
    // o jogador será informado da impossibilidade da ação
    } else if (action === 4 && !mainChar.inventory.some(item => item.name === 'Poção De Vida Pequena')) {
        console.log('Você não possui Poção De Vida Pequena!');
    // Caso a opção seja "5" e haja uma Poção De Força Pequena no inventário,
    // ela será usada
    } else if (action === 5 && mainChar.inventory.some(item => item.name === 'Poção De Força Pequena')) {
        let strengthPotion = mainChar.inventory.find(item => item.name === 'Poção De Força Pequena');
        mainChar.useStrengthPotion(strengthPotion);

        console.log('Poção De Força Pequena utilizada!');
        mainChar.removeByName(strengthPotion.name);
    // Caso a opção seja "5" e não haja uma Poção De Força pequena no inventário,
    // o jogador será informado da impossibilidade da ação
    } else if (action === 5 && !mainChar.inventory.some(item => item.name === 'Poção De Força Pequena')) {
        console.log('Você não possui Poção De Força Pequena!');
    // Caso nenhuma das opções acima seja inserida, o jogador apenas "passará sua vez"
    } else {
        console.log('Claramente, você não digita nada válido e perde sua chance de atacar!');
    }
}

module.exports = processAction;
