// hello world () =>{
// trocar = document.querySelector('h1');
// trocar.textContent = 'hello world'
// trocar => variavel
// document.querySelector() =>  Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.
// Sintaxe
// element = document.querySelector(selectors);
// Onde:
// element é um objeto Element.
// selectors é uma string que contém um ou mais seletores CSS separados por vírgulas.
// Exemplo
// Neste exemplo, o primeiro elemento no documento com a classe "myclass" é retornado:
// var el = document.querySelector(".myclass");
// textContent=>A propriedade textContent da interface Node representa o conteúdo de texto de um nó e dos seus descendentes.
// //Sintaxe
// var text = Node.textContent;
// Node.textContent = string;
// Valor de retorno
// Uma String ou null
// Descrição
// Ao obter valores desta propriedade:
// Se o nó for um document, um DOCTYPE, ou uma notation, o textContent retornará null. (Para se obter todo o texto e os dados CDATA do documento inteiro, você poderá usar document.documentElement.textContent.)
// Se o nó for uma seção CDATA, comentário, instrução de processamento, ou um text node, o  textContent retornará o texto dentro do nó, i.e., o Node.nodeValue.
// Para outros tipos de nó, o textContent retornará a concatenação textContent de cada nó filho, exceto comentários e instruções de processamento. Essa é uma string vazia se o nó não tiver filhos.
// Definir valores textContent em um nó, remove todos os nós filhos e os substituem por um único nó de texto cujo o valor é a string inserida.
// Diferenças para o innerText
// Não fique confuso pelas diferenças entre o Node.textContent e o HTMLElement.innerText. Apesar dos nomes parecerem similares, eles possuem importantes diferenças:
// textContent obtém o conteúdo de todos os elementos, incluindo os elementos <script> e <style>. por outro lado, o innerText mostra apenas os elementos para "leitura humana".
// textContent retorna todos os elementos de um nó. Por outro lado, o  innerText é ciente da estilização e não retorna elementos de texto "escondidos". Além disso, como o innerText leva em consideração os estilos CSS, a leitura do valor de innerText dispara um  reflow para assegurar a atualização dos estilos computados. (Reflows podem ser computacionalmente caros, e devem ser evitados quando for possível.)
// ao contrário do textContent, alterar o innerText no Internet Explorer (versão 11 e anteriores) remove os nós filhos do elemento e, destroi permanentemente todos os nós de texto descendentes. Isso torna impossível inserir novamente os nós em qualquer outro elemento ou no mesmo elemento.
// Diferenças para o innerHTML
// O Element.innerHTML retorna HTML, Como seu próprio nome indica. As vezes as pessoas usam o innerHTML para obter ou escrever textos dentro de um elemento, mas o textContent possui melhor performance pois seus valores não são analisados como HTML. Além do mais, utilizar textContent pode prevenir ataques XSS.
// Exemplos
// Dado o seguinte fragmento HTML:
// <div id="divA">Isto é<span>algum</span> texto!</div>
// ... Você pode usar textContent para obter o conteúdo de texto do elemento:
// let text = document.getElementById('divA').textContent;
// // Agora a variável de texto é: 'Isto é algum texto!'
// ... Ou definir o conteúdo de texto do elemento:
// document.getElementById('divA').textContent = 'Este texto é diferente!';
// // O HTML de divA agora é:
// // <div id="divA">Este texto é diferente!</div>
// Polyfill para o IE8
// // Fonte: Eli Grey @ https://eligrey.com/blog/post/textcontent-in-ie8
// if (Object.defineProperty 
//   && Object.getOwnPropertyDescriptor 
//   && Object.getOwnPropertyDescriptor(Element.prototype, "textContent") 
//   && !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get) {
//   (function() {
//     var innerText = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
//     Object.defineProperty(Element.prototype, "textContent",
//      // Passando innerText ou innerText.get diretamente não funciona,
//      // Função wrapper(que envolve) é necessária.
//      {
//        get: function() {
//          return innerText.get.call(this);
//        },
//        set: function(s) {
//          return innerText.set.call(this, s);
//        }
//      }
//    );
//   })();
// }
// }

// function mudar_cor_de_fundo(){
// var cor = document.getElementById("seletor_de_cores").value;//id passado em input
// document.getElementById("pagina").style.backgroundColor = cor;//body
// document.getElementById("cor_escolhida").innerHTML = "A Cor escolhida é "+cor;//em um paragrafo 
// }

//trocar a cor => {
// function trocaCor(){
//     hello = document.querySelector('h1').textContent = 'hello world'
//     fundo = document.querySelector('body').style.backgroundColor = 'black'
//     letra = document.querySelector('h1').style.color = 'white'
// }
// }
//lamp
// lamp = document.querySelector('img')
// lamp.onclick = function(){
//     src = lamp.getAttribute('src')
//     if(src === 'images/lamp.jpg'){
//         lamp.setAttribute('src', 'images/broken.jpg')
//     }else{
//         lamp.setAttribute('src', 'images/lamp.jpg')
//     }
// }
//alert('hello world')