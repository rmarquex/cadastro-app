const Cadastro = require('./cadastro')

Cadastro.methods(['get', 'post', 'put', 'delete','patch'])
Cadastro.updateOptions({new: true, runValidators: true})

module.exports = Cadastro