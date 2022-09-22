

const {Schema, model}=require('mongoose');
const Rolschema=Schema({
    rol:{
        type:String,
        required:[true,'el rol es obligatorio']
    }

});
module.exports=model('Role',Rolschema);