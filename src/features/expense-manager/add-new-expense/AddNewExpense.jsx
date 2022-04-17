import { useForm } from "react-hook-form";

const AddNewExpense = ({setExpenses}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setExpenses((expenses) => [...expenses, data])
    };

    return (
        <div className="border border-gray-200 rounded-2xl p-8 max-w-2xl shadow-md dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-xl font-bold mb-2">Add New Expense</h1>
                <div class="mb-6">
                    <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Expense Name</label>
                    <input type="text" id="name" {...register('name')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-6">
                    <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Amount</label>
                    <input type="number" id="amount" {...register('amount')} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
};

export default AddNewExpense;