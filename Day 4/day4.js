



//  Sort

// Ordenar o conteudo
//  Crescente Decrescente

const arr = [10, 5, 25, 2, 99, 178, 94, 105]

console.log(arr.sort((num1, num2) => {
  return num1 - num2
}))


const items = [
    { name: "a", value: 30},
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'A', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
  ];
  
  // .localeCompare
  // localização - comparação
  // Numeros com base na posição das letras - ASCII
  items.sort((str1, str2) => {
    return str1.name.localeCompare(str2.name)
  })
  // O SORT ALTERA A ARRAY ORIGINAL! 
  // comparar str1.name com o str2.name
  
  // negativo - str1 antes str2
  // zero - equivalentes
  // positivo - str2 antes do str1
  
  
  console.log(items)

  // Utilizar o sort para ordenar strings SEM O LOCALE COMPARE
// Usa a Tabela ASCII

const arr = ["a", "z", "1", "/", "B","j", "H", "aA"]

arr.sort((a, b) => {
 if (a > b){
   return 1
 } else if (b > a) {
   return -1
 } 
  return 0
})

console.log(arr)
// COM OBJETOS - ORDENANDO POR UMA CHAVE ESPECIFICA: 

movies.sort((a, b) => {
 if (a.original_title > b.original_title){
   return 1
 } else if (b.original_title > a.original_title) {
   return -1
 } 
  return 0
})

console.log(movies)


//REDUCE

// O reduce serve para "reduzir" uma lista (array) de valores em um único valor

// Obter a somatória desses valores
const productPrices = [33.00, 120.00, 45.50, 2000.00]

productPrices.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber // O retorno da callback vai passar a ser o novo valor do acumulador na próxima execução do loop
}, 0)  // o segundo argumento do reduce é o valor inicial do acumulador. Por padrão, o acumulador têm como valor inicial o primeiro elemento da array

// Calculando média com o reduce

const avg = productPrices.reduce((accumulator, currentNumber, index, originalArr) => {
  
//   Checa se estamos no último elemento da array no loop
  if (index === originalArr.length - 1) {
    
//     Soma o valor do último elemento no acumulador
    accumulator += currentNumber
    
//     Retorna a divisão da somatória pela quantidade de elementos da array
    return accumulator / originalArr.length
  }
  
  return accumulator + currentNumber
}, 0)

console.log(avg)


// O reduce retorna um novo valor, NÃO RETORNA UMA NOVA ARRAY!
// Não altera a array original

const arr = ["pamonha", "goiaba", "feijao"]



const reduzido = arr.reduce((acc, currentElement) => {
  return acc + " " + currentElement 
}, "farinha")
      
     
      
console.log(reduzido)

/******************/

const arr = [10, 12, 25, 48, 2, 8, 1, 105, 98]

const reduzido = arr.reduce((acc, currentElement) => {
  return acc  + currentElement 
}, 0)
      
      
      
      
console.log(reduzido)