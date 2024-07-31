// Importação os objetos e funções utilizados nessa fase do jogo
// Foi importado apenas o mínimo necessário para cada fase
const prompt = require('prompt-sync')();
const verifyAnswer = require('../utils/verify-answer');
const delay = require('../utils/delay');
const fight = require('../utils/fight/fight');

const basicSword = require('../items/basic-sword');
const executionerAxe = require('../items/executioner-axe');
const leatherArmor = require('../items/leather-armor');

const theLittleOne = require('../characters/the-little-one');

// Criação da função que inicializa a primeira fase do jogo
async function level1 (mainChar) {

    // Tela de início do jogo
    console.warn("UNKNOWN'S FATE");
    await delay(3000);
    console.log('------------------');
    console.log('A pt-BR text RPG game');
    await delay(3000);
    console.log('------------------');
    console.log('I hope you enjoy!');
    console.log('------------------');
    process.stdout.write('Loading.');
    await delay(750);
    process.stdout.write('.');
    await delay(750);
    process.stdout.write('.');
    await delay(6000);
    console.clear();

    // Instrução de uso da tecla Enter para enviar um prompt genérico ao terminal e passar para a próxima linha
    process.stdout.write('Aperte Enter para avançar.')
    prompt();
    // Início da história do jogo
    process.stdout.write('Você acorda, levemente tonto e nauseado, e lentamente abre seus olhos. Tenta muito, mas não se lembra de momento algum antes do seu sono.');
    prompt();
    process.stdout.write('À sua volta, paredes escuras de tijolos, uma cama bagunçada e algemas presas à parede. À sua frente, grades de celas e uma porta aberta.');
    prompt();
    process.stdout.write('Claramente, você não está em seus melhores dias, mas decide sair pela porta e encontrar respostas.');
    prompt();
    process.stdout.write('Ao sair, segue o único caminho, um extenso corredor pela direita que ostenta diversas celas idênticas à sua, mas fechadas.');
    prompt();
    console.log('Chegando ao final do corredor, há uma espada escorada na parede à esquerda. Sua bainha está desgasta e sua lâmina de ferro parece quebradiça.');
    console.log(`Descrição - ${basicSword.description}.`);
    console.log();

    // Essa será uma estrutura usada recorrentemente durante o jogo
    // Caso a resposta seja "s" ou "S", o primeiro bloco é executado
    // Caso seja "n" ou "N", o segundo bloco é executado
    // Isso representa uma mecânica de escolha de caminhos pelo jogador, usando apenas respostas positivas ou negativas
    if (verifyAnswer(prompt('Deseja coletá-la? S - sim ou N - não: ').toUpperCase()) === 'S') {
        console.log();
        process.stdout.write('A espada empoeirada é erguida e você se apodera dela.');
        prompt();
        // Neste exemplo, a "Espada Básica" é automaticamente definica como a arma principal
        mainChar.setWeapon(basicSword);
        process.stdout.write('Assim sendo, subiu por uma escada caracol á direita do corredor.');
        prompt();
    } else {
        console.log();
        process.stdout.write('"Acho que não é necessário" pensou, e subiu por uma escada caracol ao lado direito do corredor.');
        prompt();
    }

    // Continuação da história do jogo
    process.stdout.write('Após uma escura subida, você chega ao topo, que leva a outro corredor, consideravelmente menor que o último.');
    prompt();
    process.stdout.write('Entretanto, no meio dele, há um homem dormindo em uma cadeira de madeira encostada na parede do mesmo corredor, uma mochila de couro ao seu lado.');
    prompt();
    process.stdout.write('Parece um guarda do local, o que pode representar uma ameaça mais tarde.');
    prompt();
    console.log();

    // Aplicação da estrutura de resposta positiva ou negativa
    if (verifyAnswer(prompt('Ele deve ser finalizado? S - sim ou N - não: ').toUpperCase()) === 'S') {
        console.log();
        // Aqui, é usada uma estratégia de que, caso o jogador tenha escolhido ou não coletar a espada,
        // a jornada se altera para criar dinamicidade
        // Essa presença ou ausência é confirmada pelo uso do método "some()" aplicado no inventário
        if (mainChar.inventory.some(item => item.name === basicSword.name)) {
            process.stdout.write('De repente, você acha que a melhor forma de lidar com a situação é dar um fim sagaz à ela.');
            prompt();
            process.stdout.write('Seu braço recua em um movimento de remada e silenciosamente apaga o inimigo, que não retorna sinais de vida. Um trabalho rápido.');
            prompt();
            process.stdout.write('Já se tornou um assassino, por que não um ladrão, não é mesmo?');
            prompt();
            console.log();
            // O padrão "\x1b[1m...\x1b[0m" (negrito) é usado para demonstrar itens manipulados no inventário
            process.stdout.write('\x1b[1mMochila\x1b[0m ');
            process.stdout.write('foi recolhida.');
            prompt();
            console.log();
            process.stdout.write('\x1b[1mEspada básica \x1b[0m');
            process.stdout.write('foi adicionada à mochila.');
            prompt();
            console.log();
            mainChar.showInventory();
            prompt();
            console.log();
            console.log('Depois do seu ato de pura crueldade, sua frieza permite apenas caminhar até a porta enferrujada no fim do cômodo e abri-la.');
        } else {
            process.stdout.write('Você envolve seu braço pelo pescoço do inimigo e arrisca um mata-leão.');
            prompt();
            process.stdout.write('Mesmo com uma técnica medíocre, o ato tem sucesso e o inimigo é apagado.');
            prompt();
            process.stdout.write('"Espero que ele não tenha morrido" pensou.');
            prompt();
            process.stdout.write('Ao olhar para o lado, percebe que a mochila pode ser uma grande ajuda.');
            prompt();
            console.log();
            process.stdout.write('\x1b[1mMochila\x1b[0m ');
            process.stdout.write('foi recolhida.');
            prompt();
            console.log();
            mainChar.showInventory();
            console.log();
            process.stdout.write('Depois do furto, seus passos te conduzem até o final do cômodo, onde há uma porta enferrujada, que você abre de forma cuidadosa.');
            prompt();
        }
    } else {
        console.log();
        process.stdout.write('Tentar um combate contra o inimigo seria muito arriscado, então você apenas se esgueira sorrateiramente pelo corredor.');
        prompt();
        process.stdout.write('Ao passar do lado da mochila, você tem a ideia que ela pode ser um bom auxílio.');
        prompt();
        console.log();
        process.stdout.write('\x1b[1mMochila\x1b[0m ');
        process.stdout.write('foi recolhida.');
        prompt();
        if (mainChar.inventory.some(item => item.name === basicSword.name)) {
            console.log();
            process.stdout.write('\x1b[1mEspada básica \x1b[0m');
            process.stdout.write('foi adicionada à mochila.');
            prompt();
        }
        console.log();
        mainChar.showInventory();
        prompt();
        console.log();
        process.stdout.write('Sem fazer qualquer barulho, seus passos te conduzem até uma porta enferrujada no final do cômodo.');
        prompt();
    }

    // Continuação da história do jogo
    process.stdout.write('Ao fechá-la de forma silenciosa e entrar no próximo cômodo, duas vozes ao fundo são perceptíveis.');
    prompt();
    process.stdout.write('Adentrando mais na sala, entende-se que seja um armazém de equipamentos de combate e de assassinato.');
    prompt();
    process.stdout.write('Mesmo que os donos das vozes estejam escondidos por trás de grandes aparelhos de tortura, como guilhotinas e damas-de-ferro, você se aproxima agachado em curtos passos, para não ser percebido.');
    prompt();
    process.stdout.write('Finalmente, os misteriosos homens podem ser vistos:');
    prompt();
    process.stdout.write('Um deles é alto e possui vestes escuras, um capuz e um machado aterrorizante maior que seu próprio tronco, como de um carrasco medieval.');
    prompt();
    process.stdout.write('O outro, de forma antagônica, é baixo e se veste com cores claras, com o que parece ser o uniforme dos guardas do local.');
    prompt();
    process.stdout.write('Suas vozes são abafadas e tentam ser discretas:');
    prompt();
    process.stdout.write('O "Carrasco" - Eu já te disse, o Rei vai ser derrubado facilmente com o nosso plano! Não há escapatória para ele.');
    prompt();
    process.stdout.write('O "Pequeno" - Não sei... é muito arriscado...');
    prompt();
    process.stdout.write('O "Carrasco" - Se decida! Você está ou não está comigo?');
    prompt();
    process.stdout.write('O "Pequeno" - Estou, mas ainda não sei o que aquilo tem a ver com o seu tal plano.');
    prompt();
    process.stdout.write('E o mesmo aponta para um bengala de cor marrom, apoiada na parede entre ambos.');
    prompt();
    process.stdout.write('Imediatamente ao ver o objeto, você sente uma forte pontada no próprio peito, o que o faz cair para trás e esbarrar na guilhotina localizada ao seu lado.');
    prompt();
    process.stdout.write('Esse impacto causa um barulho enorme, o qual alerta os presentes na sala.');
    prompt();
    process.stdout.write('"Quem está ai!?" gritou ferozmente o carrasco.');
    prompt();
    process.stdout.write('E com uma única batida lateral do seu machado, arranca a máquina de tortura do meio da sala, revelando sua posição.');
    prompt();
    process.stdout.write('"Ah, então você estava nos espionando!", reforça ele, "Hora de cortar umas cabeças...".');
    prompt();
    process.stdout.write('"Pode deixar comigo, eu cuido desse intrometido!", e o menor guarda pula para frente, certo de que irá finalizar você de forma rápida.');
    prompt();
    process.stdout.write('Portanto... hora de lutar!');
    prompt();

    // Essa estrutura será usada para as lutas gerais durante o jogo
    // O loop while garante que a função da luta seja chamada sempre que o jogador quiser tentar novamente
    // Essa luta em específico é a introdução, com o chefão da primeira fase
    while (true) {
        // Caso a função da luta retorne "false", ela será identificada como uma derrota
        // A partir dessa informação, o jogador poderá escolher se quer tentar novamente ou desistir
        if (!await fight(mainChar, theLittleOne)) {
            if (verifyAnswer(prompt('Tentar novamente? S - sim ou N - não: ').toUpperCase()) === 'S') {
                // Caso tente novamente, os pontos de vida da luta serão restaurados
                mainChar.restoreHp(100);
                theLittleOne.restoreHp(115);
                continue;
            }

            console.warn('GAME OVER');
            process.exit();
        }

        break;
    }

    // Assim que terminar uma luta, os pontos de vida do personagem principal sempre serão restituídos ao máximo
    mainChar.restoreHp(100);

    // Continuação da história do jogo
    prompt();
    console.log();
    process.stdout.write('Após o seu derradeiro golpe, O "Pequeno" cai subitamente para trás e parece ter seu fim.');
    prompt();
    process.stdout.write('O "Carrasco" - Ah! Sabia que ele era inútil, tenho que escolher melhor meus lacaios!');
    prompt();
    process.stdout.write('O "Carrasco" - Eu sei que você esperava uma ação por agora, mas não posso perder tempo. Até mais!');
    prompt();
    process.stdout.write('E como um raio, puxa a bengala da parede e corre pela porta ao fundo da sala.');
    prompt();
    process.stdout.write('Não seria uma boa ideia persegui-lo, afinal você seria avistado.');
    prompt();
    process.stdout.write('A melhor estratégia seria procurar equipamentos próximos e se esconder antes que reforçoes viessem.');
    prompt();
    process.stdout.write('Portanto, seus olhos averiguam o local em volta e rapidamente avistam dois itens:');
    prompt();
    console.log('Encima da mesa principal de equipamentos, pode-se ver um machado, como os de próprios carrascos, mas consideravelmente mais minimalista.');
    process.stdout.write(`Descrição - ${executionerAxe.description}`);
    prompt();
    console.log();

    if (verifyAnswer(prompt('Deseja coletá-lo? S - sim ou N - não: ').toUpperCase()) === 'S') {
        console.log();
        process.stdout.write('Com certeza, essa aquisição será extremamente útil!');
        prompt();
        console.log();
        process.stdout.write('\x1b[1mMachado De Carrasco\x1b[0m ');
        process.stdout.write('foi adicionado à mochila.');
        prompt();
        console.log();

        // Neste exemplo, é usada a verificação com "some()" para que, caso haja a "Espada Básica" no
        // inventário, ela seja descartada
        if (mainChar.inventory.some(item => item.name === basicSword.name)) {
            process.stdout.write('\x1b[1mEspada Básica\x1b[0m ');
            console.log();('foi descartada da mochila.');
            console.log();
        }

        mainChar.setWeapon(executionerAxe);
        mainChar.showInventory();
        prompt();
        console.log();
    } else {
        console.log();
        process.stdout.write('Talvez atraia energias negativas... você ignora a ferramenta.');
        prompt();
        console.log();
    }

    // Nesta parte, há a introdução da armadura ao jogador
    console.log('Além disso, há, ao pé da mesma mesa, uma vestimenta de couro que se assemelha muito àquelas usadas pelos guardas, mesmo que mais pesada.');
    process.stdout.write(`Descrição - ${leatherArmor.description}`);
    prompt();
    console.log();

    if (verifyAnswer(prompt('Deseja coletá-la? S - sim ou N - não: ')).toUpperCase() === 'S') {
        console.log();
        mainChar.setArmor(leatherArmor);
        process.stdout.write('Você veste a armadura, sente o corpo pesar, mas sabe que isso pode trazer mais segurança.');
        prompt();
        console.log();
        process.stdout.write('\x1b[1mArmadura De Couro\x1b[0m ');
        process.stdout.write('foi adicionada à mochila.');
        prompt();
        console.log();
        mainChar.showInventory();
        prompt();
        console.log();
    } else {
        console.log();
        process.stdout.write('Você entende que é melhor continuar com suas próprias vestes, então não segue com a ideia de recolher a armadura.');
        prompt();
        console.log();
    }

    // Continuação da história do jogo
    process.stdout.write('De repente, é escutado O "Carrasco" gritando, ao longe, "Ele está na sala dos equipamentos, peguem-no!"');
    prompt();
    process.stdout.write('Frenetica e furtivamente, você sai pela porta dos fundos e continua por outro corredor à direita, lado oposto ao do que os guardas estavam vindo.');
    prompt();
    process.stdout.write('Em um tempo surpreendente, encontra-se escondido em uma sala pequena e escura.');
    prompt();
}

module.exports = level1;
