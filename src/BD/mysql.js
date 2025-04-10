const mysql = require('mysql');
const config = require('../config');


const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

// console.log(dbconfig);

function conMysql() {
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if (err) {
            console.log('[bd err]', err);
            setTimeout(conMysql, 200)
        } else {
            console.log('BD conectado')
        }
    })
    conexion.on('error', err => {
        console.log('[bd err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conMysql()
        } else {
            throw err;
        }
    })

}

conMysql();

function todos(tabla) {
    return new Promise((resolve, reeject) => {
        conexion.query(`SELECT * FROM ${tabla};`, (error, result) => {
            return error ? reeject(error) : resolve(result)
        })
    })
}

function uno(tabla, id) {
    return new Promise((resolve, reeject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE id=${id};`, (error, result) => {
            return error ? reeject(error) : resolve(result)
        })
    })
}

function insertar(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${ tabla } SET ?;`, data, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}
function actualizar(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`UPDATE ${ tabla } SET ? WHERE id = ?;`, [data, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })

}

function agregar(tabla, data) {
    if (data && data.id == 0) {
        return insertar(tabla, data)
    } else {
        return actualizar(tabla, data)
    }
}

function eliminar(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM  ${tabla} WHERE ID = ?;`, data.id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    })
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar
}

