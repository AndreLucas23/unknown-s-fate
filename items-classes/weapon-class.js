const Item = require('./item-class')

// Criação da classe "Weapon" usada para construir qualquer arma usada no projeto
class Weapon extends Item{
    constructor(name, description, attackDmg) {
        super(name, description);
        this.attackDmg = attackDmg;
    }
}

module.exports = Weapon;
