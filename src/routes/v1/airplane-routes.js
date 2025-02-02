const express=require('express');
const {AirplaneController}=require('../../controllers');
const {AirplaneMiddlewares}=require("../../middlewares")

const router=express.Router();

console.log(AirplaneController)
//  /api/v1/airplane post
router.post('/',
            AirplaneMiddlewares.validateCreateRequest,
            AirplaneController.createAirplane);

router.get('/',AirplaneController.getAirplanes);

module.exports=router;