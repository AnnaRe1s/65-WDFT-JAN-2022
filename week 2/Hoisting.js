// HOISTING

/*Declarações de funções são "içadas" (hoisted) pelo interpretador do javascript, ou seja, quando invocamos uma função ANTES de sua declaração, o javascript "sobe" a declaração automaticamente para que a invocação funcione */

dec()

function dec() {
  console.log('Sou declaração')
}


// Function Expressions NÃO SÃO içadas (hoisted), podendo somente ser invocadas após (abaixo) de sua declaração
// Function Expressions permite criar uma nova função no meio de qualquer expressão.

// exp() // ReferenceError: Cannot access 'exp' before initialization

const exp = function() {
    console.log('Sou uma expressão')
  }
  
exp() // Aqui funcionaria normalmente por estar abaixo da declaração
 
