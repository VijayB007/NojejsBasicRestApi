const {Router} = require('express');
const controller=require('./controller')

const router = Router();


router.get('/' ,()=>{
    try{
        controller.getstudents
    }catch(err){
        console.log('err in routjs', err);

    }
        });
module.exports=router;