const mainChar = require('../characters/main-character');
const Character = require('./character-class')

// Criação da classe "MainCharacter" que cria o objeto do personagem principal usado no projeto
class MainCharacter extends Character {
    // Criação do atributo "inventory", que é o inventário do personagem principal, representado como a "mochila"
    inventory = [];

    // Criação do atributo que representa a arma principal usada pelo personagem principal
    weapon = {attackDmg: 25};

    // Criação do atributo que representa a armadura usada pelo personagem principal
    armor = {armorPoints: 0};

    constructor(name, hitPoints, attackDmg, armorPoints) {
        super(name, hitPoints, attackDmg, armorPoints);
    }

    // Criação do método "addToInventory()" que adciona o item especificado ao inventário do personagem principal
    addToInventory(item) {
        this.inventory.push(item);
    }

    // Criação do método "removeByName()" que itera sobre os itens do inventário a fim de remover um item especificado pelo nome
    removeByName(name) {
        this.inventory.forEach((item, index) => {
            if (item.name === name) {
                this.inventory.splice(index, 1);
                return;
            }
        })
    }

    // Criação do método "showInventory()" que exibe no terminal, com um layout próprio, o inventário (mochila) do personagem principal
    showInventory() {
        console.log('------------');
        console.log('Sua mochila: ');
        console.log('------------');
        for (let count = 0; count < 5;) {
            console.log(`${count+1}) ${this.inventory[count] === undefined ? '' : this.inventory[count].name}`);
            count++;
        }
        process.stdout.write('------------');
    }

    // Criação do método "setWeapon()" que define o item especificado como a arma principal do personagem principal
    setWeapon(weapon) {
        this.weapon = weapon;
        this.attackDmg = weapon.attackDmg;
        // O primeiro espaço do inventário sempre é reservado para a arma principal
        this.inventory[0] = weapon;
    }

    // Criação do método "setArmor()" que define o item especificado como a armadura do personagem principal
    setArmor(armor) {
        this.armor = armor;
        this.armorPoints = armor.armorPoints;
        // O segundo espaço do inventário sempre é reservado para a armadura
        this.inventory[1] = armor;
    }

    // Criação do método "gainHp()" que adiciona, aos pontos de vida atuias do personagem principal, mais pontos em uma quantidade absoluta
    gainHp(hp) {
        this.hitPoints += hp;
        // Caso os pontos de vida ultrapassem 100 (vida máxima), os pontos de vida se travam nos próprios 100
        if (this.hitPoints > 100) {
            this.hitPoints = 100;
        }
    }

    // Criação do método "restoreAttackDmg()" que restaura o dano de ataque do personagem principal para um valor absoluto
    // Geralmente, é usado ao final de lutas para retornar ao valor da própria arma principal
    restoreAttackDmg(attackDmg) {
        this.attackDmg = attackDmg;
    }

    // Criação do método "useLifePotion()" que faz o uso de uma poção de vida passada como parâmetro
    useLifePotion(lifePotion) {
        this.hitPoints += lifePotion.value;
        // Novamente, caso os pontos de vida ultrapassem 100, eles são travados na vida máxima
        if (this.hitPoints > 100) {
            this.hitPoints = 100;
        }
        // Após serem usadas, as poções são descartadas do inventário
        this.removeByName(lifePotion.name);
    }

    // Criação do método "useStrengthPotion()" que faz o uso de uma poção de força passada como parâmetro
    useStrengthPotion(strengthPotion) {
        this.attackDmg += strengthPotion.value;
        // Após serem usadas, as poções são descartadas do inventário
        this.removeByName(strengthPotion.name);
    }
}

module.exports = MainCharacter;
