import { Router } from "express";
const router = Router();
// import des controllers
import * as controller from '../controllers/appControllers'




//POST METHOD

router.route('/register').post(controller.register )
// router.route('/registerMail').post();//send email
router.route('/authenticate').post(  (req, res) => res.end());//authenticate
router.route('/login').post( controller.login)// connect app

//GET METHOD

router.route('/user/:username').get(conroller.getUser) //user with usernane
router.route('/generateOTP').get(controller.generateOTP) //generate random otp
router.route('/verifyOTP').get(controller.verifyOTP) // verify generate otp
router.route('/createResetSession').get(controller.createResetSession) // reset all the variable 



//PUT METHOD

router.route('/updateuser').put();// in use to update user profil
router.route('/resetPassword').put(controller.resetPassword); //use rest password


export default router