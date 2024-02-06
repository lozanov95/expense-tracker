export type InputWithLabelProps = {
    label: string
    value: string
}

export function InputWithLabel({ label, value }: InputWithLabelProps) {

    return (
        <label className=""> {label}
            <input className="rounded" value={value} />
        </label>
    )
}