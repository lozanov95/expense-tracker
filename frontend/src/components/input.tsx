export type InputProps = {
    value: string
    type?: string
}

export type InputWithLabelProps = InputProps & {
    label: string
}

export function InputWithLabel({ label, value }: InputWithLabelProps) {

    return (
        <label className="flex gap-2"> {label}
            <Input value={value} />
        </label>
    )
}

export function Input({ value, type }: InputProps) {

    return (
        <input
            className="rounded bg-slate-600 px-1"
            value={value}
            type={type}
        />
    )
}