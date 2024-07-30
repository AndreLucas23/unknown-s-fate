const Potion = require('../items-classes/potion-class');

// Criação do objeto do item "Poção De Força Pequena" que surge na segunda fase
const smallStrengthPotion = new Potion('Poção De Força Pequena',
    `Tomada por figuras épicas como Hércules e Perseu em seus dias de glória, faça uso desse item de guerra para garantir mais 15 pontos de força durante a sua luta.`,
    15
)

module.exports = smallStrengthPotion;
