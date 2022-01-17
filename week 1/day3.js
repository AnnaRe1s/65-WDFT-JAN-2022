/* 
"SUMARIO"

LINHA 14 - FILTER
LINHA 43 - OBJETOS
LINHA 124 - EXEMPLO EM AULA 


*/ 
// Ale indica https://github.com/cezaraugusto/You-Dont-Know-JS



// FILTER

// Metodo de array
// Retornar um NOVO ARRAY FILTRADO
// Tamanho = Igual ou menor que o original
// NAO ALTERA O ORIGINAL
// VAMO TER UMA CONDIÇÃO > QUEM PASSAR TA DENTRO!
// O return do filter SEMPRE PRECISA SER uma comparação
// TRUE = currentElement entra na nova array
// FALSE = Ele não entra
// O FILTER NÃO VAI ALTERAR OS ELEMENTOS
// O array pode ser de qualquer coisa (string, numeros, objs, booleans, variaveis), DESDE QUE SEJA UM ARRAY!

const arr = [10, 21, 48, 77, 2, 55, 4, 9, 88, 91]

const num1 = 2
const num2 = 4

const newArr = arr.filter((currentElement) => {
  return currentElement < 10
})

console.log(newArr)






// OBJETOS

// Objetos literais (também chamados de dicionários) são estruturas de dados que organizam suas informações através de chaves únicas

// O objeto literal sempre é definido pelo par de chaves ({}) em volta, e cada valor está junto de uma chave, no esquema "chave: valor". As chaves de um objeto SEMPRE são strings. Separamos diferentes conjuntos de chave: valor em um objeto usando vírgulas (,)
const obj = {city: 'Indaiatuba', name: 'Pedro' }

// Os valores de uma chave dentro do objeto podem ser de qualquer tipo

const person = {
  name: 'Mario',
  isMarried: true, 
  address: {country: 'Italy', city: 'Napole'},
  favoriteFoods: ['Pasta', 'Wine', 'Pizza'],
  age: 60, 
}

// Acessando uma chave de um objeto

// Dot notation
console.log(person.name)

// Bracket notation
console.log(person["age"])

// Na bracket notation, podemos interpolar variável no nome da chave, enquanto que na dot notation isso não é possível

const key = 'isMarried'

console.log(person[key])

console.log(person.key) // Ao invés de interpolar a variável e procurar por "isMarried", o interpretador vai literalmente procurar por uma chave chamada "key", que não existe.

// Para adicionar uma nova chave com um novo valor, basta atribuir um valor pra essa nova chave

person.car = "Gol"

// Para atualizar o valor de uma chave, seguimos a mesma lógica

person.isMarried = false

// Para deletar uma chave, usamos o comando "delete"

delete person.car;

console.log(person)

// Métodos de objetos

console.log(Object.keys(person)) // Retorna uma array com todas as chaves do objeto como strings
console.log(Object.values(person)) // Retorna uma array com todos os valores do objeto

// Clones de objeto têm o mesmo problema das arrays: eles criam referência ao endereço de memória, e não uma cópia dos valores

const fruit = {name: 'Banana', color: 'Yellow', flavor: 'Sweet'}

const fruitClone = fruit;

delete fruitClone.flavor;

console.log(fruit) // { name: 'Banana', color: 'Yellow' }

// Para evitar isso, também usamos o spread

const fruitClone2 = {...fruit}

fruitCLone2.name = "Mango"

console.log(fruit) // { name: 'Banana', color: 'Yellow' }

const school = [
  {classRoomId: 1, students: ['Anna', 'Alexandre', 'Pedro']},
  {classRoomId: 2, students: ['Gustavo', 'Karen', 'Michael']},
  {classRoomId: 3, students: ['Ailton', 'Felipe', 'Caio']}
]

console.log(school[1].students[1]) // Karen




// EXEMPLO EM AULA 
const userProfile = {
    name: "Alexandre",
    age: 25,
    isCute: true,
    address: {
      street: "Rua Lalaland",
      n: 10,
      postalCode: 4000000
    }
  }
  
  
  const updateProfile = {
    field: "age",
    newContent: 26
  }
  
  
  function updateUserProfile (profile, updateObj) {
    profile[updateObj.field] = updateObj.newContent
    // userProfile[updateProfile.field]
  }
  
  updateUserProfile(userProfile, updateProfile)
  
  console.log(userProfile)
