var express = require("express");
var router = express.Router();

const operacion = require('../sample.json');

router.get('/', (req, res)=>{
    res.send(operacion);
})

router.post('/',(req,res)=>{
    const {operandoUno, operador, operandoDos} =req.body;
    if(operandoUno && operador && operandoDos){
        if(operador=="+"){
            resultado = operandoUno + operandoDos;
            const id = operacion.length + 1;
            const nuevaOperacion= {id, operandoUno,operador, operandoDos , resultado};
            operacion.push(nuevaOperacion);
            res.json(operacion);
        }if(operador=="-"){
            resultado = operandoUno - operandoDos;
            const id = operacion.length + 1;
            const nuevaOperacion= {id, operandoUno,operador, operandoDos , resultado};
            operacion.push(nuevaOperacion);
            res.json(operacion);
        }if(operador=="*"){
            resultado = operandoUno * operandoDos;
            const id = operacion.length + 1;
            const nuevaOperacion= {id, operandoUno,operador, operandoDos , resultado};
            operacion.push(nuevaOperacion);
            res.json(operacion);
        }if(operador=="/"){
            resultado = operandoUno / operandoDos;
            const id = operacion.length + 1;
            const nuevaOperacion= {id, operandoUno,operador, operandoDos , resultado};
            operacion.push(nuevaOperacion);
            res.json(operacion);
        }

    }else{
        res.status(500).json({error: 'Hubo un error.'});
    }
});

module.exports = router;