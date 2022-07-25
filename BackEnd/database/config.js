const mongose = require('mongoose');

const dbConnection = async()=>{

    try{
        
        await mongose.connect(process.env.BD_CNN);
        console.log('BD online')


    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }

   // const Cat = mongoose.model('Cat', { name: String });

  //  const kitty = new Cat({ name: 'Zildjian' });
   // kitty.save().then(() => console.log('meow'));
}

module.exports={
    dbConnection
}