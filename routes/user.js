const { Router } =require('express');
const { check } = require('express-validator');
const { getuser, putUser, postUser, deleteUser } = require('../controlers/usuarios');
const { esRoleValido, existEmail, existeUsuarioo } = require('../helpers/db-validator');
const { validarCampos } = require('../middlewares/validar-campos');


const router =Router();
router.get('/',getuser);

router.put('/:id',[
    check('id',"no es un ID valido").isMongoId(),
    
    validarCampos

],putUser);

router.post('/',[
    
    check("nombre","El nombre es obligatorio").not().isEmpty(),
    check("password","El password debe de ser mas de 6 letras").isLength(6),
    //check("rol","No es un rol permitido").isIn(['admin','user']),
    check("rol").custom((rol)=>esRoleValido(rol)),
    check("correo","el correo no es valido").isEmail(),
    check("correo").custom((correo)=>existEmail(correo)),

    
    validarCampos
],postUser);


router.delete('/:id',[
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioo),
    validarCampos
],deleteUser);


module.exports=router;