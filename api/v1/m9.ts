import { RequestHandler } from "express";
import { checkCounter, statusCode, randomSubtractor } from "../../config";

export const m9 : RequestHandler = async (req,res,next) =>{
    console.log("\nm9 is working ...\n")
    checkCounter[0] = Math.floor(Math.random()*10)
    console.log("\ncheckCounter in m9 \n",checkCounter)

    if(checkCounter[0]%10===9){
        console.log("\n*******************\nchain break at m9 \n ***************************\n")
        return res.json({
            status:statusCode.failure,
            result:'chain break at m9'
        })
    }
    else{
        next()
    }
}
  