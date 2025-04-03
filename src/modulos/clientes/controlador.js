const db =  require('../../BD/mysql.js')

const config = require('../../config')

const TABLA = 'clientes'

function todos (){
    return db.todos(TABLA)
}

function uno(id){
    return db.uno(TABLA, id)
}

async function agregar(body) {
    return await db.agregar(TABLA, body);
}


function eliminar (body){
    return db.eliminar(TABLA,body)
}

module.exports={
    todos,
    uno,
    agregar,
    eliminar
}

