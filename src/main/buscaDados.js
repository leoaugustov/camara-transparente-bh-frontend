export default function buscarDados(caminho) {
    return fetch(`${process.env.REACT_APP_URL_SERVIDOR}${caminho}`)
        .then(resposta => resposta.json())
}