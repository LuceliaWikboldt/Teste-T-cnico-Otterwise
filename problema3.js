var obj = {
    nome: "Analu dos santos baptista",
    cpf: "14776213931",
    telefone: "8328008258"
}

console.log(formatedName(obj.nome))
console.log(formatedCpf(obj.cpf))
console.log(formatedTelefone(obj.telefone))
function formatedName(nome) {
    var subst = nome.toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); })
    return subst
}

function formatedCpf(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

function formatedTelefone(telefone) {
    var cleanPhone = ('' + telefone).replace(/\D/g, '')
    var match = cleanPhone.match(/^(\d{2})(\d{4})(\d{4})$/)
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return telefone
}

