const Armor = require('../items-classes/armor-class');

// Criação do objeto do item "Armadura De Couro" que surge na primeira fase
const leatherArmor = new Armor('Armadura De Couro',
    `Nada mais que a armadura usada anteriormente pelos guardas reais, foi descartada por ser muito desconfortável, mesmo que ofereça mais proteção com 15 pontos.`,
    15
)

module.exports = leatherArmor;
