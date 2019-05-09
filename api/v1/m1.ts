import { RequestHandler } from "express";
import { checkCounter, statusCode, randomSubtractor } from "../../config";

export const m1 : RequestHandler = async (req,res,next) =>{
    console.log("\nm1 is working ...\n")
    checkCounter[0] = Math.floor(Math.random()*10)
    console.log("\ncheckCounter in m1 \n",checkCounter)

    if(checkCounter[0]%10===1){
        console.log("\n*******************\nchain break at m1 \n ***************************\n")
        return res.json({
            status:statusCode.failure,
            result:'chain break at m1'
        })
    }
    else{
        next()
    }
}
  