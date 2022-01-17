// SHADOWING

// O sombreamento de variável ocorre quando uma variável de um escopo interno é definida com o mesmo nome de uma variável no escopo externo. o escopo de ambas as variáveis ​​se sobrepõe.


let number = 10;

function displayDouble() {
  //a new variable is defined with the same name as variable on line 1 - outer scope
  let number = 3;

  number *= 2;
  console.log(number); //=> 6
}

displayDouble();
console.log(number); //=> 10

// Neste caso, ambas as variáveis ​​na linha 1 e 5 são definidas com o mesmo nome — number.Isso tem um resultado significativo: a variável definida no escopo externo é 'sombreada' pela variável definida no escopo interno . Pode ser útil pensar em 'sombreamento variável' como uma espécie de mecanismo de proteção que tem dois efeitos: Primeiro impede que o escopo interno acesse variáveis ​​definidas no escopo externo. Segundo lugar, impede que o escopo interno modifique ou reatribua variáveis ​​definidas no escopo externo.

// Leia mais sobre Shadowwing acessando 
// https://mayuminishimoto.medium.com/understanding-variable-shadowing-with-javascript-58fc108c8f03