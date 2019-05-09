import { RequestHandler } from "express";
import { checkCounter, statusCode, randomSubtractor } from "../../config";

export const m2 : RequestHandler = async (req,res,next) =>{
    console.log("\nm2 is working ...\n")
    checkCounter[0] = Math.floor(Math.random()*10)
    console.log("\ncheckCounter in m2 \n",checkCounter)

    if(checkCounter[0]%10===2){
        console.log("\n*******************\nchain break at m2 \n ***************************\n")
        return res.json({
            status:statusCode.failure,
            result:'chain break at m2'
        })
    }
    else{
        next()
    }
}
  