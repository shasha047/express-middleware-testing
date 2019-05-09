import { RequestHandler } from "express";
import { checkCounter, statusCode, randomSubtractor } from "../../config";

export const m10 : RequestHandler = async (req,res,next) =>{
    console.log("\nm10 is working ...\n")
    checkCounter[0] = Math.floor(Math.random()*10)
    console.log("\ncheckCounter in m10 \n",checkCounter)

    if(checkCounter[0]%10===0){
        checkCounter[0]=0
        console.log("\n*******************\nsuccessfully ends at m10 \n ***************************\n")
        return res.json({
            status:statusCode.success,
            result:'chain successfully ends'
        })
    }
    else{
        console.log("\n*******************\nchain break at m10 \n ***************************\n")
        return res.json({
            status:statusCode.failure,
            result:'chain break at m10'
        })
    }
}
  