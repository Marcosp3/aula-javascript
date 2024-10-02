//PARTE 1 - Array


const pessoas = ["Igor", "Pedro", "Carlos", "Carla", "Maria"]

console.log(pessoas)
console.log(pessoas[0]) //Igor
console.log(pessoas[1]) //Pedro
console.log(pessoas[2]) //Carlos
console.log(pessoas[3]) //Carla
console.log(pessoas[4]) //Maria
console.log(pessoas[50]) //Undefine => Não existe


const nota1 = [10, 6, 5, 8]
const test = ["Teste", 10, true, "Ola", null]
console.log(test)


console.log(pessoas.length) //Tamanho de elementos


pessoas.push("Mario") //Adiciona um elemento no final
console.log(pessoas)


pessoas.unshift("Bowser") //Adiciona um elemento no começo
console.log(pessoas)


pessoas.pop() //Remove o elemento no final
console.log(pessoas)


pessoas.shift() //Remove o elemento no começo
console.log(pessoas)


//EXERCICIO 1 - Criar um array com vários números e calcular a média


const notas = [5, 12, 8, 4, 14, 6]

let soma1 = 0
for(let i = 0; i < notas.length; i++){
    soma1 += notas[i] // soma = soma + notas[i]
}

console.log(soma1)

const calcMediaArr = (notas) => {
    let soma2 = 0
    for (let i = 0; i < notas.length; i++) {
        soma2 += notas[i]
    }
    return soma2 / notas.length
}


//EXERCÍCIO 2 - Array para mostrar quantidade de números negativos e a soma de números positivo


const nums = [-10, 2, 100, -1, 40, -2, 0]

let qtdNumsNegativos = 0
let soma3 = 0
for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num < 0) {
        qtdNumsNegativos++
    } else {
        soma3 += num
    }
}

console.log("Soma dos numeros positivos é:", soma3)
console.log("qtd dos numeros negativos é:", qtdNumsNegativos)


//EXERCÍCIO 3 - Criar um array, utilize um "for" para buscar a posição de um valor dentro do array


const num = [10, 34, 78, 3, 7, 10, 2, 90, 9, 0]

const n = 9 //opção 1
let pos = -1
for(let i = 0; i < num.length; i++) {
    if (num[i] === n) pos = 1
}
console.log(pos)

//opção 2
const findIndex = (arr, n) => { 
    for(let j = 0; j < arr.length; j++) {
        if (arr[j] === n) return j
    }
    return - 1
}

console.log(findIndex(num, 100))

num.findIndex()