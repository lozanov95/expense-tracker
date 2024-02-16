import { FormEvent, useState } from "react";
import Row, { RowProps } from "./Row";
import Form from "./form";
import { Input, InputWithLabel } from "./input";

export default function Dashboard() {
    const exp: RowProps[] = Array(10)
        .fill({
            category: "Food",
            date: "2024-01-01",
            name: "Happy",
            value: 43.01
        })



    return (
        <main className="pt-4 grid place-items-center gap-2">
            <AddExpense />
            <div className="grid max-w-96 m-auto">
                <div className="bg-blue-900 text-lg font-semibold text-white grid grid-cols-4 rounded-t">
                    <div>Date</div>
                    <div>Category</div>
                    <div>Expense</div>
                    <div>Price</div>
                </div>
                <div className="bg-gray-600 rounded-b">
                    {exp.map((expense, i) =>
                        <Row
                            key={i}
                            category={expense.category}
                            date={expense.date}
                            name={expense.name}
                            value={expense.value}
                        />
                    )}
                </div>
            </div>
        </main>
    )
}


function AddExpense() {
    const [date, setDate] = useState(new Date().toString())
    const [name, setName] = useState("")

    function onSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault()
    }

    return (
        <Form
            title="Add expenses"
            className="grid gap-2"
            onSubmit={onSubmit}
        >
            <InputWithLabel label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name of the expense"
            />
            <InputWithLabel
                label="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date" />
            <Input value="Submit" type="submit" />
        </Form>
    )
}