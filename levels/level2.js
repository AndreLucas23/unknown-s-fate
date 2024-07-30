// Importação os objetos e funções utilizados nessa fase do jogo
// Foi importado apenas o mínimo necessário para cada fase
const prompt = require('prompt-sync')();
const verifyAnswer = require('../utils/verify-answer')
const fight = require('../utils/fight/fight');
const kingFight = require('../utils/fight/king-fight');

const creature = require('../characters/creature');
const royalCreature = require('../characters/royal-creature');
const smallLifePotion = require('../items/small-life-potion');
const smallStrengthPotion = require('../items/small-strength-potion');
const theKing = require('../characters/the-king');
const solarMedallion = require('../items/solar-medallion');

// Criação da função que inicializa a segunda fase do jogo
async function level2 (mainChar) {
    // Continuação da história do jogo
    process.stdout.write('Forçando os olhos, é encontrada uma lamparina pendurada em uma haste na parede do cômodo.');
    prompt();
    process.stdout.write('Você pega o fósforo situado ao lado da haste e acende o objeto, o que revela a sala inteira à volta.');
    prompt();
    process.stdout.write('Há, em uma mesa no centro da parede anterior da sala, inúmeros papéis, retratos, e escrituras esparramadas.');
    prompt();
    process.stdout.write('Ao observar os retratos, você vê rostos de pessoas que te parecem extremamente familiares, mesmo que não consiga recordar bem.');
    prompt();
    process.stdout.write('Já nas documentações, estão descritas formas de receita de diversas poções diferentes, referentes à "vida", "força" e até mesmo "esquecimento".');
    prompt();
    process.stdout.write('Mas algo chama a atenção de uma forma diferente:');
    prompt();
    process.stdout.write('Há pesquisas inteiras colada nas paredes da sala que descrevem, talvez, formas de mutações, juntas a protocolos de experimentos que parecem ter acontecido em alguma sala deste "calabouço".');
    prompt();
    process.stdout.write('Após procurar por muito tempo, você finalmente encontra uma localização:');
    prompt();
    process.stdout.write('-- Laboratório oculto por trás da sala do trono do Rei --');
    prompt();
    process.stdout.write('Ao lado, um mapa que leva exatamente à mesma sala citada e uma chave prateada, que você guarda em sua mochila.');
    prompt();
    process.stdout.write('Em busca de respostas imediatas, você sai silenciosamente da sala e, evitando guardas alertas, sobe a escadaria ao final do corredor para ir em direção à sala do trono.');
    prompt();
    process.stdout.write('Depois de subir ao próximo andar, dá de cara com uma porta de metal e uma placa acima escrita "ENTRE APENAS AUTORIZADO"');
    prompt();
    process.stdout.write('Ignorando o aviso, você insere a chave na fechadura e consegue abrir ela.');
    prompt();
    process.stdout.write('A sala por dentro, iluminada e branca, parece muito com um centro de testes, como os experimentos citados nos documentos lidos.');
    prompt();
    process.stdout.write('Repentinamente, uma criatura monstruosa, coberta por uma gosma verde claro pula para fora de um dos tanques de contenção.');
    prompt();
    process.stdout.write('Criatura - Eu ter que defender meu rei!');
    prompt();
    process.stdout.write('Curiosamente, é hora de lutar mais uma vez!');
    prompt();

    while (true) {
        if (!await fight(mainChar, creature)) {
            if (verifyAnswer(prompt('Tentar novamente? S - sim ou N - não: ').toUpperCase()) === 'S') {
                mainChar.restoreHp(100);
                creature.restoreHp(220);
                continue;
            }

            console.warn('GAME OVER');
            process.exit();

        }

        break;
    }

    mainChar.restoreHp(100);

    // Continuação da história do jogo
    prompt();
    console.log();
    process.stdout.write('Criatura - Ah! Meu corpo não poder morrer! Que dor!');
    prompt();
    process.stdout.write('E então, a massa do monstro começou a lentamente se derreter, até formar totalmente uma poça verde gosmenta em seu redor.');
    prompt();
    process.stdout.write('Deixando o inimigo para trás, você caminha, mais uma vez pela extensa sala.');
    prompt();
    process.stdout.write('Entretanto, no meio do caminho sua atenção é desviada por uma escrivaninha de cor cinza, com vários protótipos de artefatos científicos sobre si.');
    prompt();
    process.stdout.write('Entre eles, dois, que você já conheceu anteriormente, te atraem em especial. São eles:');
    prompt();
    // Aqui, as poções de vida e força são introduzidas ao jogador
    console.log('Um frasco esférico e transparente que guarda um líquido vermelho em seu interior. Certamente é a poção de vida.');
    process.stdout.write(`Descrição - ${smallLifePotion.description}`);
    prompt();
    console.log();

    if (verifyAnswer(prompt('Deseja coletá-la? S - sim ou N - não: ')).toUpperCase() === 'S') {
        console.log();
        mainChar.addToInventory(smallLifePotion);
        process.stdout.write('\x1b[1mPoção De Vida Pequena\x1b[0m ');
        process.stdout.write('foi adicionada à mochila.');
        prompt();
        console.log();
        mainChar.showInventory();
        console.log();
    } else {
        process.stdout.write('Um equipamento instável como esse pode trazer problemas, é melhor não levar.');
        prompt();
        console.log();
    }

    console.log('E ao seu lado, outro frasco, mas tendo um formato entre oval e cilíndrico, destacando seu líquido azul escuro dentro do vidro. Por correlação, a poção de força.');
    process.stdout.write(`Descrição - ${smallStrengthPotion.description}`);
    prompt();
    console.log();

    if (verifyAnswer(prompt('Deseja coletá-la? S - sim ou N - não: ')).toUpperCase() === 'S') {
        console.log();
        mainChar.addToInventory(smallStrengthPotion);
        process.stdout.write('\x1b[1mPoção De Força Pequena\x1b[0m ');
        process.stdout.write('foi adicionada à mochila.');
        prompt();
        console.log();
        mainChar.showInventory();
        console.log();
    } else {
        process.stdout.write('A melhor opção é não se envolver com criações dos inimigos.');
        prompt();
        console.log();
    }

    // Continuação da história do jogo
    process.stdout.write('"Quantos obstáculos em uma única sala" pensou, e seguiu adiante até a porta no final do laboratório.');
    prompt();
    process.stdout.write('Ao sair, dá de cara com um salão recoberto por carpetes vermelhos e ornamentações de ouro, com portas à esquerda, direita e frente.');
    prompt();
    process.stdout.write('Assim como o mapa dizia, você segue o caminho pela direita, onde está a maior das três portas, como se esperasse a entrada de um gigante.');
    prompt();
    process.stdout.write('Suas mãos empurram a portaria com força e revelam, atrás dela, a esperada sala do trono.');
    prompt();
    process.stdout.write('É um salão gigantesco, com ostentações auríneas e esculturas de mármore por toda a parte, além, é claro, do enorme trono ao fim da sala, feito de madeira negra.');
    prompt();
    process.stdout.write('Seria uma cena gloriosa, se não fosse pelo fato de sua presença ter sido notada.');
    prompt();
    process.stdout.write('Aos pés do trono principal, duas criaturas extremamente parecidas com a que você derrotou minutos atrás, mas com armaduras leves, prontas para investir na sua direção a qualquer momento.');
    prompt();
    process.stdout.write('E, sentado no grandioso trono, O Rei, um homem grisalho de barba majestosa com uma coroa dourada, mas que apresenta um estado aparentemente doente.');
    prompt();
    process.stdout.write('O Rei - Ora, ora. Vejamos se não é exatamente quem eu queria ver. Cof cof. Acalmem-se, meus súditos, não o ataquem.');
    prompt();
    process.stdout.write('O Rei - Talvez você esteja se perguntando onde está. Pois então... cof.');
    prompt();
    process.stdout.write('O Rei - Na verdade, deixei sua cela aberta e lhe deixei uma espada para testar você como meu novo guarda mutante.')
    prompt();
    process.stdout.write('O Rei - Aqui é o que eu chamo de meu reino, um calabouço em que aprisionei sua família inteira.');
    prompt();
    process.stdout.write('O Rei - E por que fiz isso? Cof cof. Bom, como pode ver, eu estou... adoecendo.');
    prompt();
    process.stdout.write('O Rei - Então, eu conduzi muitas pesquisas e, finalmente, cheguei até a chave da vida eterna.');
    prompt();
    process.stdout.write('O Rei - E o que descobri? Se capturarmos os estímulos dos sentimentos humanos por sensações e objetos de apego, podemos transformá-los em uma mutação genética.');
    prompt();
    process.stdout.write('O Rei - E essa muta... cof cof. Mutação, bem, ela concede survavibilidade e força sobrehumanas.');
    prompt();
    process.stdout.write('O Rei - Por isso, tenho aprisionado muitas famílias e retirado até a última gota de emoção possível para testar essa mutação em meus guardas, como esses.');
    prompt();
    process.stdout.write('O Rei - Mas para isso, as famílias precisam ser sacrificadas, e é o que acontecerá agora. Você assistirá a drenagem dos seus parentes para que eu me torne o ser mais poderoso de todos!');
    prompt();
    process.stdout.write('Ao ouvir isso, você se enfurece e corre com toda a velocidade na direção do Rei.');
    prompt();
    process.stdout.write('O Rei - Cof cof. É, eu não esperava que você aceitasse mesmo. Guardas, eliminem ele!');
    prompt();

    // Nessa estrutura de luta, ocorre a aplicação de uma luta dupla
    // Nela, o jogador deve lutar contra dois monstros e, caso e seja derrotado no
    // segundo, repete a luta contra o primeiro novamente
    while (true) {
        if (!await fight(mainChar, royalCreature)) {
            console.log();
            if (verifyAnswer(prompt('Tentar novamente? S - sim ou N - não: ').toUpperCase()) === 'S') {
                mainChar.restoreHp(100);
                royalCreature.restoreHp(180);
                continue;
            }

            console.warn('GAME OVER');
            process.exit();
        }

        prompt();
        console.log();
        process.stdout.write('Seu golpe é letal e faz com que a primeira criatura se deteriorize em sua frente.');
        prompt();
        mainChar.gainHp(50);
        mainChar.restoreAttackDmg(mainChar.weapon.attackDmg);
        royalCreature.restoreHp(180);
        console.log('Com isso, você recebe 50 pontos de vida e está pronto para destruir o próximo!');

        if (!await fight(mainChar, royalCreature)) {
            console.log();
            if (verifyAnswer(prompt('Tentar novamente? S - sim ou N - não: ').toUpperCase()) === 'S') {
                mainChar.restoreHp(100);
                royalCreature.restoreHp(180);
                continue;
            }

            console.warn('GAME OVER');
            process.exit();

        }

        break;
    }

    mainChar.restoreHp(100);

    // Continuação da história do jogo
    prompt();
    console.log();
    process.stdout.write('A segunda criatura investida contra você é derrotada e destruída assim como as outras que se puseram no seu caminho.');
    prompt();
    process.stdout.write('Por um tempo, o silêncio se instaura na sala.');
    prompt();
    process.stdout.write('O Rei - Bem. Cof cof. Você se provou um oponente deveras forte.');
    prompt();
    process.stdout.write('O Rei - Agora, está na hora da sua provação final.');
    prompt();
    process.stdout.write('Após sua fala, levanta-se, mostrando ser um homem grande com uma situação física invejável.');
    prompt();
    process.stdout.write('E, para revelar toda a sua força, puxa, de trás do trono, um aparelho de cores pretas e verdes misterioso.');
    prompt();
    process.stdout.write('Ele possui duas garras na parte frontal, as quais O Rei insere friamente em suas costas e o arranca um grito de dor.');
    prompt();
    process.stdout.write('De repente, a massa corporal do inimigo começa a crescer, o fazendo ter quase o dobro de seu tamanho, além de músculos enormes.');
    prompt();
    process.stdout.write('Agora espumando e com o olhar fixado em você, o Rei puxa sua espada de duas mãos dourada escondida atrás do seu trono e mantém uma guarda ofensiva.');
    prompt();
    process.stdout.write('O Rei - Hora do seu fim. Venha a mim!');
    prompt();
    process.stdout.write('Está na hora do combate final.');
    prompt();

    // Aqui, o chefão da segunda fase é enfrentado em uma luta especial
    while (true) {
            if (!await kingFight(mainChar, theKing)) {
                console.log();
                if (verifyAnswer(prompt('Tentar novamente? S - sim ou N - não: ').toUpperCase()) === 'S') {
                    mainChar.restoreHp(100);
                    theKing.restoreHp(300);
                    continue;
                }

                console.warn('GAME OVER');
                process.exit();
            }

            break;
    }

    mainChar.restoreHp(100);

    // Continuação da história do jogo
    prompt();
    process.stdout.write('Após uma digna batalha, você sai vitorioso.');
    prompt();
    process.stdout.write('Ajoelhado e ensanguentado perante a sua figura, O Rei reluta para se manter firme.');
    prompt();
    process.stdout.write('O Rei - De.. desgraçado... cof cof.');
    prompt();
    process.stdout.write('E, em meio a fundas respirações, ele finalmente cai no chão.');
    prompt();
    console.log('Um raio de luz se irradia para fora do peito do Rei. Olhando mais atentamente, é um medalhão escondido que está escapando do seu pescoço.')
    console.log(`Descrição - ${solarMedallion.description}`);
    console.log();

    // O primeiro item com funções passivas para luta é introduzido
    if (verifyAnswer(prompt('Deseja coletá-lo? S - sim ou N - não: ').toUpperCase()) === 'S') {
        console.log();
        process.stdout.write('Você retira o medalhão do pescoço do Rei.');
        prompt();
        mainChar.addToInventory(solarMedallion);
        console.log();
        process.stdout.write('\x1b[1mMedalhão Solar\x1b[0m ');
        process.stdout.write('foi adicionado à mochila.');
        prompt();
        console.log();
        mainChar.showInventory();
        prompt();
    } else {
        console.log();
        process.stdout.write('Talvez seja um poder a se evitar. O medalhão não é pego.');
        prompt();
    }
}

module.exports = level2;
