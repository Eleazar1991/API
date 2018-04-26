
const router = require('express').Router();
//const { createUsers } = require ('./users-controller');
//const { readFile } =  require('./users.controller');

router.post('/upload', function (req,res){
    
    res.send('Enviado el fichero');
});

router.post('/user', function(req, res,next){
    res.send('devolvemos id del usuario');
});


router.get('/user/:id/files', function(req,res,next){
    res.send('Devolvemos los ficheros que ha subido el usuario');
})

router.get('/data/:id/result', function(req,res,next){
    res.send('Devolvemos los datos');
})
router
module.exports = router;