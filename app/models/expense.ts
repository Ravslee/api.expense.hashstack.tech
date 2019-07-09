import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface ExpenseDocument extends mongoose.Document {
        itemName:string,
        amount:Number,
        category:any;
}
// Model is from mongoose.Model
interface ExpenseModelInterface extends mongoose.Model<ExpenseDocument> {
    // executeCampaignById(_id: string): void;
}
const  expenseSchema = new Schema({
    itemName:String,
    amount:Number,
    category:{type:mongoose.Schema.Types.ObjectId, ref:'categories'}
    
} ,{ timestamps: true })


const ExpenseModel = mongoose.model<ExpenseDocument, ExpenseModelInterface>("expenses", expenseSchema);
export default ExpenseModel;