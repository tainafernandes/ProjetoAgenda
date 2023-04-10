exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = "Este é valor da var local";
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if (err && "EBADCRFTOKEN" === err.code) {
        return res.render("404");
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};
