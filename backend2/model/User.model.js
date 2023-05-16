import mongoose from "mongoose"



export const UserSchema = new mongoose.Schema(
 {   
    
    nom : {
           type:String,
           required:[true,"obligatoire"] ,  
           unique:false
    },
    username : {
           type:String,
           required:[true,"obligatoire"] ,  
           unique:false
    },
    prenom : {
           type:String,
           required:[true,"obligatoire"] ,  
           unique:false
    },
    password : {
        type:String,
        required:[true,'mettre votre mot de passe'],
        unique:false
    },
    email : {
        type:String,
        required:[true,'existe déjà'],
        unique:true
    },
    number : {
        type:Number,
       
    },
    adress : {
        type:String,
       
    },
  

}

)
export default mongoose.model.Users ||   mongoose.model('User', UserSchema);