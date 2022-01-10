// Aula 01 - Intro JS
// Mensagem por log ao usuário

console.log("Olá. Bem-vindo");



// VARIAVEIS
// Toda variável tem obrigatoriamente um nome, e opcionalmente um valor

let userAge = 25;
console.log(userAge); 

// let é uma palavra-chave (comando) para declarar uma variável
// 'userAge' é o nome que escolhemos para etiquetar a caixinha que vai conter o valor
// = é um operador de atribuição, ou seja, ele atribui (coloca) o valor da direita na caixinha da esquerda
//  25 é o valor da variável, ou seja, o conteúdo da caixinha. Toda vez que acessarmos 'age', obteremos 25 como resultado


// No javascript, podemos declarar variáveis de 3 maneiras

// Constantes são variáveis cujo valor não pode ser re-atribuído
const city = 'São Paulo'

city = 'Rio de Janeiro' // TypeError: Assignment to constant variable.



// Variáveis declaradas com o comando 'let' podem ser re-atribuídas (ter seu valor modificado)

let finalAgeUser = 23;
finalAgeUser = 15;
console.log(finalAgeUser);


// // LEGADO - NÃO USAR
// // O var é a forma antiga de se declarar variáveis e não deve ser utilizado.
var profession = 'Teacher'


//   Sugestão:
//   - Criar 10 variáveis diferentes
//   para cada tipo de variáveis
//

// Não é necessário definir o tipo
// de variável no JS
// Exemplos:
// int nomeVariavel = 22;
// float temperatura = 15.33;

// Tipos de variáveis - Definição e uso
let comidaFavorita;

comidaFavorita = "Chocolate";
console.log(
  "Comida = ",
  comidaFavorita,
  "Tipo de variável = ",
  typeof comidaFavorita
);





/*******/




// TIPOS JAVASCRIPT
// Tipo string
let nomeDoPaciente = "Josh";
let racaDoAnimal = "Pitbull";



// Number
// Tipo int - 
let anosDeIdade = 30;
let numeroDeFilhos = 2;

// Tipo float
let temperaturaDaCaldeira = 34.3;
let aguaDaGarrafa = 4.5;


//Podemos também atribuir para variáveis expressões aritméticas

const sum = 2 + 2

console.log(sum) // 4

// // Números podem ser usados em operações aritméticas

2 + 2 // soma
2 - 2 // subtração
2 * 2 // multiplicação
2 / 2 // divisão

2 ** 2 // Potenciação (2 elevado a 2)
Math.pow(2, 2) // Outra maneira de fazer potenciação

Math.sqrt(16) // Raiz quadrada

// O operador de módulo retorna o resto da divisão inteira entre 2 números
2 % 2 // 0

// Ele pode ser usado para verificar se um número é divisível por outro
3 % 2 === 0 // false

// // O módulo também pode ser usado para "resetar" um valor toda vez que o valor a ser divido é divisível pelo valor original
console.log(120 % 60) // 0
console.log(121 % 60) // 1
console.log(122 % 60) // 2 ... 
console.log(180 % 60) // 0

// Expressões aritméticas

console.log(2 + 2 * (15 / 5))

// Operadores de atribuição

let num1 = 5

num1 = num1 + 1

// O código abaixo faz exatamente a mesma coisa que o código acima de uma forma mais curta
num1 += 1

// Incrementa o valor da variável sempre em 1
num1++

//O javascript é uma linguagem de tipagem fraca, ou seja, uma linguagem que permite que os tipos de variáveis sejam modificados depois de sua atribuição, e que permite comparações entre tipos diferentes

const valueA = 25
const valueB = 'R$ 25'

console.log(valueA + valueB) // Nesse caso, o + não está atuando como operador de adição e sim como operador de concatenação, pois uma das partes da operação é uma string

// Coerção automática de tipos, ou seja, o javascript transforma o tipo de uma das duas variáveis diferentes em uma operação para ser igual ao tipo da outra
console.log(valueA - valueB) // Neste caso, o resultado será NaN (Not a Number, não é um número) pois 'R$' não são algarismos numéricos válidos e a conversão falhou.





// Tipo boolean - True / false
let estaLigado = true;
estaLigado = false;

let telaAtiva = false;
telaAtiva = true;

nomeDoPaciente = "Jason";
console.log(nomeDoPaciente);





