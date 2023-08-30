const axios = require('axios').default;

const spanPergunta = document.getElementById('pergunta');
const spanResposta = document.getElementById('resposta');

function geraPiada() {
    axios.get("https://v2.jokeapi.dev/joke/Any?lang=pt").then(response => {
        const piada = response.data;
        spanPergunta.innerText = piada.setup;
        spanResposta.innerText = piada.delivery;
    })
}

geraPiada();