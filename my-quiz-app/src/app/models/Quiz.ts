import { Question } from "src/app/models/Question";
export class Quiz{
    constructor(public id: number, public name: string, public questions: Array<Question>){

    }
}