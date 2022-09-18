const {response,request}=require('express');
const getuser=(req=request,res=response)=>{
    const params=req.query;
    res.json({
        msg:"get Api-controlador",
        params
    })
}

const putUser=(req,res)=>{
    const id=req.params.id;
    res.json({
        
        msg:'put API',
        id
    })
}
const postUser=(req,res)=>{
    const body=req.body;
    res.json({
        msg:"post Api",
        body
    })
}
const deleteUser=(req,res)=>{
    res.json({
        msg:"Delete Api"
    })
}



module.exports={
    getuser,
    putUser,
    postUser,
    deleteUser
}