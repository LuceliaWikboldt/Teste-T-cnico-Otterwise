

let obj = [
    { id: 1, nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { id: 2, nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { id: 3, nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { id: 4, nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { id: 5, nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { id: 6, nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { id: 7, nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
]

console.log("cres", crescente(obj))
console.log("decres", decrescente(obj))

function decrescente(itens) {
    let cres = []
    for (let i = 0; i < 5; i++) {
        cres = itens.filter(iten => iten.nome)
            .sort((a, b) => a.salario - b.salario)
    }
    return cres
}

function crescente(itens) {
    let cres = []
    for (let i = 0; i < 5; i++) {
        cres = itens.filter(iten => iten.nome)
            .sort((b, a) => a.salario - b.salario)
    }
    return cres
} 
