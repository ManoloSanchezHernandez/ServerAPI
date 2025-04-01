const db =  require('../../bd/mysql')

const config = require('../../config')

const TABLA = 'clientes'

function todos (){
    return db.todos(TABLA)
}

function uno(){

}

function agregar (data){
    return db.agregar(TABLA,data)
}

function eliminar (){

}

module.exports={
    todos,
    uno,
    agregar,
    eliminar
}

