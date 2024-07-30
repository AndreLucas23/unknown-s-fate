// Criação da classe "Character" usada para construir o objeto de qualquer personagem usado no projeto
class Character {
    constructor(name, hitPoints, attackDmg, armorPoints) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackDmg = attackDmg;
        this.armorPoints = armorPoints;
    }

    // Criação do método "showStatus()" que é usado para exibir os status de um personagem durante uma luta
    showStatus() {
        console.log(`Pontos de vida: ${this.hitPoints}`);
        console.log(`Dano de ataque: ${this.attackDmg}`);
        console.log(`Armadura: ${this.armorPoints}`);
    }

    // Criação do método "weakAttack()" que é usado para aplicar ataques fracos de qualquer personagem durante uma luta
    weakAttack() {
        return this.attackDmg;
    }

    // Criação do método "mediumAttack()" que é usado para aplicar ataques médios de qualquer personagem durante uma luta
    mediumAttack() {
        return this.attackDmg * 1.4;
    }

    // Criação do método "strongAttack()" que é usado para aplicar ataques fortes de qualquer personagem durante uma luta
    strongAttack() {
        return this.attackDmg * 1.8;
    }

    // Criação do método "restoreHp()" que é usado para definir os pontos de vida de qualquer personagem em uma quantidade absoluta
    restoreHp(hp) {
        this.hitPoints = hp;
    }
}

module.exports = Character;
