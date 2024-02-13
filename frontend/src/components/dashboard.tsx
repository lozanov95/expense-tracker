import { FormEvent } from "react";
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

    function onSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault()
    }

    return (
        <main className="pt-4 grid place-items-center gap-2">
            <Form
                title="Add expenses"
                className="gap-2 flex flex-col"
                onSubmit={onSubmit}
            >
                <InputWithLabel label="Name" value="test" />
                <Input value="Submit" type="submit" />
            </Form>
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