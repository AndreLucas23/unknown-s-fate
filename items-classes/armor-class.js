const Item = require('../items-classes/item-class');

// Criação da classe "Armor" usada para construir o objeto de qualquer armadura usada no projeto
class Armor extends Item {
    constructor(name, description, armorPoints) {
        super(name, description);
        this.armorPoints = armorPoints;
    }
}

module.exports = Armor;