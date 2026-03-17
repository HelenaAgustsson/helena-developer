
export function Navigation() {

    const items = [
        { title: 'About me', anchor: '#about' },
        { title: 'Experience', anchor: '#experience' },
        { title: 'Projects', anchor: '#projects' },
        { title: 'Education', anchor: '#education' }]

    return (
        <nav className="nav hidden mt-10 lg:block">
            <ul className="w-max">
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.anchor} className="group flex items-center py-3 target:text-aqua hover:text-aqua hover:[&>div]:bg-aqua active">
                                <div className="mr-4 h-px w-8 bg-mist hover:bg-aqua"></div>
                                <span className="nav-text text-xs font-bold uppercase tracking-widest">{item.title}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>

    )
}