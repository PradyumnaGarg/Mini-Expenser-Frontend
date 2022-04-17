import { useState } from "react";
import { AddNewExpense } from "./add-new-expense";
import { ViewAllExpenses } from "./view-all-expense";

const ExpenseManager = () => {
    const [expenses, setExpenses] = useState([]);
    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-full lg:w-2/5 space-y-6 p-8">
                <h1 className="text-2xl font-bold inline-flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>
                        Mini Expenser
                    </span>
                </h1>
                <AddNewExpense setExpenses={setExpenses}></AddNewExpense>
                <ViewAllExpenses expenses={expenses}></ViewAllExpenses>
            </div>
        </div>
    )
}

export default ExpenseManager;