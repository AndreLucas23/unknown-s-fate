const Medallion = require('../items-classes/solar-medallion-class');

// Criação do objeto do item "Medalhão Solar" que surge na segunda fase
const solarMedallion = new Medallion('Medalhão Solar',
    'Passado de geração em geração pelas realezas mundiais, o Medalhão Solar reserva ao portador 5 de armadura adicional e a possibilidade de se curar em 20 pontos a cada 3 turnos.',
    5
)

module.exports = solarMedallion;
