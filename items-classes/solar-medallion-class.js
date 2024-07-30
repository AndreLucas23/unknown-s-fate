const Item = require('./item-class');

// Criação da classe "SolarMedallion" usado para criar, especificamente, o objeto "solarMedallion"
// Já que o "Medalhão Solar" possui uma habilidade única, foi preciso criar uma classe à parte com um método especial para aplicá-la
class SolarMedallion extends Item {
    roundsLeft = 3;

    constructor(name, description, extraArmor) {
        super(name, description);
        this.extraArmor = extraArmor;
    }

    // O método "passRound()" faz a contagem de turnos dentro de si mesmo para que,
    // no terceiro, possa ocorrer a recuperação de 20 pontos de vida
    passRound(mainChar) {
        this.roundsLeft--;
        if (this.roundsLeft === 0) {
            mainChar.gainHp(20);

            console.log();
            console.log('O Medalhão Solar curou você em 20 pontos de vida!');

            this.roundsLeft = 3;
        }
    }
}

module.exports = SolarMedallion;
