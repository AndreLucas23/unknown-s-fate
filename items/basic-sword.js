const Weapon = require('../items-classes/weapon-class');

// Criação do objeto do item "Espada básica" que surge na primeira fase
const basicSword = new Weapon('Espada Básica',
    `Uma espada básica com uma lâmina de ferro enferrujada. Simples, mas faz o seu trabalho com uma força de 30 pontos`,
    30);

module.exports = basicSword;
