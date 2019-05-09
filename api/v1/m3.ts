import { RequestHandler } from "express";
import { checkCounter, statusCode, randomSubtractor } from "../../config";

export const m3 : RequestHandler = async (req,res,next) =>{
    console.log("\nm3 is working ...\n")
    checkCounter[0] = Math.floor(Math.random()*10)
    console.log("\ncheckCounter in m3 \n",checkCounter)

    if(checkCounter[0]%10===3){
        console.log("\n*******************\nchain break at m3 \n ***************************\n")
        return res.json({
            status:statusCode.failure,
            result:'chain break at m3'
        })
    }
    else{
        next()
    }
}
  