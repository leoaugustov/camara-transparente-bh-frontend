export default function buscarDados(caminho) {
    return fetch(`http://192.168.1.55:8080/api${caminho}`)
        .then(resposta => resposta.json())
}