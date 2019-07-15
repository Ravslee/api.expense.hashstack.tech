import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface BudgetDocument extends mongoose.Document {
    amount: Number,
}
// Model is from mongoose.Model
interface BudgetModelInterface extends mongoose.Model<BudgetDocument> {

}
const budgetSchema = new Schema({
    amount: Number,
}, { timestamps: true })


const BudgetModel = mongoose.model<BudgetDocument, BudgetModelInterface>("budgets", budgetSchema);
export default BudgetModel;