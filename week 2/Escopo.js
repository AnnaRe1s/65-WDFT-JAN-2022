// ESCOPO

// Escopo global
const someVar = 'Hello world'

// O acesso à variáveis só acontece de "cima" pra "baixo" no contexto de escopos, e nunca de "baixo" pra "cima". Como anotherVar faz parte do escopo de someFunc, ela não é acessível pelo escopo global

function someFunc() {
  // Escopo da someFunc
  const anotherVar = 'Ola mundo'
  
  console.log(someVar)
  console.log(anotherVar)
  
  function anotherFunc() {
    const yetAnotherVar = 'Hola mundo'
    
    console.log(someVar)
    console.log(anotherVar)
    console.log(yetAnotherVar)
  }
  
  console.log(yetAnotherVar) // ReferenceError: yetAnotherVar is not defined
}

  console.log(anotherVar) // ReferenceError: anotherVar is not defined

someFunc()
