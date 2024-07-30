const Potion = require('../items-classes/potion-class');

// Criação do objeto do item "Poçãp De Vida Pequena" que surge na segunda fase
const smallLifePotion = new Potion('Poção De Vida Pequena',
    `Descrita por muitos como um suco de respiro de vida, essa poção concede a quem a bebe aliviantes 50 pontos de vida.`,
    50
)

module.exports = smallLifePotion;
