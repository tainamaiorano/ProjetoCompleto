import mongoose, { model, Schema } from "mongoose";

// Define o esquema para o modelo de livros
const livroSchema = new Schema({
    nome: {type: String, required: true}, // Nome do livro é obrigatório
    imagem: {type: String, required: true}, // URL da imagem do livro é obrigatório
    descricao: {type: String, required: true}, // Descrição do livro é obrigatória
    categoria: {type: String, required: true}, // Categoria do livro é obrigatória
    status: {type: String, required: true}, // Status do livro (por exemplo, disponível, alugado) é obrigatório
    alugadoPor: {type: String, required: false} // Nome ou ID de quem alugou o livro (opcional)
});

// Exporta o modelo 'Livro' se não existir, ou reutiliza o já definido
export const Livro = mongoose.models.Livro || new model("Livro", livroSchema)
