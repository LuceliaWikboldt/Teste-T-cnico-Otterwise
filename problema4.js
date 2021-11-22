var axios = require("axios")

function getCep(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}

var dados = getCep(59619510)

dados.then(function(resposta){
    var endereco = `${resposta.data.logradouro} - ${resposta.data.bairro}, ${resposta.data.localidade}/${resposta.data.uf}`
    console.log(endereco)
})