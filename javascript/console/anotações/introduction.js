//O que é o JavaScript => JavaScript é uma linguagem de programação do HTML e da web
//O JavaScript pode alterar o conteúdo HTML => um dos muitos metodos HTML de JavaScript é o getElementById().

//Este exemplo usa o método para "encontrar" um elemento HTML (com id="demo") e altera o conteúdo do elemento (innerHTML) para "Hello world";

//Exemplo
document.getElementById("demo").innerHTML = "hello world"

//obs => O JavaScript aceita aspas duplas e simples:
document.getElementById('demo').innerHTML = 'hello world'

//O javascript pode alterar valores de atributos HTML
//neste exemplo, o javascript altera o valor src atributo(origem) de uma <img>tag:
image = document.getElementById('lamp')
image.onclick = function(){
    source = image.getAttribute('src')
    if(source === '../images/lamp.jpg'){
        image.setAttribute('src', '../images/broken.jpg')
    }else{
        image.setAttribute('src', '../images/lamp.jpg')
    }
}
//O javascript pode alterar estilos HTML(css)
//alterar o estilo de um elemento HTML é uma variante da alteração de um atributo HTML:
document.getElementById('demo').style.backgroundColor = 'black'
document.getElementById('demo').style.color = 'white'

//Saídas javascript
//Possibilidades de exibição de Javascript 
//O javascript pode "exibir" dados de diferentes maneiras: 
//#Escrevendo em um elemento HTML, usando o innerHTML.
//#Escrevendo na saída HTML usando document.write().
//#Escrevendo em uma caixa de alerta, usando o window.alert().
//#Escrevendo no console do navegador, usando console.log().

//Usando innerHTML
//Para acessar um elemento HTML, o javascript pode usar o document.getElementById(id) método.
//O id atributo define o elemento HTML. A innerHTML propriedade define o conteúdo HTML:
document.getElementById('result').innerHTML = 5+5;
//aletrar a propriedade innerHTML de um elemento HTML é uma maneira comum de exibir dados em HTML.

//Usando document.write()
//Para fins de teste, é conviniente usar document.write():
document.write(5 + 1);
//O uso de document.write() após o carregamento de um documento HTML excluirá todos os HTML existente: 
//O metodo document.write() deve ser usado apenas para testes.

//Usando window.alert()
//Você pode usar uma caixa de alerta para exibir dados:
window.alert(7+1);

//Usando o console.log()
//Para fins de depuração, você pode usar o console.log() método para exibir dados.
console.log('teste de depuração');

//Instruções JavaScript
//Exemplo:
var x,y,z                  //Statement 1
x = 1;                      //Statement 2
y = 1;                      //Statement 3
z = x + y                 //Statement 4

//Programas JavaScript 
//Um Programa de computador é uma lista de "instruções" a serem "executadas" por um computador.
//Em em programação JavaScript é uma lista de instruções de programação.

//Instruções JavaScript 
//As instruções JavaScript são compostas por:
//Valores, operadores, expressões, palavras-chave e comentários
//Esta declaração diz ao navegador para escrever "Hello Dolly", dentro de um elemento HTML com id="hello":
//Exemplo:
document.getElementById("hello").innerHTML = "Hello Dolly"
//A maioria dos programas JavaScript contém muitas instruções JavaScript
//As instruções são executadas, uma a uma, na mesma ordem em que são escritas.
//Os programs JavaScript(e instruções JavaScript) são freqüentemente chamados de códigos JavaScript.

//Ponto e Vírgula;
//O ponto e vírgula separa as instruções JavaScript.
//Adicione um ponto e vírgula no final de cada instruções executável:
a,b,c;                      //Declare 3 variaveis;
a = 5;                      //Assign the values 5 to a;
b = 6;                      //Assing the values 6 to b;
c = a + b;                //Assing the sum of a and b to c;
//Quando separadas por ponto e vírgula, são permitidas várias intruções em uma linha:
a = 5; b = 6;c = a + b;
//Obs: Na web, você pode ver exemplos sem o ponto e vírgula.
//As intruções finais com ponto e virgula não são necessárias, mais são altamente recomendadas.

//Espaços em branco Javascript
//JavaScript ignora vários espaços. Você pode adicionar espaços em branco ao seu script para torná-lo mais legível.
//As seguintes linhas são equivalentes:
person = "Hege";
person="Hege";
//Uma boa prática é colocar  espaços ao redor dos operadores (= + - * /):
x = y + z;

//Comprimento da linha JavaScript e quebras de linha
//Para melhor legibilidade, os programadores geralmente gostam de evitar linhas de código com mais de 80 caracteres.
//Se uma instrução JavaScript não couber em uma linha, o melhor local para quebrá-la é após um operador:
//Exemplo
document.getElementById("demo").innerHTML =
"Hello Dolly!";

//Blocos de código JavaScript