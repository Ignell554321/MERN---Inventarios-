const {Schema,model} = require('mongoose');

const ProductoSchema=Schema({

    nombre:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true,
    },
    costo:{
        type:String,
        require:true
    },
    marca:{
        type:String,
        require:true
    }

})

module.exports=model('Producto',ProductoSchema);
