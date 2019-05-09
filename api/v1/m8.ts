import { RequestHandler } from "express";
import { checkCounter, statusCode, randomSubtractor } from "../../config";

export const m8 : RequestHandler = async (req,res,next) =>{
    console.log("\nm8 is working ...\n")
    checkCounter[0] = Math.floor(Math.random()*10)
    console.log("\ncheckCounter in m8 \n",checkCounter)

    if(checkCounter[0]%10===8){
        console.log("\n*******************\nchain break at m8 \n ***************************\n")
        return res.json({
            status:statusCode.failure,
            result:'chain break at m8'
        })
    }
    else{
        next()
    }
}
  