const express = require('express');
const router = express.Router();
const respuestas = require('../../red/respuestas')
const controlador = require('../../modulos/clientes/controlador')

// Se encarga de crear la ruta raiz por asi mencionarlo
// router.get('/', function (req, res){
//     res.send('<div style="background-color: gray;"><h1 style="color: red;">Hola bienvenido</h1><br> <h2>Esta es la prueba de rutas para nuestro servidor</h2></div>');
// })
//Es una ruta anidada en la ruta raiz 
// router.get('/update', function (req, res){
//     respuestas.error(req, res, 500, 'no papu')
// })

// router.get('/', function(req, res){
//     const counsult = controlador.todos()
//     repuesta.success(has, res, 200, counsult)
// })
router.get('/', async function (req, res){
    try {
        const item = await controlador.todos()
        respuestas.success(req, res, 200, item)
    } catch (error) {
        respuestas.error(req, res, 500, error)
    }
})


router.post('/agregar', function (req, res) {
    const agregar = controlador.agregar(req.body)
    respuestas.success(req, res, 200, agregar)
})

router

module.exports = router