const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    res.render("index", { contatos });
};

/*pagina inicial é um MIDDLEWARE, que recebe 3 parâmetros,
    req, res e next (o next usamos para chamar um próximo
    middleware - função a ser executada)
*/
