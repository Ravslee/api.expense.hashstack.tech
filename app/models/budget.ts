import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface BudgetDocument extends mongoose.Document {
    amount: string,
}
// Model is from mongoose.Model
interface BudgetModelInterface extends mongoose.Model<BudgetDocument> {

}
const budgetSchema = new Schema({
    name: String,
}, { timestamps: true })


const BudgetModel = mongoose.model<BudgetDocument, BudgetModelInterface>("budgets", budgetSchema);
export default BudgetModel;