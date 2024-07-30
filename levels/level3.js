// Importação os objetos e funções utilizados nessa fase do jogo
// Foi importado apenas o mínimo necessário para cada fase
const prompt = require('prompt-sync')();
const verifyAnswer = require('../utils/verify-answer');
const delay = require('../utils/delay');

const executionerFight = require('../utils/fight/executioner-fight');

const theExecutioner = require('../characters/the-executioner');

// Criação da função que inicializa a terceira fase do jogo
async function level3 (mainChar) {
    process.stdout.write('Agora é a hora de resgatar seus familiares.');
    prompt();
    process.stdout.write('Seguindo os passos do mapa encontrado anteriormente, você abre a passagem secreta encontrada ao fundo da sala e entra no laboratório oculto.');
    prompt();
    process.stdout.write('Lá, são reencontrados seus ambos pais, sua irmã e seu avô sedados em tanques de contenção transparentes.');
    prompt();
    process.stdout.write('No exato momento em que os vê, você cai no chão, retoma toda a sua memória e se mantém atordoado por uma imensa dor sentida na cabeça.');
    prompt();
    process.stdout.write('Em meio à sua fragilidade, alguém entra calmamente no cômodo e caminha até estar na sua frente. Sua cabeça luta para se levantar e reconhecer quem é.');
    prompt();
    process.stdout.write('O "Carrasco" - Hahaha, caiu perfeitamente como um patinho. Meu plano era infalível.');
    prompt();
    process.stdout.write('O "Carrasco" - Pensou mesmo que conseguiria derrotar O Rei sem ajuda, não é mesmo? Eu fui quem deixou os equipamentos pelo seu caminho e sabotei o equipamentos mutacional dele, não lutou nem contra seus 50%.');
    prompt();
    process.stdout.write('O "Carrasco" - Claro que eu também nunca conseguiria, então deixei você fazer todo o trabalho sujo por mim, por isso não te finalizei antes!');
    prompt();
    process.stdout.write('O "Carrasco" - E aqui vai um segredo que O Rei não conseguiu descobrir: objetos pessoais e afetivos potencializam muito a força da mutação.');
    prompt();
    process.stdout.write('O "Carrasco" - Por isso, roubei um de cada um dos membros da sua família e reuni para formar um equipamento mais potente ainda.');
    prompt();
    process.stdout.write('O "Carrasco" - E agora, eu poderei usá-lo para me tornar invencível!');
    prompt();
    process.stdout.write('Assim, ele se vira e conecta os cabos dos tanques à grande máquina central após ligar as garras de ativação às suas costas.');
    prompt();
    process.stdout.write('De repente, um barulho ensurdecedor é ouvido da maquinaria e a transformação começa.');
    prompt();
    process.stdout.write('Diferentemente de como O "Carrasco" pretendia, a mutação começa a mudar a estrutura óssea dele junto às mesmas transformações presenciadas no Rei.');
    prompt();
    process.stdout.write('Tarde demais. Ele já se tornou um monstro totalmente modificado com garras afiadas que não aguenta mais se manter em duas pernas.');
    prompt();
    process.stdout.write('E no momento em que você se sente recuperado das lesões, a besta está na sua frente, mostrando uma agressividade fora do comum.');
    prompt();
    process.stdout.write('Se quiser resgatar seus entes, terá que lutar.');
    prompt();

    // Acontecimento da luta contra o chefão final do jogo, marcando o fim da interação do jogador
    while (true) {
        if (!await executionerFight(mainChar, theExecutioner)) {
            console.log();
            if (verifyAnswer(prompt('Tentar novamente? S - sim ou N - não: ').toUpperCase()) === 'S') {
                mainChar.restoreHp(100);
                theExecutioner.restoreHp(400);
                continue;
            }

            console.warn('GAME OVER');
            process.exit();
        }

        break;
    }

    mainChar.restoreHp(100);

    // Finalização da história do jogo
    prompt();
    console.log();
    process.stdout.write('Um golpe final atravessa o corpo da fera, que é abatida na hora, sem qualquer hesitação.');
    prompt();
    process.stdout.write('Com isso, não pensa duas vezes antes de tirar cada um dos seus familiares dos tanques e arrastá-los até a sala do trono.');
    prompt();
    process.stdout.write('Com o tempo, eles acordam e você explica o que aconteceu, acalmando eles.');
    prompt();
    process.stdout.write('Repentinamente, é escutado um barulho de janela sendo quebrada e movimentações bruscas dentro do laboratório.');
    prompt();
    process.stdout.write('Ao entrar, o corpo do seu inimigo já não está mais lá e há manchas de sangue do local da luta até a janela quebrada.');
    prompt();
    process.stdout.write('A partir daquele momento, estava claro que o futuro seria extremamente incerto.');
    await delay(1000);
    process.stdout.write('.');
    await delay(1000);
    console.log();('.');
    await delay(1500);
    console.log();

    // Exibição dos créditos finais do jogo
    console.warn("UNKNOWN'S FATE");
    await delay(1500);
    console.log();
    process.stdout.write('A game by ')
    console.warn('André Lucas');
    await delay(1500);
    console.log();
    console.warn('THE END');
}

module.exports = level3;
