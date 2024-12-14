import mongoose, { model, Schema } from "mongoose";

// Define o esquema para o modelo de usuários
const usuarioSchema = new Schema({
    nome: {type: String, required: true}, // Nome do usuário é obrigatório
    login: {type: String, required: true}, // Login do usuário é obrigatório
    senha: {type: String, required: true}, // Senha do usuário é obrigatória
    ativo: {type: Boolean, default: true} // Status de atividade do usuário, com valor padrão como ativo (true)
});

// Exporta o modelo 'Usuario', reutilizando-o se já estiver definido
export const Usuario = mongoose.models.Usuario || new model("Usuario", usuarioSchema)
