
const { Schema, model}=require('mongoose');
const { use } = require('../routes/user');
const UsuarioSchema=Schema({
    nombre:{
        type:String,
        require:[true,'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true,"la contrasenia es obligatorio"]
    },
    img:{
        type:String,
    },
    rol:{
        type:String,
        required:true,
        emun:['ADMIN','USER']
    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }


});
UsuarioSchema.methods.toJSON=function(){
    const {__v,password,...user }=this.toObject();
    return user;
}

module.exports=model('Usuario',UsuarioSchema);