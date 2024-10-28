
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

/* criar uma função assíncrona - executar algo em “segundo plano” */
async function visualizarInformacoesGlobais() {

    /* avaScript realize requisições entre uma aplicação web e recursos externos (API) */
    const res = await fetch(url)

    const dados = await res.json()

    console.log(dados);

}

visualizarInformacoesGlobais()
