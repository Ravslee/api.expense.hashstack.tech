import { Request, Response, NextFunction } from "express";
import BudgetModel, { BudgetDocument } from '../models/budget'

export const getBudget = (req: Request, res: Response, next: NextFunction) => {
    if (req) {
        BudgetModel.findOne({ _id: req.params.budgetId })
            .exec()
            .then((doc) => {
                res.send({ message: "Budget query success!", data: doc });
            })
            .catch((err: any) => {
                console.error(err);
                res.status(500).send({ message: "Error on Budget query! " + err });
            })
    } else {
        res.status(400).send({ message: "Missing required fields." });
    }
}

export const getAllBudgets = ((req: Request, res: Response, next: NextFunction) => {
    if (req) {
        BudgetModel
            .find()
            .exec()
            .then((docs: any[]) => {
                res.send({ message: "Budget query completed!", data: docs });
            })
            .catch((err: any) => {
                console.error(err);
                res.status(450).send({ message: "Budget query failed! err = " + err });
            });
    } else {
        res.status(400).send({ message: "Missing required fields." });
    }
})


export const createBudget = ((req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);

    delete req.body._id
    new BudgetModel(req.body)
        .save()
        .then((doc: BudgetDocument) => {
            res.send({
                data: doc,
                message: 'Budget Created successfully'
            })
        })
        .catch((err: any) => {
            res.send({
                msg: "Error occured!",
                error: err
            });
        })

})

export const updateBudget = ((req: Request, res: Response, next: NextFunction) => {

    delete req.body._id;
    BudgetModel.findOneAndUpdate(req.params.budgetId, { $set: req.body }).exec()
        .then((doc) => {
            getBudget(req, res, next)
        })
        .catch((err: any) => {
            console.error(err);
            res.status(450).send({ message: "Budget update failed! err = " + err });
        })
}
)

export const deleteBudget= ((req: Request, res: Response, next: NextFunction) => {

    BudgetModel.findOneAndRemove(req.params.budgetId).exec()
        .then((doc) => {
            res.send({ message: "Budget delete completed!", data: doc });
        })
        .catch((err: any) => {
            console.error(err);
            res.status(450).send({ message: "Budget delete failed! err = " + err });
        });

})