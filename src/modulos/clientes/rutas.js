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
router.get('/', async function (req, res) {
    try {
        const item = await controlador.todos()
        respuestas.success(req, res, 200, item)
    } catch (error) {
        respuestas.error(req, res, 500, error)
    }
})

router.get('/:id', async function (req, res) {
    try {
        const item = await controlador.uno(req.params.id)
        respuestas.success(req, res, 200, item)
    } catch (error) {
        respuestas.error(req, res, 500, error)
    }
})

router.post('/agregar', async function (req, res) {
    try {
        const item = await controlador.agregar(req.body);
        if (req.body.id == 0) {
            mensaje = 'Datos insertados'
        } else {
            mensaje = 'Datos actualizados'
        }
        respuestas.success(req, res, 200, mensaje);

    } catch (error) {
        respuestas.error(req, res, 500, 'Error al obtener datos', error);
    }
})

router.post('/eliminar', async function (req, res) {
    try {
        const item = await controlador.eliminar(req.body);
        respuestas.success(req, res, 200, 'dato eliminado');
    } catch (error) {
        respuestas.error(req, res, 500, 'Error al obtener datos', error);
    }
})




module.exports = router