// No javascript, toda comparação retorna uma valor do tipo boolean
console.log(2 === 2) // true
console.log(2 === '2') // false

// OPERADORES DE COMPARACAO

console.log(2 == '2') // Verifica se os valores são iguais
console.log(2 === '2') // Verifica se os valores E os tipos são iguais

// OBS.: Os operadores abaixo servem somente pra números
console.log(3 > 2) // Verifica se o valor da esquerda é maior que o valor da direita
console.log(3 < 2) // Verifica se o valor da esquerda é menor que o valor da direita

console.log(2 != 2) // Verifica se os valores são diferentes
console.log(2 !== 2) // Verifica se os valores e/ou os tipos são diferentes

// // Operadores lógicas (que servem para unir diferentes comparações)

//          true      false
console.log(4 > 3 && 4 > 5) // Operador AND lógico, que só retorna true se ambas as partes da comparação forem verdadeiras

//          true    false
console.log(4 > 3 || 4 > 5) // Operador OR lógico, que retorna true se qualquer uma das partes da comparação for verdadeira
console.log(!4 > 5) // Operador NOT lógico, que nega o resultado de uma comparação

// Em expressões lógicas longas, o javascript compara da esquerda para a direita

//                false               false
console.log(4 > 3 && 4 > 5 || typeof 2 === 'string') // false

//  Null

// O tipo null representa um valor vazio
let nothing = null

// Undefined
let notDefinedYet = undefined

// Por padrão, todo valor que ainda não foi inicializado é undefined no javascript

const str = 'oi'
console.log(str[3]) // undefined


//Valores que em um contexto de comparação (booleano) são equivalentes a false
Falsy
false
0
''
null
undefined
NaN


/*******/




//LOOPS E CONDICIONAIS 


// if/else (se...então)
// Usamos o if/else quando queremos executar uma porção de código somente se uma condição for verdadeira

const characterName = 'Mario'
const nameLimit = 5

if (!characterName) {
    console.log('O nome do personagem não pode estar vazio')
    throw new Error('EMPTY_NAME') // o comando throw encerra a execução do código
  }
  
  if (characterName.length > nameLimit) {
    console.log(`O nome do personagem não pode ter mais de ${nameLimit} caracteres`)
  } else {
    console.log(`Seu personagem se chama ${characterName}`)
  }
  
// Podemos passar qualquer valor que retorna boolean para o if, inclusive gravar comparações em variáveis e 
// passar as variáveis em si ao invéa da comparação

const driverAge = 17
const licenseStatus = 'PENDING'

const canDrive = driverAge >= 18 && licenseStatus === 'VALID'

if (canDrive) {
  console.log('Esse motorista está apto a dirigir.')
} else {
  console.log('Esse motorista NÃO está apto a dirigir.')
}


// IF - Se
const variavelY = 10;
if (variavelY == 20){
  console.log('If atendido!');
}else{
  console.log('Else atendido');
}
// IF composto - Else IF
const sinal = 'Vermelho';
if(sinal == 'Verde'){
  console.log('Passagem permitida!');
}else if(sinal == 'Amarelo'){
  console.log('Atenção! Sinal prestes a fechar!');
}else{
  console.log('Passagem negada!');
}
// Alternador - SWITCH
const numeroDeGarrafas = 2;
switch(numeroDeGarrafas){
  case 1:
    console.log('Atleta ainda não pode correr!');
    break;
  case 2:
    console.log('Metade minima de garrafas atingida! É necessária +1 para correr');
    break;
  case 3:
    console.log('Limite atingido! O atleta pode correr.');
    break;
  case 4:
    console.log('Valor excedendo o limite! Devolva uma garrafa para poder correr.');
    break;
}
// Loops de repetição
// WHILE - Enquanto
let contador = 1;
while(contador <= 5){
  console.log(contador);
  console.log('DOT');
  contador++;
}
// DO While - Faça enquanto
let numeroDePneus = 2;
do{
  numeroDePneus++;
  console.log('+1 pneu adicionado!');
  console.log(numeroDePneus);
}while(numeroDePneus <= 8);
// FOR - Para que? Exatamente isto.
for(let contagem = 0;contagem <= 12;contagem++){
  console.log(contagem);
  console.log('+1 adicionado.');
}
// FOR each OU For mágico
const cidadePreferida = 'Las Vegas';
for(valor of cidadePreferida){
  console.log(valor);
}

