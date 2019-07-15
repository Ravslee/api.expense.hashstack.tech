# api.expense.hashstack.tech
REST API Implementation using Express Js 

## API Implemented using ExpressJs and Typescript

To run the server, in the terminal type
`npm start`

Note: Make sure, the mongodb is running on your machine

The server will listen to port at *3000* http://localhost:3000

## Third party library used
* Mongoose  [Mongoose](https://mongoosejs.com/)


## Expense API 

 GET        http://localhost:3000/core/api/expense
 
 GET        http://localhost:3000/core/api/expense/:expenseId 

 GET        http://localhost:3000/core/api/expense/chart/data

 POST       http://localhost:3000/core/api/expense 
 
 PUT        http://localhost:3000/core/api/expense/:expenseId 
 
 DELETE     http://localhost:3000/core/api/expense/:expenseId 
 

## Category API 
 *GET        http://localhost:3000/core/api/category 

 *GET        http://localhost:3000/core/api/category/:categoryId 

 *POST       http://localhost:3000/core/api/category 

 *PUT        http://localhost:3000/core/api/category/:categoryId 

 *DELETE     http://localhost:3000/core/api/category/:categoryId 

## Budget API 

 GET        http://localhost:3000/core/api/budget 
 
 GET        http://localhost:3000/core/api/budget/:budgetId 
 
 POST       http://localhost:3000/core/api/budget 
 
 PUT        http://localhost:3000/core/api/budget/:budgetId 
 
 DELETE     http://localhost:3000/core/api/budget/:budgetId 


