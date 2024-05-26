import TYPES from "@apps/types"

export class Controller{

    static getControllerMethod(controller:any ,method:string){

       
        return new controller()[method]()

    }
}