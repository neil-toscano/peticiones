const Role=require('../models/rol');
const Usuario=require('../models/usuario');
const esRoleValido=async(rol='')=>{
    const existeRol= await Role.findOne({
        rol
    });
    if(!existeRol){
        throw new Error('el rol no esta registrado en base de datos');
    }

};

const existEmail=async(correo='')=>{
    const email=await Usuario.findOne({correo});
if(email){
    throw new Error('el correo ya existe');
}

}

const existeUsuarioo=async(id)=>{
    const existeUsuario=await Usuario.findById(id);
if(!existeUsuario){
    throw new Error('el Id no existe');
}

}

module.exports={
    esRoleValido,
    existEmail,
    existeUsuarioo
}