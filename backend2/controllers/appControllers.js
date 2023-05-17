import UserModel from "../model/User.model.js";
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
   
    try {
        const { username, password, profile, email } = req.body;        

        // check the existing user
        const existUsername = new Promise((resolve, reject) => {
            UserModel.findOne({ username }, function(err, user){
                if(err) reject(new Error(err))
                if(user) reject({ error : "Please use unique username"});

                resolve();
            })
        });

        // check for existing email
        const existEmail = new Promise((resolve, reject) => {
            UserModel.findOne({ email }, function(err, email){
                if(err) reject(new Error(err))
                if(email) reject({ error : "Please use unique Email"});

                resolve();
            })
        });


        Promise.all([existUsername, existEmail])
            .then(() => {
                if(password){
                    bcrypt.hash(password, 10)
                        .then( hashedPassword => {
                            
                            const user = new UserModel({
                                username,
                                password: hashedPassword,
                                profile: profile || '',
                                email
                            });

                            // return save result as a response
                            user.save()
                                .then(result => res.status(201).send({ msg: "User Register Successfully"}))
                                .catch(error => res.status(500).send({error}))

                        }).catch(error => {
                            return res.status(500).send({
                                error : "Enable to hashed password"
                            })
                        })
                }
            }).catch(error => {
                return res.status(500).send({ error })
            })


    } catch (error) {
        return res.status(900).send(error);
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