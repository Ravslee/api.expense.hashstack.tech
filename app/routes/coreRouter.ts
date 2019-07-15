import express = require("express");
import * as expenseCtrl from "../controllers/expense"
import * as categoryCtrl from "../controllers/category"
import * as budgetCtrl from "../controllers/budget"

export const router = express.Router();

router.get('/expense', expenseCtrl.getAllExpense);
router.get('/expense/:expenseId', expenseCtrl.getExpense);
router.post('/expense', expenseCtrl.createExpense);
router.put('/expense/:expenseId', expenseCtrl.updateExpense);
router.delete('/expense/:expenseId', expenseCtrl.deleteExpense)
router.get('/expense/chart/data', expenseCtrl.getAllExpenseDataForChart);


router.get('/category', categoryCtrl.getAllCategories);
router.get('/category/:categoryId', categoryCtrl.getCategory);
router.post('/category', categoryCtrl.createCategory);
router.put('/category/:categoryId', categoryCtrl.updateCategory);
router.delete('/category/:categoryId', categoryCtrl.deleteCategory)

router.get('/budget', budgetCtrl.getAllBudgets);
router.get('/budget/:budgetId', budgetCtrl.getBudget);
router.post('/budget', budgetCtrl.createBudget);
router.put('/budget/:budgetId', budgetCtrl.updateBudget);
router.delete('/budget/:budgetId', budgetCtrl.deleteBudget)