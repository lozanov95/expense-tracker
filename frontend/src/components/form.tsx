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
        <form className={className} onSubmit={onSubmit}>
            <OptionalMessage message={title} className="text-2xl py-2" />
            <OptionalMessage message={message} className="bg-red-600" />
            <OptionalMessage message={error} className="bg-blue-600" />
            <div>
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