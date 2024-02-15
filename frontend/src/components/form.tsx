import { ReactNode, FormEventHandler } from "react"

export type FormProps = {
    className?: string
    children?: ReactNode[] | ReactNode
    onSubmit?: FormEventHandler<HTMLFormElement>
    title?: string
    error?: string
    message?: string
}

export default function Form({ children, className, onSubmit, title, message, error }: FormProps) {

    return (
        <form
            className="lg:w-96 flex flex-col gap-1 bg-slate-800 p-4 rounded items-center shadow shadow-slate-700"
            onSubmit={onSubmit}
        >
            <OptionalMessage message={title} className="text-2xl py-2" />
            <OptionalMessage message={message} className="bg-red-600" />
            <OptionalMessage message={error} className="bg-blue-600" />
            <div className={className}>
                {children}
            </div>
        </form>
    )
}

function OptionalMessage({ message, className }: { message?: string, className?: string }) {
    if (!message) {
        return
    }

    return (
        <div className={className}>
            {message}
        </div>
    )
}