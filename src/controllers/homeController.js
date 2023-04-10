exports.paginaInicial = (req, res) => {
    res.render("index", {
        titulo: "Este será o titulo da página",
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    });
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};

/*pagina inicial é um MIDDLEWARE, que recebe 3 parâmetros,
    req, res e next (o next usamos para chamar um próximo
    middleware - função a ser executada)
*/
