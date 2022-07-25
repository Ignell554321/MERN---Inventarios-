const Producto =require('../models/producto');

const getProductos= (req,res)=>{

    res.json({
        ok:true,
        productos:[]
    })

}

const crearProducto= async (req,res)=>{

    // console.log(req.body);
  
      const {email,password,nombre}=req.body;
  
      const producto=new Producto(req.body);
  
  
      await producto.save();
  
      res.json({
          ok:true,
          producto
      })
  
  }


module.exports={

    getProductos,
    crearProducto,

}
   
