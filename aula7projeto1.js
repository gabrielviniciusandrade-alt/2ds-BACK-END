/*
Imagine que você abriu uma loja:
1) Crie o nome de 10 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/

const produtos = ['Chuteira Society', 'Bola de Futebol de Campo',' Caneleiras', 'Luvas de Goleiro', 'Bomba de Ar', 'Bola de Vôlei Indoor', 'Joelheiras', 'Rede de Vôlei', 'Manguitos', 'Tênis de Quadra']
const valores = ['R$ 220,00', 'R$ 130,00', 'R$ 45,00', 'R$ 110,00', 'R$ 35,00', 'R$ 160,00', 'R$ 85,00', 'R$ 120,00',' R$ 50,00', 'R$ 350,00']
const qualidade = ['Intermediária', 'Profissional', 'Básica', 'Intermediária',' Padrão', 'Premium', 'Alta', 'Residencial', 'Performance', 'Profissional']
const estoque = ['15 unidades', '24 unidades', '40 unidades', '12 unidades', '50 unidades',' 18 unidades',' 35 unidades', '08 unidades',' 22 unidades', '10 unidades']

function mostrarESTOQUE(){
     let contador = 0 
    while(contador <produtos.length){
         console.log(produtos[contador] + " - " + valores[contador] + " - " + estoque[contador]) 
         contador++
         }
        
    }
     function adicionarPRODUTO() { 
        produtos.push("Macarrão")
        valores.push("R$ 17,00")
        estoque.push("23 unidades") 
    } 
    
    function remorerPRODUTO(){
         produtos.splice(10, 1)
          valores.splice(10, 1) 
          estoque.splice(10, 1)
         }
         
         mostrarESTOQUE() 

         adicionarPRODUTO()

          console.log("-----------------------------------") 

          mostrarESTOQUE()

           remorerPRODUTO()

            console.log("-----------------------------------") 
            
            mostrarESTOQUE()

