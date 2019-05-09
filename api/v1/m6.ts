import { RequestHandler } from "express";
import { checkCounter, statusCode, randomSubtractor } from "../../config";

export const m6 : RequestHandler = async (req,res,next) =>{
    console.log("\nm6 is working ...\n")
    checkCounter[0] = Math.floor(Math.random()*10)
    console.log("\ncheckCounter in m6 \n",checkCounter)

    if(checkCounter[0]%10===6){
        console.log("\n*******************\nchain break at m6 \n ***************************\n")
        return res.json({
            status:statusCode.failure,
            result:'chain break at m6'
        })
    }
    else{
        next()
    }
}
  