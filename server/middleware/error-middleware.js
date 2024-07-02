const errorMiddleWare = (err, req, res, next) => {
    const status = err.status || 500
    const msg = err.message || 'Internal Server Error'    
    const details = err.details || 'Error from backend'
    const type = err.type || 'error'

    return res.status(status).json({type, msg, details})
}

module.exports = errorMiddleWare;