import { RequestHandler } from "express";
import { checkCounter, statusCode, randomSubtractor } from "../../config";

export const m5 : RequestHandler = async (req,res,next) =>{
    console.log("\nm5 is working ...\n")
    checkCounter[0] = Math.floor(Math.random()*10)
    console.log("\ncheckCounter in m5 \n",checkCounter)

    if(checkCounter[0]%10===5){
        console.log("\n*******************\nchain break at m5 \n ***************************\n")
        return res.json({
            status:statusCode.failure,
            result:'chain break at m5'
        })
    }
    else{
        next()
    }
}
  