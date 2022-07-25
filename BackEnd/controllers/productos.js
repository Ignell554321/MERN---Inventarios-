const Producto =require('../models/producto');

const getProductos= (req,res)=>{

    res.json({
        ok:true,
        productos:[]
    })

}


module.exports={
    
    getProductos,

}
   
