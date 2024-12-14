// Configuração inicial do servidor
const app = express();
app.use(cors()); // Habilita o CORS para permitir requisições de diferentes origens
app.use(express.json()); // Permite o uso de JSON no corpo das requisições
connectToDB(); // Conecta ao banco de dados MongoDB

// Rota básica para verificar o status do servidor
app.get("/", async (req, res) => {
    res.send({
        success: true,
        data: "rodando"
    });
});

// Rotas para gerenciar 'Usuario'

// Rota para obter todos os usuários
app.get("/usuario", async (req, res) => {
    try {
        const result = await Usuario.find(); // Busca todos os usuários no banco
        res.send({
            success: true,
            data: result
        });
    } catch (error) {
        res.send({
            success: false
        });
    }
});

// Rota para obter um usuário pelo ID
app.get("/usuario/:usuarioId", async (req, res) => {
    const usuarioId = req.params.usuarioId;
    try {
        const result = await Usuario.findById(usuarioId); // Busca o usuário pelo ID
        res.send({
            success: true,
            data: result
        });
    } catch (error) {
        res.send({
            success: false
        });
    }
});

// Rota para criar um novo usuário
app.post("/usuario", async (req, res) => {
    const usuarioDetails = req.body;
    try {
        const result = await Usuario.create(usuarioDetails); // Cria um novo usuário
        res.send({
            success: true,
            data: result
        });
    } catch (error) {
        res.send({
            success: false
        });
    }
});

// Rotas semelhantes existem para Livro (listar, buscar por ID ou categoria, criar, atualizar e deletar)

// Rota para buscar livros por categoria
app.get("/livro/categoria/:categoria", async (req, res) => {
    const categoriaFind = req.params.categoria;
    if (!categoriaFind) {
        return res.status(400).send({
            success: false,
            error: "Categoria inválida."
        });
    }
    try {
        const result = await Livro.find({ categoria: categoriaFind }); // Filtra livros pela categoria
        if (result.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Nenhum livro encontrado para esta categoria."
            });
        }
        res.status(200).send({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        });
    }
});

// Inicializa o servidor
app.listen(4000, () => {
    console.log("serve rodando"); // Mensagem confirmando que o servidor está ativo
});
