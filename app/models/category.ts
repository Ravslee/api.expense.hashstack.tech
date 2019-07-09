import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface CategoryDocument extends mongoose.Document {
        name:string,
}
// Model is from mongoose.Model
interface CategoryModelInterface extends mongoose.Model<CategoryDocument> {

}
const  categorySchema = new Schema({
    name:String,
} ,{ timestamps: true })


const CategoryModel = mongoose.model<CategoryDocument, CategoryModelInterface>("categories", categorySchema);
export default CategoryModel;