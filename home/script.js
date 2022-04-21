confirm('Voce assume os riscos de continuar?')
var nome = prompt('Qual o seu nome?')
alert(`Seja bem vindo ${nome}, é um prazer ter você aqui `)


var counter = 0;

function alterna(c) {
    var imgName = document.querySelector("#jogo > img").src;
    if (imgName.indexOf('frente') > 0) {
        document.querySelector('#jogo > img').src = 'img/0.gif';
    } else {
        document.querySelector('#jogo > img').src = 'img/1.gif'
    }
    counter++;
    console.log(counter);
    if (counter >= 5) {
        clearInterval(chave);
    }
}

chave = setInterval(alterna, 2000);