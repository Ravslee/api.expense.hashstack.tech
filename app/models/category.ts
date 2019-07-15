import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface CategoryDocument extends mongoose.Document {
        name:string,
        deleted:boolean,
}
// Model is from mongoose.Model
interface CategoryModelInterface extends mongoose.Model<CategoryDocument> {

}
const  categorySchema = new Schema({
    name:String,
    deleted:{type:Boolean,default:false},
} ,{ timestamps: true })


const CategoryModel = mongoose.model<CategoryDocument, CategoryModelInterface>("categories", categorySchema);
export default CategoryModel;