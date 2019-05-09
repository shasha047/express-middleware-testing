import { RequestHandler } from "express";
import { checkCounter, statusCode, randomSubtractor } from "../../config";

export const m7 : RequestHandler = async (req,res,next) =>{
    console.log("\nm7 is working ...\n")
    checkCounter[0] = Math.floor(Math.random()*10)
    console.log("\ncheckCounter in m7 \n",checkCounter)

    if(checkCounter[0]%10===7){
        console.log("\n*******************\nchain break at m7 \n ***************************\n")
        return res.json({
            status:statusCode.failure,
            result:'chain break at m7'
        })
    }
    else{
        next()
    }
}
  