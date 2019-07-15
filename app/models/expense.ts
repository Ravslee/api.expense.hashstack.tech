import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface ExpenseDocument extends mongoose.Document {
        itemName:string,
        amount:Number,
        category:any;
        deleted:boolean,
        date:Date,
}
// Model is from mongoose.Model
interface ExpenseModelInterface extends mongoose.Model<ExpenseDocument> {
    // executeCampaignById(_id: string): void;
}
const  expenseSchema = new Schema({
    itemName:String,
    amount:Number,
    category:{type:mongoose.Schema.Types.ObjectId, ref:'categories'},
    deleted: {type:Boolean,default:false},
    date:Date
    
} ,{ timestamps: true })


const ExpenseModel = mongoose.model<ExpenseDocument, ExpenseModelInterface>("expenses", expenseSchema);
export default ExpenseModel;