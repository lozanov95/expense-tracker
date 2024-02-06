export default function Nav() {

    return (
        <nav className="bg-slate-800 flex justify-around">
            <ul></ul>
            <ul className="flex gap-2">
                <LinkItem href="#" label="Sign in" />
                <LinkItem href="#" label="Sign out" />
            </ul>
        </nav>
    )
}


function LinkItem({ href, label }: { href: string, label: string }) {

    return (
        <li className="contents">
            <a
                className="px-4 py-2 font-semibold text-white hover:bg-slate-700"
                href={href}
            >
                {label}
            </a>
        </li>
    )
}