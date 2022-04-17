const ViewAllExpenses = ({expenses}) => {
    return (
        <div>
            <div class="p-4 max-w-2xl bg-white rounded-2xl border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-between items-center mb-4">
                    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">All Transactions</h5>
                    <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">View all</a>
                </div>
                <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            expenses.length > 0 && expenses.map((expense) => {
                                return (
                                    <li class="py-3 sm:py-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    {expense.name}
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {expense.amount}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        {
                            expenses.length === 0 && <>
                                <p className="text-lg text-gray-500">No transactions recorded yet.</p>
                            </>
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ViewAllExpenses;