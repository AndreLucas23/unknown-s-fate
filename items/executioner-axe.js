const Weapon = require('../items-classes/weapon-class');

// Criação do objeto do item "Machado De Carrasco" que surge na primeira fase
const executionerAxe = new Weapon('Machado De Carrasco',
    `Esse machado já passou pela mão de diversos mestres da matança. Extremamente brutal. Imensos 50 pontos de ataque`,
    50);

module.exports = executionerAxe;
