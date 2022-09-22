const mongoose=require('mongoose');

const dbConection=async()=>{
try {
    await mongoose.connect(process.env.MONGO_ATLAS);
    
    console.log('base de datos Online');
} catch (error) {
    throw new Error("error a la hora de iniciar la base de datos");
}
}

module.exports={
    dbConection
}