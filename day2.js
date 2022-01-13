/* 
"SUMARIO"
 
LINHA 13 - Funções
LINHA 99 - Arrays
LINHA 234 - Map



*/ 


// Funções

// Funções são sub-rotinas, ou seja, trechos de código que precisamos usar frequentemente, e são abstraído pra dentro de funções para evitar repetição de código.

// Toda função tem dois momentos: sua declaração (onde são definidas as tarefas que essa função vai executar, porém por padrão elas ainda não são executadas) e sua invocação (onde efetivamente as tarefas são executadas e opcionalmente recebemos um valor de retorno). A mesma função pode ser invocada várias vezes.

// Declaração (ou definição) de função

//. palavra chave function é obrigatória
    function func() /* "func" é o nome da função e é escolhido por nós. O par de parênteses "()" é obrigatório */ {
      // Dentro das chaves, temos o chamado escopo da função. Aqui dentro que são executadas as tarefas da função
    }

//     Função para somar dois inteiros positivos maiores que 0

              // "a" e "b" são parâmetros, ou seja, entradas, para a função. a e b são variáveis que guardarão os valores passados como input pra essa função no momento da invocação. Nomes de parâmetros são escolhidos por nós
    function sum(a, b) {
//         Checar se os dois números são vazios e retorna 0 nesse caso
      if (!a && !b) {
        return 0 // O 'return' é um comando que ENCERRA a execução da função, ou seja, nenhuma linha de código abaixo do return será executada. Ele também define o valor de retorno da função
      }
      
      if (!a) {
        return b + 0
      }
      
      if (!b) {
        return a + 0 // O return só pode retornar valores únicos ou expressões. Caso você precise retornar vários valores primitivos, obrigatoriamente você precisar retornar uma array ou um objeto
      }
      
      return a + b // IMPORTANTE: nunca coloque linhas de código abaixo de um return, pois essa linha nunca vai ser executada
    }

//   Invocação (ou chamada) da função

// Na invocação, usamos o nome que demos previamente pra função (a palavra entre "function" e os parênteses) acompanhada de par de parênteses "grudados" à ela, onde entram os "argumentos" da função (ou seja, os parâmetros ou entradas). Caso a função tenha um valor de retorno, podemos gravar esse valor de retorno em uma variável
const result = sum(3, 4)

console.log(result)

// No Javascript, um valor de retorno é exatamente igual (===) à um valor correspondente

console.log(sum(4, 4) === 8) // true

// Funções puras

// Uma função pura é uma função que dada a mesma entrada, retornará sempre a mesma saída

sum(3, 6) // Função pura, pois essa chamada SEMPRE vai retornar 9

Date.now() // Essa função não é pura, pois o valor de retorno dela depende da hora atual

// Diferentes tipos de declaração de função

// Function declaration

function nomeDaFunc() {
  console.log('Sou uma declaração de função')
}

nomeDaFunc()

// Function expression

const nomeDaFunc2 = function() {
  console.log('Sou uma função anônima')
}

nomeDaFunc2()

// Arrow function
// Nas arrow functions, substituímos a palavra-chave "function" a esquerda por uma seta (=>) a direita.
const arrowFunc = () => {
  console.log('Sou uma arrow function')
}

// Nas arrow functions, quando temos somente uma linha no escopo, podemos omitir as chaves e a palavra-chave "return", e o que estiver a direita da seta será automaticamente retornado

const makeUpperCase = (string) => string.toUpperCase()

makeUpperCase('ola')


//*************************************************************************************** */


// Arrays

// Arrays (também chamadas de listas) são estruturas de dados em que os dados são organizados pela sua posição na sequência. Para acessarmos um dado dentro da lista, precisamos saber sua posição

//                0    1    2
const strings = ["a", "b", "c"] 
// Arrays sempre começam a contar as posições do 0

// Pra acessar um elemento da array, usamos sua posição ou índice
strings[0] // "a"

// Cada porção separada pela vírgula é chamada de elemento, e sua posição na lista (contando a partir do 0) é chamada de índice
const fruits = ['banana', 'maçã', 'abacaxi']
//                 0         1         2

// Para acessar o elemento "maçã", precisamos acessar a posição 1. Sempre acessamos um índice específico usando os colchetes ([]) à frente da variável que contém a array
console.log(fruits[1])

// Arrays podem guardar dados de qualquer tipo, inclusive "misturar" dados de tipos diferentes

const mixed = ['oi', 34, false, ['ola', 32], {chave: 'hello'}]

