const Item = require('./item-class');

// Criação da classe "Potion" usada na construção de qualquer poção no projeto
class Potion extends Item {
    constructor(name, description, value) {
        super(name, description);
        // O atributo "value" representa a quantidade de pontos aumentados pela poção
        this.value = value;
    }
}

module.exports = Potion;
