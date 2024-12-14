import mongoose, { mongo } from "mongoose";

// Função para conectar ao banco de dados MongoDB
const connectToDB = async () => {
    await mongoose.connect("mongodb+srv://userlib:userlibpass@library.d69ny.mongodb.net/livraria?retryWrites=true&w=majority&appName=library")
        .then((res) => {
            console.log("mongo conectado"); // Confirmação de conexão bem-sucedida
        });
};

export default connectToDB;