let drinks = ['chá', 'café', 'água', 'refrigerante']


// Adicionar um novo elemento no final da array 

const pushResult = drinks.push('suco') // .push() é um método de array. Todo método de array é chamado após a variável que contém a array, e geralmente modificam a array original ou retornam uma nova array modificada

// O push retorna o novo tamanho da array após a inserção
console.log(pushResult)

console.log(drinks)

// Adicionar um elemento no início da array
drinks.unshift('cerveja')

console.log(drinks)

// Adicionar um elemento em um índice específico

drinks.splice(3, 0, 'vinho') // Adicionando o novo elemento vinho no índice 3. O antigo elemento no índice 3 passará a ocupar o índice 4.

console.log(drinks)

// Retirar elementos de uma array

// Retirar o último elemento

drinks.pop()

console.log(drinks)

// Retirar o primeiro elemento
drinks.shift()

console.log(drinks)

// Retirar um elemento em um índice específico

drinks.splice(2, 1) // A partir do índice 2, retire 1 elemento

console.log(drinks)

// Mesclar (concatenar) diferentes arrays

const alcoholicBeverages = ['cerveja', 'vinho', 'cachaça']

drinks = drinks.concat(alcoholicBeverages) // O concat NÃO modifica a array original, ao invés disso, retorna uma nova array. Para transformarmos a array original, precisamos re-atribuí-la

console.log(drinks)

// Clonar (criar uma cópia) uma array

let a = 'alguma coisa'
const b = a
a = 'outra coisa'
console.log(b)

// CUIDADO: por padrão, quando atribuímos uma array ou um objeto pra uma variável, não estamos copiando o valor dessa array, e sim criando uma referência (ou ponteiro) para o endereço de memória dessa array. Isso faz com que as duas variáveis sejam sincronizadas, e todo modifição em uma também afeta a outra
const states = ['São Paulo', 'Bahia']
const statesClone = states

statesClone.push('Rio de Janeiro')

console.log(states)

// Para evitar esse comportamento, podemos usar o operador spread (espalhamento)

const statesClone2 = [...states] // Os colchetes são uma nova array, e os "..." representam o operador spread, que "espalha" cada elemento da array original dentro da nova array

statesClone2.pop()
console.log(statesClone2)
console.log(states)

// Percorrendo arrays

const cities = ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Curitiba']

// Para percorrer arrays, precisamos de um loop. Geralmente, usamos o for

for (let i = 0; i < cities.length; i++) {
  console.log(`Bem-vindo(a) à cidade de ${cities[i]}`)
}

// Percorrendo matrizes (arrays de arrays ou arrays bidimensionais)

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// Imprimir no console a matriz em formato de tabela

let table = '\n'

for (let row = 0; row < matrix.length; row++) {
  for (let column = 0; column < matrix[row].length; column++) {
    // Verifica se o j (contador da coluna) chegou na última coluna (o tamanho da linha - 1). Quando ele chega na última coluna, quebramos a linha
    if (column === matrix[row].length - 1 ) {
      table += `  ${matrix[row][column]}`
      table += '\n' // \n é um caracter especial que signifca quebra de linha
    } else {
      table += `  ${matrix[row][column]}` // o elemento atual da linha na coluna atual
    }
    
  }
}

console.log(table)




// MAP
const arr = [1, 3, 5, 8, 9, 2, 14, 15, 24, 38, 61]

// O map vai executar uma função callback para cada elemento da array!
// O map vai retornar uma array de resultados da execução dessa callback!

// Sintaxe do MAP

// Obs: O a callback do map pode receber até 3 parametros

// A callback do map recebe até 3 parametros


const arrayMapeada = arr.map((elementoAtual) => {
  return elementoAtual * 5
})

// console.log(arr)
// console.log(arrayMapeada)

const stock = [
    {
      product: "Macarrão",
      quantity: 10
    },
     {
      product: "Pão de hot-dog",
      quantity: 5
    },
     {
      product: "Salsicha",
      quantity: 10
    },
     {
      product: "Batata palha",
      quantity: 8
    },
     {
      product: "Leite condensado",
      quantity: 1
    },
     {
      product: "Ketchup",
      quantity: 4
    },
     {
      product: "Mostarda",
      quantity: 10
    },
     {
      product: "Maionese",
      quantity: 6
    }
  ]
  
  
  
  
  const newArray = stock.forEach((currentElement, index) => {
    stock[index].quantity = currentElement.quantity + 10
    return "Retorno algo"
  })
  
  console.log(newArray)






  