import UserModel from "../model/User.model";
import bcrypt from "bcrypt"



/** POST: http://localhost:8000/api/register 
 * @param : {
  "username" : "Gaye",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "Modou",
  "lastName": "mbaye",
  "mobile": 8009860560,
  "address" : "rufisque",
  "profile": ""
}
*/



export async function register (req,res){
   
   try{
       const {username,password, profile,email} = req.body;
       //check existing username
       const existingUsername = new Promise ((resolve, reject) => {
        UserModel.findOne({username} ,function (err, user) {
            if(err) reject(new Error(err))
            if(user) reject({error:"unique username"})
            resolve();
        })
       });
       //check existing email
       const existingEmail = new Promise ((resolve, reject) => {
        UserModel.findOne({email} ,function (err, email) {
            if(err) reject(new Error(err))
            if(email) reject({error:"unique email "})
            resolve();
        })
       });
       Promise.all(existingEmail,existingUsername)
        .then(() => {
            if(password){
                bcrypt.hash(password,10)
                  .then(hashPassword => {
                     const user = new UserModel({
                        username,
                      
                        password: hashPassword,
                        profile: profile || "", 
                         email,
                     });
                     //return save result as a response
                     user.save()
                     .then(result => res.status(201).send({msg:" register user succes"}))
                     .catch(error => res.status(500).send({error}))
                  }).catch(error => {
                    return res.status(500).send({
                        error:"activer le mot de passe haché"
                    })
                  })

            }

        }).catch(error => {
            return res.status(500).send({
                error:"activer le mot de passe haché"
            })
        })
   }
    catch{
        return  res.status(500).send(error)
    }
   
}


/** POST: http://localhost:8000/api/login 
 * @param: {
  "email" : "example@gmail.com",
  "password" : "admin123"
}
*/
export async function login (req,res){
      res.json('login route')
}
/** GET: http://localhost:8000/api/user/example123 */

export async function getUser (req,res){
      res.json('getUser route')
}

/** GET: http://localhost:8000/api/generateOTP */
export async function generateOTP (req,res){
      res.json('generateOTP route')
}


/** GET: http://localhost:8080/api/verifyOTP */
export async function verifyOTP (req,res){
    res.json('generateOTP route')
}



// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */
export async function createResetSession(req,res){
    if(req.app.locals.resetSession){
         return res.status(201).send({ flag : req.app.locals.resetSession})
    }
    return res.status(440).send({error : "Session expired!"})
 }
// update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword */
export async function resetPassword (req,res){
    res.json('resetPassword route')
}