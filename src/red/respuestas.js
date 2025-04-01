exports.success = function (req, res, status = 200, msg='') {
    res.status(status).send({
        status: status,
        error: false,
        body: msg,
        severity: 'success'
    })
}

exports.error = function (req, res, status, msg) {
    const codestatus = status || 500;
    const mesaje = msg || 'error interno'
    
    res.status(codestatus).send({
        status: codestatus,
        error: true,
        body: mesaje,
        severity: 'error'
    })
}