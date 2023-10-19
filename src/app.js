import express from "express";
import conectaDB from "./config/dbConnect.js";
import routes from "./routes/index.js"

const conexao = await conectaDB();
const app = express();
routes(app); //o aap foi definido como parametro no index.js, em routes; tal é a instância do express

conexao.on("error", (erro)=>{
    console.error("erro de conexao", erro);
});

conexao.once("open", ()=>{
    console.log("conexao com o banco realizada com sucesso");
});

// todo codigo abaixo foi separado em livroController e livrosRoutes


//const app = express();
//app.use(express.json()); //middleware: utilizados para acessar requisições e respostas enquanto tais estão sendo feitas e fazer algums ações nas mesmas (como modificar objetos, passar infos). Qualquer requisição que tenha como body um objetivo compativel com json, vai passar pelo middleware e será parceado(convertido) para JSON. Tal conversão precisa ser realizada porque os dados que chegam via requisição chegam como string


/*app.get("/livros", async (req, res)=>{
    const listaLivros = await livro.find({}); //.find - metodo moongose que se conecta com o banco, como esta sem especificação, ele vai buscar e trazer tudo que encontrar na coleção livros
    res.status(200).json(listaLivros)*/
//})


// get é o R do CRUD (read)
// : prefixa uma informação variavel
//buscando livro atraves do id do mesmo, usando index
/*app.get("/livros/:id", (req, res) =>{
    const index = buscaLivros(req.params.id) //id esta sendo passado como parametro da rota
    res.status(200).json(livros[index]);
})*/


//post é o C do CRUD (create)
/*app.post("/livros", (req, res) => {
    livros.push(req.body); //req.body refere-se ao objeto req, que está sendo recebido dentro da função; gerenciado pelo express, fara um push dentro do array
    res.status(201).send("livro cadastrado") //codigo de registro criado
    app.post
})*/

//put é o U do CRUD (update)
//alterando titulo do livro, atraves do index
/*app.put("/livros/:id", (req, res)=>{
    const index = buscaLivros(req.params.id)
    livros[index].titulo = req.body.titulo;  //pegando a propriedade do objeto e substituindo seu valor atual (pegando a propriedade titulo do objeto livros e substituindo o titulo)
    res.status(200).json(livros)
})*/

//delete é o D do CRUD (delete)
app.delete("/livros/:id", (req, res)=>{
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido");
});


export default app;

