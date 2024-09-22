function choose(option) {
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');

    if (option === 'enter') {
        story.innerHTML = 'Você entra na mansão e a porta se fecha atrás de você. Você ouve um barulho estranho vindo do porão. O que você faz?';
        choices.innerHTML = `
            <button onclick="choose('basement')">Ir para o porão</button>
            <button onclick="choose('upstairs')">Subir as escadas</button>
        `;
    } else if (option === 'leave') {
        story.innerHTML = 'Você decide ir embora, mas sente que algo está te observando. Você corre para o carro e vai embora rapidamente. Fim.';
        choices.innerHTML = '<button onclick="restart()">Recomeçar</button>';
    } else if (option === 'basement') {
        story.innerHTML = 'Você desce para o porão e encontra uma porta trancada. Você ouve sussurros do outro lado. O que você faz?';
        choices.innerHTML = `
            <button onclick="choose('open_door')">Abrir a porta</button>
            <button onclick="choose('run')">Correr de volta</button>
        `;
    } else if (option === 'upstairs') {
        story.innerHTML = 'Você sobe as escadas e encontra um corredor escuro com várias portas. O que você faz?';
        choices.innerHTML = `
            <button onclick="choose('first_door')">Abrir a primeira porta</button>
            <button onclick="choose('second_door')">Abrir a segunda porta</button>
        `;
    } else if (option === 'open_door') {
        story.innerHTML = 'Você abre a porta e encontra um quarto cheio de velas acesas e um livro antigo no centro. O que você faz?';
        choices.innerHTML = `
            <button onclick="choose('read_book')">Ler o livro</button>
            <button onclick="choose('leave_room')">Sair do quarto</button>
        `;
    } else if (option === 'run') {
        story.innerHTML = 'Você corre de volta para a entrada, mas a porta está trancada. Você está preso na mansão. Fim.';
        choices.innerHTML = '<button onclick="restart()">Recomeçar</button>';
    } else if (option === 'first_door') {
        story.innerHTML = 'Você abre a primeira porta e encontra um quarto vazio. De repente, a porta se fecha atrás de você. O que você faz?';
        choices.innerHTML = `
            <button onclick="choose('search_room')">Procurar no quarto</button>
            <button onclick="choose('wait')">Esperar</button>
        `;
    } else if (option === 'second_door') {
        story.innerHTML = 'Você abre a segunda porta e encontra uma escada que desce para um porão escuro. O que você faz?';
        choices.innerHTML = `
            <button onclick="choose('descend')">Descer a escada</button>
            <button onclick="choose('close_door')">Fechar a porta</button>
        `;
    } else if (option === 'read_book') {
        story.innerHTML = 'Você começa a ler o livro e sente uma presença sombria ao seu redor. Você desmaia e nunca mais acorda. Fim.';
        choices.innerHTML = '<button onclick="restart()">Recomeçar</button>';
    } else if (option === 'leave_room') {
        story.innerHTML = 'Você sai do quarto e encontra um corredor diferente do que você entrou. O que você faz?';
        choices.innerHTML = `
            <button onclick="choose('explore')">Explorar o corredor</button>
            <button onclick="choose('return')">Tentar voltar</button>
        `;
    } else if (option === 'search_room') {
        story.innerHTML = 'Você procura no quarto e encontra uma chave. O que você faz?';
        choices.innerHTML = `
            <button onclick="choose('use_key')">Usar a chave</button>
            <button onclick="choose('keep_key')">Guardar a chave</button>
        `;
    } else if (option === 'wait') {
        story.innerHTML = 'Você espera, mas nada acontece. Você começa a sentir que está sendo observado. O que você faz?';
        choices.innerHTML = `
            <button onclick="choose('search_room')">Procurar no quarto</button>
            <button onclick="choose('shout')">Gritar por ajuda</button>
        `;
    } else if (option === 'descend') {
        story.innerHTML = 'Você desce a escada e encontra um porão cheio de velas acesas e um livro antigo no centro. O que você faz?';
        choices.innerHTML = `
            <button onclick="choose('read_book')">Ler o livro</button>
            <button onclick="choose('leave_basement')">Sair do porão</button>
        `;
    } else if (option === 'close_door') {
        story.innerHTML = 'Você fecha a porta e decide explorar o corredor. O que você faz?';
        choices.innerHTML = `
            <button onclick="choose('explore')">Explorar o corredor</button>
            <button onclick="choose('return')">Tentar voltar</button>
        `;
    } else if (option === 'use_key') {
        story.innerHTML = 'Você usa a chave para abrir uma porta secreta e encontra um tesouro escondido. Parabéns, você encontrou o final feliz! Fim.';
        choices.innerHTML = '<button onclick="restart()">Recomeçar</button>';
    } else if (option === 'keep_key') {
        story.innerHTML = 'Você guarda a chave e decide explorar mais. O que você faz?';
        choices.innerHTML = `
            <button onclick="choose('explore')">Explorar o corredor</button>
            <button onclick="choose('return')">Tentar voltar</button>
        `;
    } else if (option === 'shout') {
        story.innerHTML = 'Você grita por ajuda, mas ninguém responde. Você está preso na mansão. Fim.';
        choices.innerHTML = '<button onclick="restart()">Recomeçar</button>';
    } else if (option === 'explore') {
        story.innerHTML = 'Você explora o corredor e encontra uma porta secreta. O que você faz?';
        choices.innerHTML = `
            <button onclick="choose('open_secret_door')">Abrir a porta secreta</button>
            <button onclick="choose('ignore')">Ignorar a porta</button>
        `;
    } else if (option === 'return') {
        story.innerHTML = 'Você tenta voltar, mas o corredor parece infinito. Você está preso na mansão. Fim.';
        choices.innerHTML = '<button onclick="restart()">Recomeçar</button>';
    } else if (option === 'open_secret_door') {
        story.innerHTML = 'Você abre a porta secreta e encontra um tesouro escondido. Parabéns, você encontrou o final feliz! Fim.';
        choices.innerHTML = '<button onclick="restart()">Recomeçar</button>';
    } else if (option === 'ignore') {
        story.innerHTML = 'Você ignora a porta e continua explorando, mas nunca encontra uma saída. Você está preso na mansão. Fim.';
        choices.innerHTML = '<button onclick="restart()">Recomeçar</button>';
    }
}

function restart() {
    location.reload();
}
