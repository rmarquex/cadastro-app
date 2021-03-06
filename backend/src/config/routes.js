const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const cadastroService = require('../api/cadastro/cadastroService')
    cadastroService.register(router, '/cadastros')
}