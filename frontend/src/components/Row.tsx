import { Expense } from "../lib/expense"

export default function Row({ category, date, name, value }: Expense) {

    return (
        <div className="grid grid-cols-4 hover:bg-slate-800 last-of-type:rounded-b">
            <div>{date}</div>
            <div>{category}</div>
            <div>{name}</div>
            <div>{value} лв.</div>
        </div>
    )
}