import { RequestHandler } from "express";
import { checkCounter, statusCode, randomSubtractor } from "../../config";

export const m4 : RequestHandler = async (req,res,next) =>{
    console.log("\nm4 is working ...\n")
    checkCounter[0] = Math.floor(Math.random()*10)
    console.log("\ncheckCounter in m4 \n",checkCounter)

    if(checkCounter[0]%10===4){
        console.log("\n*******************\nchain break at m4 \n ***************************\n")
        return res.json({
            status:statusCode.failure,
            result:'chain break at m4'
        })
    }
    else{
        next()
    }
}
  