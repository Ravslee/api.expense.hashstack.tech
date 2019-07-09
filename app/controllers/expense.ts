import { Request, Response, NextFunction } from "express";
import ExpenseModel, { ExpenseDocument } from '../models/expense'

export const getExpense = (req: Request, res: Response, next: NextFunction) => {
    if (req) {
        ExpenseModel.findOne({ _id: req.params.expenseId })
            .exec()
            .then((doc) => {
                res.send({ message: "Expense query success!", data: doc });
            })
            .catch((err: any) => {
                console.error(err);
                res.status(500).send({ message: "Error on Expense query! " + err });
            })
    } else {
        res.status(400).send({ message: "Missing required fields." });
    }
}

export const getAllExpense = ((req: Request, res: Response, next: NextFunction) => {
    if (req) {
        ExpenseModel
            .find()
            .populate("category", "name")
            .exec()
            .then((docs: any[]) => {
                res.send({ message: "Expense query completed!", data: docs });
            })
            .catch((err: any) => {
                console.error(err);
                res.status(450).send({ message: "Expense query failed! err = " + err });
            });
    } else {
        res.status(400).send({ message: "Missing required fields." });
    }
})


export const createExpense = ((req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);

    delete req.body._id
    new ExpenseModel(req.body)
        .save()
        .then((doc: ExpenseDocument) => {
            res.send({
                data: doc,
                message: 'Expense Created successfully'
            })
        })
        .catch((err: any) => {
            res.send({
                msg: "Error occured!",
                error: err
            });
        })

})

export const updateExpense = ((req: Request, res: Response, next: NextFunction) => {

    delete req.body._id;
    ExpenseModel.findOneAndUpdate(req.params.expenseId, { $set: req.body }).exec()
        .then((doc) => {
            getExpense(req, res, next)
        })
        .catch((err: any) => {
            console.error(err);
            res.status(450).send({ message: "Expense update failed! err = " + err });
        })
}
)

export const deleteExpense = ((req: Request, res: Response, next: NextFunction) => {

    ExpenseModel.findOneAndRemove(req.params.expenseId).exec()
        .then((doc) => {
            res.send({ message: "Expense delete completed!", data: doc });
        })
        .catch((err: any) => {
            console.error(err);
            res.status(450).send({ message: "Expense delete failed! err = " + err });
        });

})