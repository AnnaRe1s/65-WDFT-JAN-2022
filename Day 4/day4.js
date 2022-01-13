/* 
"SUMARIO"

LINHA 16 - SORT
LINHA 85 - REDUCE
LINHA 140 - KATAS


*/






//  Sort

// Ordenar o conteudo
//  Crescente Decrescente

const arr = [10, 5, 25, 2, 99, 178, 94, 105];

console.log(
  arr.sort((num1, num2) => {
    return num1 - num2;
  })
);

const items = [
  { name: "a", value: 30 },
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "A", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic" },
  { name: "Zeros", value: 37 },
];

// .localeCompare
// localização - comparação
// Numeros com base na posição das letras - ASCII
items.sort((str1, str2) => {
  return str1.name.localeCompare(str2.name);
});
// O SORT ALTERA A ARRAY ORIGINAL!
// comparar str1.name com o str2.name

// negativo - str1 antes str2
// zero - equivalentes
// positivo - str2 antes do str1

console.log(items);

// Utilizar o sort para ordenar strings SEM O LOCALE COMPARE
// Usa a Tabela ASCII

const arr = ["a", "z", "1", "/", "B", "j", "H", "aA"];

arr.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  }
  return 0;
});

console.log(arr);
// COM OBJETOS - ORDENANDO POR UMA CHAVE ESPECIFICA:

movies.sort((a, b) => {
  if (a.original_title > b.original_title) {
    return 1;
  } else if (b.original_title > a.original_title) {
    return -1;
  }
  return 0;
});

console.log(movies);




//REDUCE

// O reduce serve para "reduzir" uma lista (array) de valores em um único valor

// Obter a somatória desses valores
const productPrices = [33.0, 120.0, 45.5, 2000.0];

productPrices.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber; // O retorno da callback vai passar a ser o novo valor do acumulador na próxima execução do loop
}, 0); // o segundo argumento do reduce é o valor inicial do acumulador. Por padrão, o acumulador têm como valor inicial o primeiro elemento da array

// Calculando média com o reduce

const avg = productPrices.reduce(
  (accumulator, currentNumber, index, originalArr) => {
    //   Checa se estamos no último elemento da array no loop
    if (index === originalArr.length - 1) {
      //     Soma o valor do último elemento no acumulador
      accumulator += currentNumber;

      //     Retorna a divisão da somatória pela quantidade de elementos da array
      return accumulator / originalArr.length;
    }

    return accumulator + currentNumber;
  },
  0
);

console.log(avg);

// O reduce retorna um novo valor, NÃO RETORNA UMA NOVA ARRAY!
// Não altera a array original

const arr = ["pamonha", "goiaba", "feijao"];

const reduzido = arr.reduce((acc, currentElement) => {
  return acc + " " + currentElement;
}, "farinha");

console.log(reduzido);

/******************/

const arr = [10, 12, 25, 48, 2, 8, 1, 105, 98];

const reduzido = arr.reduce((acc, currentElement) => {
  return acc + currentElement;
}, 0);

console.log(reduzido);

/*************/


// KATAS
// https://www.codewars.com/kata/5a84d485742ba347b90006b7

function howManyGifts(maxBudget, gifts) {
  gifts.sort((a, b) => a - b);

  // Representar a quantidade de presentes que da pra comprar
  let count = 0;

  for (let i = 0; i < gifts.length; i++) {
    maxBudget = maxBudget - gifts[i];
    if (maxBudget >= 0) {
      count++;
    } else if (maxBudget <= 0) {
      return count;
    }
  }

  return count;
}

// OU

function howManyGifts(maxBudget, gifts) {
  // Ordenando para os mais baratos ficarem na frente
  gifts.sort((a, b) => a - b);

  // Representar a quantidade de presentes que da pra comprar
  // Fica fora do for porque precisamos dele no escopo global da função
  let count = 0;

  // Fazendo um loop para "comprar" 1 presente da array de cada vez
  for (let i = 0; i < gifts.length; i++) {
    // Efetivamente atualizando o valor do meu budget subtraindo o presente atual
    maxBudget = maxBudget - gifts[i];

    // Se o meu budget depois de atualizar for maior ou igual a zero, eu atualizo o contador
    if (maxBudget >= 0) {
      count++;

      // Se o meu budget depois de atualizar for menor ou igual a zero, retorno o contador e a função para de ser executada
    } else if (maxBudget <= 0) {
      return count;
    }
  }

  // Esse cara ta aqui, porque se der pra comprar tudo e sobrar dinheiro, a gente precisa retornar ainda assim (se tiver dinheiro pra comprar tudo e sobrar, ele não cai no else if)
  return count;
}

// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  const walkValues = { n: 1, s: -1, e: 99, w: -99 };

  // verificar "n" e "s"
  const eixoY = walk.filter((currentDirection) => {
    // O filter vai retornar um novo array com os elementos (direções) que passarem na condição
    return currentDirection === "n" || currentDirection === "s";
  });

  const resultY = eixoY.reduce((acc, currentDirection) => {
    return acc + walkValues[currentDirection];
  }, 0);

  if (resultY !== 0) {
    return false;
  }
  // verificar "e" e "w"

  const eixoX = walk.filter((currentDirection) => {
    return currentDirection === "e" || currentDirection === "w";
  });

  const resultX = eixoX.reduce((acc, currentDirection) => {
    return acc + walkValues[currentDirection];
  }, 0);

  if (resultX !== 0) {
    return false;
  }

  return true;
}

// OU

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  const walkValues = { n: 1, s: -1, e: -99, w: 99 };
  return (
    walk.reduce(
      (acc, currentDirection) => acc + walkValues[currentDirection],
      0
    ) === 0
  );
}


// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  arr.sort((a, b) => a-b)
  
  if (arr[0] === arr[1]) {
    return arr[arr.length - 1]
  } else {
    return arr[0]
  }
}

// OU
// OPERADOR TERNARIO

function findUniq(arr) {
  arr.sort((a, b) => a-b)

  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0]
}

// https://www.codewars.com/kata/5340298112fa30e786000688

// S/ Math.abs: 
function twosDifference(input){
 input.sort((a, b) => a - b)
 const result = [];
  for (let i = 0; i < input.length; i++){
    for (let j = 0; j < input.length; j++){
      if (input[j] - input[i] === 2){
          result.push([input[i], input[j]])
      }
    }
    }
  
return result
}

// C/ Math.abs: 

function twosDifference(input){
const result = []
input.sort((a,b) => a - b)
for(let i = 0; i < input.length; i++){
for(let j = i + 1; j < input.length; j++){
if(Math.abs(input[i] - input[j]) === 2){
result.push([input[i], input[j]])
}
}
}
// result.sort((a,b) => a[0] - b[0])
return result
} 