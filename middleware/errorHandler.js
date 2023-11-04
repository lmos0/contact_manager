const { errorCodes } = require('../constants')

const ErrorHandler = (err, req,res,next) => {
    const statusCode = res.statusCode || 500

    switch (statusCode) {
        case errorCodes.ERRO_DE_VALIDACAO:
            res.json({
                title:"Ocorreu um erro na validação",
                message: err.message,
                stackTracer: err.stack
        })
            
            break;
        
        case errorCodes.NAO_ENCONTRADO:
            res.json({
                title:"Não encontrado",
                message: err.message,
                stackTracer: err.stack
        })
        case errorCodes.NAO_AUTORIZADO:
            res.json({
                title:"Não autorizado",
                message: err.message,
                stackTracer: err.stack
        })
        case errorCodes.PROIBIDO:
            res.json({
                title:"Solicitação proibida",
                message: err.message,
                stackTracer: err.stack
        })
        default:
            console.log('tudo ok')
            break;
    }

    res.json({
        title:"Não encontrado",
        message: err.message,
        stackTracer: err.stack
})
}

module.exports = ErrorHandler