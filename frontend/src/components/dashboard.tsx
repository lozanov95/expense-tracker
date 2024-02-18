import { ChangeEvent, FormEvent, useState } from "react";
import Row from "./Row";
import Form from "./form";
import { Input, InputWithLabel } from "./input";
import { Expense } from "../lib/expense";


export default function Dashboard() {
    const exp: Expense[] = Array(10)
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
    const [formError, setFormError] = useState("")
    const [formMessage, setFormMessage] = useState("")
    const [formData, setFormData] = useState<Expense>({
        name: "",
        date: new Date().toString(),
        category: "",
        value: 0
    })


    function handleFormUpdate(event: ChangeEvent<HTMLInputElement>) {
        setFormData((data) => { return { ...data, [event.target.name]: event.target.value } })
    }

    function onSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault()

        setFormData({
            name: "",
            date: new Date().toString(),
            category: "",
            value: 0
        })

        setFormMessage("The expense was added.")
        setFormError("")
    }

    return (
        <Form
            title="Add expenses"
            className="grid gap-2"
            onSubmit={onSubmit}
            error={formError}
            message={formMessage}
        >
            <InputWithLabel label="Name"
                value={formData?.name}
                name="name"
                onChange={handleFormUpdate}
                placeholder="Name of the expense"
                required
            />
            <InputWithLabel
                value={formData.date}
                onChange={handleFormUpdate}
                label="Date"
                name="date"
                type="date"
                required
            />
            <InputWithLabel
                value={formData.category}
                label="Category"
                name="category"
                onChange={handleFormUpdate}
                required
            />
            <InputWithLabel
                value={formData.value}
                label="Price"
                name="value"
                onChange={handleFormUpdate}
                type="number"
                step={0.01}
                min={0.01}
                required
            />
            <Input value="Submit" type="submit" />
        </Form>
    )
}