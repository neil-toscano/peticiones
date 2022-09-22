const {response,request}=require('express');
const Usuario=require('../models/usuario');
const bcrypt=require('bcryptjs');

const getuser=async(req=request,res=response)=>{
    //const params=req.query;
    const {limite=5,desde=0}=req.query;
 //  const usuarios= await Usuario.find({estado:true})
 //          .skip(Number(desde))
 //          .limit(Number(limite));
 //  const total=await Usuario.countDocuments({estado:true});

    const [total,usuarios]=await Promise.all([
        Usuario.countDocuments({estado:true}),
        await Usuario.find({estado:true})
            .skip(Number(desde))
            .limit(Number(limite))
    ])
    res.json({
        msg:"get Api-controlador",
        
        usuarios,
        total
    })
}

const putUser=async(req,res)=>{
    const id=req.params.id;
    const{_id,password,google,...resto}=req.body;
    //Todo validar contra base de datos
    

    if(password){
        const salt=bcrypt.genSaltSync();
        resto.password=bcrypt.hashSync(password,salt);

    }
    const usuario=await Usuario.findByIdAndUpdate(id,resto,{new:true});
    res.json({
        
        msg:'put API',
        usuario,
        resto
    })
}
const postUser=async(req,res=response)=>{
   
    
    const {nombre, correo, password,rol}=req.body;
    const usuario=new Usuario({nombre,correo,password,rol});
    //verificar si el correo existe
    



    //==========================.................=======================//
    const salt=bcrypt.genSaltSync();
    usuario.password=bcrypt.hashSync(password,salt);

    //encriptar la contrasena


    //guardar
    await usuario.save();
    res.json({
        msg:"post Api",
        usuario
    })
}
const deleteUser=async(req,res)=>{

    const {id}=req.params;
   // const usuario=await Usuario.findByIdAndDelete(id);
   const usuario=await Usuario.findByIdAndUpdate(id,{
    estado:false
   })
    res.json({
        msg:"Delete Api",
        id:id
    })
}



module.exports={
    getuser,
    putUser,
    postUser,
    deleteUser
}