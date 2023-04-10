const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String,
});

const HomeModel = mongoose.model("Home", HomeSchema);

/*
    MongoDB é um NoSQL, não tem muitas coisas de validações, algumas coisas
    nós que teremos que passar para que seja validado e confirmado
    os dados. Não usa schemas
*/
