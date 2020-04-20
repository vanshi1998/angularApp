import { Choice } from "src/app/models/Choice";
/*export class Question{
    constructor(public id: number, public text: string, public choices: Array<Choice>){

    }
}*/

export interface Question{

    id: number;
    text: string;
    choices: Array<Choice>;
    correctIndex:number;
    userAnswer:number;
    
}