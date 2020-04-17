import { Choice } from "src/app/models/Choice";
export class Question{
    constructor(public id: number, public title: string, public choices: Array<Choice>){

    }
}