const restful = require('node-restful')
const mongoose = restful.mongoose

const cadastroSchema = new mongoose.Schema({
    Nome: { type: String, required: true },
    CpfCnpj: { type: String, required: true },
    Email: { type: String, required: true },
    Cep: { type: String, required: true },
    Logradouro: { type: String, required: true },
    Numero: { type: String, required: true },
    Complemento: { type: String, required: false },
    Bairro: { type: String, required: true },
    Cidade: { type: String, required: true },
    Uf: { type: String, required: true },
    Telefone: { type: String, required: false },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Cadastro', cadastroSchema)