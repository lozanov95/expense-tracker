import { InputHTMLAttributes } from "react"

export type InputWithLabelProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string
}

export function InputWithLabel(props: InputWithLabelProps) {

    return (
        <label className="grid justify-items-start gap-1 font-semibold"> {props.label}
            <Input {...props} />
        </label>
    )
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {

    return (
        <input
            className="rounded bg-slate-600 px-1 py-0.5"
            {...props}
        />
    )
}