import { ChangeEventHandler, HTMLInputTypeAttribute } from "react"

export type InputProps = {
    value: string | number
    type?: HTMLInputTypeAttribute
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export type InputWithLabelProps = InputProps & {
    label: string
}

export function InputWithLabel({ label, value, type, onChange }: InputWithLabelProps) {

    return (
        <label className="flex gap-2"> {label}
            <Input value={value} type={type} onChange={onChange} />
        </label>
    )
}

export function Input({ value, type, onChange }: InputProps) {

    return (
        <input
            className="rounded bg-slate-600 px-1"
            value={value}
            type={type}
            onChange={onChange}
        />
    )
}