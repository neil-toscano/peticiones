const { Router } =require('express');
const { getuser, putUser, postUser, deleteUser } = require('../controlers/usuarios');
const router =Router();
router.get('/',getuser);

router.put('/:id',putUser);

router.post('/',postUser);


router.delete('/',deleteUser);


module.exports=router;