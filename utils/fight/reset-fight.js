// Criação da função que redefine os atributos do personagem principal
// a cada tentativa do jogador  
// São usadas variáveis "temp" para demarcar os exatos atributos imediatamente
// antes do início da luta para que as tentativas não tenham diferenças entre si
function resetFight(mainChar, tempLifePotion, tempStrengthPotion) {
        if (tempLifePotion && !mainChar.inventory.some(item => item.name === 'Poção De Vida Pequena')) {
            mainChar.addToInventory(tempLifePotion);
        }

        if (tempStrengthPotion && !mainChar.inventory.some(item => item.name === 'Poção De Força Pequena')) {
            mainChar.addToInventory(tempStrengthPotion);
        }

        mainChar.attackDmg = mainChar.weapon.attackDmg;

        if (mainChar.inventory.some(item => item.name === 'Medalhão Solar')) {
            mainChar.inventory.find(item => item.name === 'Medalhão Solar').roundsLeft = 3;
        }
}

module.exports = resetFight;
