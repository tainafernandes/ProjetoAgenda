exports.index = (req, res) => {
    res.render("index");
};

/*pagina inicial é um MIDDLEWARE, que recebe 3 parâmetros,
    req, res e next (o next usamos para chamar um próximo
    middleware - função a ser executada)
*/
