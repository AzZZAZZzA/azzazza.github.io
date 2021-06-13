import { Injectable } from "@angular/core";
import {CheckStep} from "../shared/checkStep.interface"
import {GameService} from "./game.service"

export interface Result{
   cardId:number
   result:boolean
}


@Injectable({ providedIn: 'root' })
export class BotService {
   constructor(public chackStep:CheckStep,public gameService: GameService){}

   public arrayOfResults: Result[]

   botAnalysis(){
      this.gameService.players[this.chackStep.]

   }


   botStep(){
      console.log("Step");
      
   }

}