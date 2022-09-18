const express=require('express');
const cors=require('cors');
class Server{
    constructor(){
        this.app=express();
        this.usuariosPath='/api/usuarios';
        this.port=process.env.PORT;
        //middlewares
        this.middlewares();
        this.routes();
        


        //rutas de mi aplicacion
        
    }
    routes(){
        this.app.use(this.usuariosPath,require('../routes/user'))

        
        //==========================//
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Escuchando en puerto ${this.port}`);
        })
    }
    middlewares(){
        //cors
        this.app.use(cors())
        //Parseo y lectura del body
        this.app.use(express.json());


        //Directorio publico
        
        this.app.use(express.static('public'));
        
    }
}

module.exports=Server;