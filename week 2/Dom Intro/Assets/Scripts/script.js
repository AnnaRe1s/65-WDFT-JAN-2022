// primeira coisa a fazer quando voce vinvula o eu JS no HTML e colocar um console e e ver se ele aparece quando vc executa o HTML!
// console.log("oi");

// Se aparecer seu console Otimo se nao verificar se o caminho esta correto!

// SELETORES

/* Nos temos seletores por nome de tags classes e ID entre outros  mas o mais comume sao os descritos
Geralmente, para selecionar uma tag no JS, usamos o objeto `document` prefixando os seletores, pois isso vai procurar a tag em todo o documento.

O Document ou documeto representa toda a arvore HTML (veja no Outline ou Estrutura de codigo na sua aba lateral do VSCODE)
*/

//QUERY SELECTOR - traz a primeira ocorrência de tag que atender à busca.
// Busca por classe do CSS
const h1 = document.querySelector(".blue");

// Busca por id
const containerDiv = document.querySelector("#container");

// Busca por nome de tag
const h1Element = document.querySelector("h1");

//QUERY SELECTOR ALL - Traz uma lista de todas as ocorrências que atenderem à busca

const blueElements = document.querySelectorAll(".blue");

// O resultado do querySelectorAll é um NodeList. NodeLists NÃO são arrays e não possuem métodos como map e filter. Para iterar sobre um NodeList, precisamos usar o `for`.
//https://developer.mozilla.org/en-US/docs/Web/API/NodeList

// GET ELEMENT BY ID - Traz a tag com o atributo id igual ao argumento ou undefined se não encontrar

const div = document.getElementById("container");

// IMPORTANTE: ids precisam ser ÚNICOS no documento HTML, ou seja, não podemos repetir ids em tags diferentes no mesmo documento. Por isso o getElementById sempre retorna somente 1 elemento

// GET ELEMENT BY CLASSNAME - Traz todas as tags cujo atributo `class` é igual ao argumento passado

const blueTags = document.getElementsByClassName("blue");

//  O resultado do getElementsByClassName é um HTMLCollection. HTMLCollections NÃO são arrays e não possuem métodos como map e filter. Para iterar sobre um HTMLCollection, precisamos usar o `for`.
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

// GET ELEMENT BY TAG NAME Seleciona todas as tags com o nome de tag igual ao argumento passado. Também retorna uma HTMLCollection

const paragraphs = document.getElementsByTagName("p");


// MANIPULACAO

// Manipulação do conteúdo de texto de uma tag

// secondParagraph e o nome do ID colocado em uma tag <p></p> no HTML  linha 27
const secondParagraph = document.getElementById("secondParagraph");

// Nos conseguimos manipular o conteudo da tag <p> CONTEUDO </p> usando o "innerText"
// o innerText interpreta Literal
secondParagraph.innerText = "Olá mundo!";

console.log(secondParagraph.innerText);

// Manipulação do HTML dentro de uma tag
// Com o innerHTML nos conseguimos manipular um html inteiro dentro da tag <p></p>
// o innerHTML interpreta tags html

secondParagraph.innerHTML = `<strong>Olá mundo!</strong>`;

// Manipulando classes do CSS

const blueParagraph = document.getElementById("blueParagraph");

blueParagraph.classList.remove("blue");
blueParagraph.classList.add("red");

// Manipulando diretamente a propriedade style

blueParagraph.style.fontSize = "24px";

// Atenção: quando vamos manipular o CSS via Javascript, os nomes das regras não são mais divididos por hifen e sim por camelCase, exemplo:
// `background-color` vira `backgroundColor`
// Os valores passados pras regras também devem sempre ser uma string

// Manipular o conteúdo de inputs

const textInput = document.getElementById("textInput");

// A propriedade value controla o conteúdo digitado pelo usuário em um input
textInput.value = "ola mundo!";

// SetAttribute

const btn = document.getElementById("btn");

btn.setAttribute("type", "button");

// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute

// Criando novas tags e adicionando-as ao documento

// Cria uma nova tag ul. As tags criadas ainda não fazem parte do documento e precisam ser "encaixadas" manualmente
const ul = document.createElement("ul");

// Criando 5 lis dentro da ul dinamicamente
for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");

  // As tags criadas são elementos HTML comuns e possuem todos os atributos dos elementos pré-existentes no HTML
  li.innerText = `Item da lista #${i}`;

  // O appendChild insere a tag recebida como argumento como o último filho da tag em que está sendo invocado

  // Encaixando a li dentro da ul
  ul.appendChild(li);
}

const wrapper = document.getElementById("wrapper");

// Encaixando a ul dentro da div wrapper.
wrapper.appendChild(ul);

// Remover tags existentes

const ulElement = document.querySelector("ul");

// children é uma propriedade contento todos os elementos filhos da ul
console.log(ulElement.children);

// Acessando último li filho da lista
const lastChild = ulElement.children[ulElement.children.length - 1];

// O removeChild remove o elemento passado como argumento do elemento em que está sendo invocado
ulElement.removeChild(lastChild);

// Navegando na hierarquia do DOM

console.log(wrapper.firstElementChild.lastElementChild);

console.log(wrapper.firstElementChild.children[1]);

console.log(wrapper.firstChild); // As propriedades de parentesco de tags consideram quebras de linha como texto, para selecionar somente tags do HTML, sempre use as propriedades prefixadas com `Element`
console.log(wrapper.firstElementChild);

// // SetInterval
// // o Set interval vai executar a funcao a cada milisegundos passado
// //  o SetInterval nao tem break!

// const smallText = document.getElementById("smallText")

// let count = 1;

// setInterval(()=> {
//     smallText.style.fontSize = `${count}px`
//     count++
// },  1000)
