
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
            qualidade: "Premium",
            estoque: "18 unidades",
            categoria: "Equipamentos"
        },
        {
            nome: "Joelheiras",
            marca: "Asics",
            preco: 85,
            qualidade: "Alta",
            estoque: "35 unidades",
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

        alunosArquivo.forEach((aluno)=>{
            console.log(aluno.nome + 
                " - Data de nascimento: " + aluno.dt_nasc + 
                " - Série favorita: " + aluno.serie_fav)
                " - Data de nascimento: " + aluno.dt_nasc + 
                " - Série favorita: " + aluno.serie_fav)
                " - Data de nascimento: " + aluno.dt_nasc + 
                " - Série favorita: " + aluno.serie_fav)