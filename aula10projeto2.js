
    const produtos = [
        {
            nome: "Chuteira Society",
            marca: "Adidas",
            preco: 220,
            qualidade: "Intermediária",
            estoque: "15 unidades",
            categoria: "Calçados"
        },
        {
            nome: "Bola de Futebol de Campo",
            marca: "Nike",
            preco: 130,preco: 120.00,
            qualidade: "Residencial",
            estoque: "08 unidades",
            categoria: "Equipamentos"
        },
        {
            nome: "Manguitos",
            marca: "Nike",
            preco: 50.00,
            qualidade: "Performance",
            estoque: "22 unidades",
            categoria: "Vestuário"
        },
        {
            nome: "Tênis de Quadra",
            marca: "Mizuno",
            preco: 350.00,
            qualidade: "Profissional",
            estoque: "10 unidades",
            categoria: "Calçados"
        },
        {
            nome: "Caneleiras",
            marca: "Penalty",
            preco: 45,
            qualidade: "Básica",
            estoque: "40 unidades",
            categoria: "Proteção"
        },
        {
            nome: "Luvas de Goleiro",
            marca: "Reusch",
            preco: 110,
            qualidade: "Intermediária",
            estoque: "12 unidades",
            categoria: "Acessórios"
        },
        {
            nome: "Bomba de Ar",
            marca: "Penalty",
            preco: 35,
            qualidade: "Padrão",
            estoque: "50 unidades",
            categoria: "Acessórios"
        },
        {
            nome: "Bola de Vôlei Indoor",
            marca: "Mikasa",
            preco: 160,
            qualidade: "Premiualunosm",
            estoque: "18 unidades",
            categoria: "Equipamentos"
        },
        {
            nome: "Joelheiras",
            marca: "Asics",
            preco: 85,
            qualidade: "Alta",
            estoque: "777 unidades",
            categoria: "Proteção"
        },
        {
            nome: "Rede de Vôlei",
            marca: "Master Rede",
            preco: 120,
            qualidade: "Residencial",
            estoque: "08 unidades",
            categoria: "Equipamentos"
        },
        {
            nome: "Manguitos",
            marca: "Nike",
            preco: 50,
            qualidade: "Performance",
            estoque: "22 unidades",
            categoria: "Vestuário"
        },
        {
            nome: "Tênis de Quadra",
            marca: "Mizuno",
            preco: 350,
            qualidade: "Profissional",
            estoque: "10 unidades",
            categoria: "Calçados"
        }
        ]
        
        const produtosJSON = JSON.stringify(produtos)
        console.log(produtosJSON)


        const fs = require("fs")
        fs.writeFileSync("produtos.json", produtosJSON)


        const produtosArquivo = require("./produtos.json")
        console.log(produtosArquivo)

        produtosArquivo.forEach((produtos)=>{
            console.log(produtos.nome + 
                " - marca: " + produtos.marca + 
                " - preco: " + produtos.preco +
                " - qualidade: " + produtos.qualidade + 
                " - estoque: " + produtos.estoque +
                " - categoria: " + produtos.categoria)
            })
        // Adiciona um novo Produto
      function AdicionaProduto(nome, marca, preco, qualidade, estoque, categoria){
          
            const existe = produtosArquivo.some
            produtos.nome == nome

        if(existe == true){
        console.log("O produto esportivo " + nome + " já está no estoque")
            
          }else{
            produtos.push({
                nome: nome,
                marca:marca,
                preco: preco,
                qualidade: qualidade,
                estoque: estoque,
                categoria: categoria})
                console.log("O produto esportivo " + nome + " foi adicionado ao estoque com sucesso")
        }
      }

      AdicionaProduto("taco de beisebol", "dodgers", 1537.37, "alta", "5 unidades", "equipamentos")

      console.log("\n _________________________________________________________________ \n")

    function filtrar(filtrando){
        console.log("\n\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
        console.log("&&&&&&&&&& PRODUTOS COM PREÇO IGUAL OU MENOR QUE " + filtrando + " &&&&&&&&&&")
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\n ")  
        const filtro = produtos.filter((produto)=> produto.preco <= filtrando)
        console.log(filtro)
    }
    filtrar(1500)

    function AplicaDesconto(desc){
         console.log("\n _________________________________________________________________ \n")
        console.log("\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
        console.log("&&&&&&&&&& PRODUTOS COM DESCONTO DE " + (desc * -100 + 100) +  "% DE DESCONTO &&&&&&&&&")
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\n")
        const desconto = produtos.map((produto)=> {return {...produto, preco: produto.preco * desc}})
        console.log(desconto)
      }

    AplicaDesconto(0.80)

    function Encontra(marca){
        console.log("\n _________________________________________________________________\n")
        console.log("\n&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
        console.log("&&&&&&&&&& PRODUTOS DA MARCA: " + marca + " &&&&&&&&&&")
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\n")
        const encontrar = produtos.find((produto)=> produto.marca == marca)
            console.log(encontrar)
      }

    Encontra("Nike")
        console.log("\n _________________________________________________________________")