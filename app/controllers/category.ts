import { Request, Response, NextFunction } from "express";
import CategoryModel, { CategoryDocument } from '../models/category'

export const getCategory = (req: Request, res: Response, next: NextFunction) => {
    if (req) {
        CategoryModel.findOne({ _id: req.params.categoryId })
            .exec()
            .then((doc) => {
                res.send({ message: "Category query success!", data: doc });
            })
            .catch((err: any) => {
                console.error(err);
                res.status(500).send({ message: "Error on Category query! " + err });
            })
    } else {
        res.status(400).send({ message: "Missing required fields." });
    }
}

export const getAllCategories = ((req: Request, res: Response, next: NextFunction) => {
    if (req) {
        CategoryModel
            .find()
            .exec()
            .then((docs: any[]) => {
                res.send({ message: "Category query completed!", data: docs });
            })
            .catch((err: any) => {
                console.error(err);
                res.status(450).send({ message: "Category query failed! err = " + err });
            });
    } else {
        res.status(400).send({ message: "Missing required fields." });
    }
})


export const createCategory = ((req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);

    delete req.body._id
    new CategoryModel(req.body)
        .save()
        .then((doc: CategoryDocument) => {
            res.send({
                data: doc,
                message: 'Category Created successfully'
            })
        })
        .catch((err: any) => {
            res.send({
                msg: "Error occured!",
                error: err
            });
        })

})

export const updateCategory = ((req: Request, res: Response, next: NextFunction) => {

    delete req.body._id;
    CategoryModel.findOneAndUpdate(req.params.categoryId, { $set: req.body }).exec()
        .then((doc) => {
            getCategory(req, res, next)
        })
        .catch((err: any) => {
            console.error(err);
            res.status(450).send({ message: "Category update failed! err = " + err });
        })
}
)

export const deleteCategory= ((req: Request, res: Response, next: NextFunction) => {

    CategoryModel.findOneAndRemove(req.params.categoryId).exec()
        .then((doc) => {
            res.send({ message: "Category delete completed!", data: doc });
        })
        .catch((err: any) => {
            console.error(err);
            res.status(450).send({ message: "Category delete failed! err = " + err });
        });

})