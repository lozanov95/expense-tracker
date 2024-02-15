export default function Nav() {
    const loggedIn = false;

    return (
        <nav className="bg-slate-800 flex justify-around">
            <ul></ul>
            <ul className="flex gap-2">
                {loggedIn ?
                    <LinkItem href="#" label="Sign out" />
                    :
                    <LinkItem href="#" label="Sign in" />
                }
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