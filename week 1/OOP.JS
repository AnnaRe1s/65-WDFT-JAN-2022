// Palavra chave THIS

// Vamos criar objetos que vai representar funcionarios do nosso sistema, como se tivessemos um site de folha de pagamentos

// const employee1 = {
//     name: "Maria",
//     lastName:"Batista",
//     position:"Developer",
//     birthDate: "11-27-1984",
// }

// Vamos dizer que nos temos a nescessidade de sempre retornar o nome completo do nosso funcionario
// e por comodidade nos vamos criar uma funcao que retorne sempre o nome completo do usuario

const employee1 = {
    name: "Maria",
    lastName: "Batista",
    position: "Developer",
    birthDate: "11-27-1984",
    printFullName: function () {
      // Isso e uma Método, ou seja uma função que faz parte de um objeto
      return ` ${employee1.name} ${employee1.lastName}`;
    },
  };
  
  console.log(employee1.printFullName()); // invocando a funcao interna do nosso obj
  
  const employee2 = {
    name: "Joana",
    lastName: "Silva",
    position: "Ux-Designer",
    birthDate: "01-07-1989",
    printFullName: function () {
      return ` ${employee2.name} ${employee2.lastName}`;
    },
  };
  
  console.log(employee2.printFullName());
  
  /* Percebeu que para eu criar um novo funcionario eu tive que copiar tudo e alterar os valores para o Employee 2 
  Isso e ruim porque interfere na escalabilidade do codigo, porque cada funcionario que eu for criar eu teria que mudar a
  o return do name e lastName da nossa function
  Entao para evitar ficar alterando a referencia do objeto dentro da funcao no JS nos temos uma palavrinha chave que chama THIS que e a referencia do proprio obj
  Entao para acessar o objeto do meu eu posso usar a palavrinha this
   */
  
  const employee3 = {
    name: "Carla",
    lastName: "Martines",
    position: "Product-Designer",
    birthDate: "09-06-1985",
    printFullName: function () {
      console.log("isto e o que o this retorna => ", this); // o this vai ser o obj inteiro incluindo essa funcao invocada!
  
      return ` ${this.name} ${this.lastName}`;
    },
  };
  
  console.log(employee3.printFullName());
  
  // Ele vai continuar sabendo que esta referenciando a propriedade NAME E LASTNAME do Objeto employee3,  o THIS nos permite tornar o codigo mais escalavel e reutilizavel
  
  // o this e uma palavra reservada que contem uma referencia do objeto que ela faz parte.  Sim o this pode ser utilizado em  varias situacoes como classes, arrays , objetos e funcao!
  
  // OOP (PROGRAMACAO ORIENTADDA A OBJETO)
  
  /*  Outro problema que encontramos nesse execicio e que temos que ficar repetindo codigo para criar um novo usuario 
  e o nosso cliente nao tera acesso a esse objeto toda vez  que formos criar um novo funcionario, entao para isso nos temos que cria uam fabrica que cria esses funcionarios pra gente e o nome dessa fabrica e CLASSES */
  
  
  
  
  
  
  // CLASSES
  
  /* Classes e uma funcao que recebe parametros e usa esses parametros para criar um objeto, esse objeto por sua vez a gente precisa instanciar pra poder usar ele  (INSTANCIAR e o ato de voce mandar a fabrica "classe" produzir alguma coisa) e com essa instancia nos conseguimos usar os metodos e as propriedades desse objeto 
  RESUMAO =>  Classes sao "fabricas" de objetos que usam parametros externos para criar varios objetos com o mesmo formato */
  
  // Classe que cria o OBJ Employees
  // Por convencao os nomes das classes sempre vem em maiusculo
  
  class Employee {
    // Na classe nos precisamos de um metodo para receber parametros externos
    // O constructor e um metodo especial das classes e e instanciada , e ele recebe os parametros da classe
  
    // Voce nao precisa usar o contructor se vc for criar uma classe que nao recebe parametros.
  
    constructor(name, lastName, position, birthDate) {
      // para definir as propriedades do objeto que vai ser usado nos temos que criar os atributos
      // os atributos sao as propriedades que o obj gerado pela classe tera
      // nome do atributo
      this.name = name;
      // valor que o atributo vai receber
      this.lastName = lastName;
      this.position = position;
      this.birthDate = birthDate;
  
      // Nos usamos o "=" por que estamos dentro de uma funcao ne nao de um objeto entao nos estamos fazendo uma atribuicao normal
    }
  
    // Para definir um metodo, fazemos a definicao fora do constructor e com a sintaxe reduzida
  
    printFullName() {
      // para acessarmos o  atrubuto de uma classe dentro de um metodo nos prcisamos usar o "this" antes
      return ` ${this.name} ${this.lastName}`;
    }
  }
  
  // Para mandar a "fabrica " produzir nosso obj, precisamos realizar o processo chamado intancia
  // Sempre precisamos do "new" quando estamos intanciando uma classe
  
  const employeeAlexandre = new Employee(
    "Alexandre",
    "Pires",
    "Teacher Assistent",
    "05-05-1990"
  );
  
  console.log(employeeAlexandre);
  console.log(employeeAlexandre.printFullName());
  
  
  // Sintaxe 'class' do ES6
  
  // ATENÇÃO: a sintaxe de classes do Javascript é o que chamamos de açúcar sintático (syntatic sugar), ou seja, apenas diferenças sintáticas para as funções construtoras tradicionas. Em funcionalidade, classes e funções construtoras são exatamente iguais
  
  class Rectangle {
    //   Note que não colocamos () à frente de Rectangle, pois os parâmetros de uma classe são definidos no constructor
      constructor(base, side) { // O constructor é um método especial opcional que recebe as "entradas" (parâmetros) da classe e é automaticamente invado pelo Javascript no momento da instanciação
        console.log('constructor rodou')
        this.base = base;
        this.side = side;
      }
      
    //   Definimos os métodos da classe logo abaixo do constructor. Métodos de classe dispensam a palavra-chave 'function'
      calculateArea() {
        return this.base * this.side;
      }
      
      calculatePerimeter() {
        return (this.base * 2) + (this.side * 2)
      }
    }
    
    const rect1 = new Rectangle(10, 5)
    
    console.log(rect1)
    console.log('AREA => ', rect1.calculateArea())
    console.log('PERÍMETRO => ', rect1.calculatePerimeter())
    
    // Herança em classes do ES6
    
    // O 'extends' faz com que a classe à sua esquerda herde todos os atributos e métodos da classe à sua direita
    class Square extends Rectangle {
      constructor(side) {
        super(side, side) // o método 'super' é um "túnel" para o constructor da classe mãe (nesse caso, a Rectangle). O que passamos para o super é repassado para o constructor da classe mãe como argumento
      }
    }
    
    const square1 = new Square(30)
    
    console.log('AREA QUADRADO => ', square1.calculateArea())
    console.log('PERIMETRO QUADRADO => ', square1.calculatePerimeter())
    
    // Dentro da classe "filha", podemos sobrescrever atributos ou métodos da classe "mãe"
    