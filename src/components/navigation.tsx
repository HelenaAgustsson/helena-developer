
const Navigation = () => {
    return (
            <nav className="nav hidden mt-10 lg:block">
                <ul className="w-max">
                    <li>
                        <a href="#about" className="group flex items-center py-3 target:text-aqua hover:text-aqua hover:[&>div]:bg-aqua active">
                            <div className="mr-4 h-px w-8 bg-mist hover:bg-aqua"></div>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest">About me</span>    
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="group flex items-center py-3 hover:text-aqua hover:[&>div]:bg-aqua">
                            <div className="mr-4 h-px w-8 bg-mist"></div>
                            <span className="nav-text text-xs font-bold uppercase tracking-widest">Experience</span>
                        </a>
                        </li>
                    <li>
                        <a href="#projects" className="group flex items-center py-3 hover:text-aqua hover:[&>div]:bg-aqua">
                            <div className="mr-4 h-px w-8 bg-mist"></div>
                             <span className="nav-text text-xs font-bold uppercase tracking-widest">Projects</span>    
                        </a>
                    </li>
                    <li>
                        <a href="#education" className="group flex items-center py-3 hover:text-aqua hover:[&>div]:bg-aqua">
                            <div className="mr-4 h-px w-8 bg-mist"></div>
                             <span className="nav-text text-xs font-bold uppercase tracking-widest">Education</span>    
                        </a>
                    </li>
                </ul>
            </nav>

    )
}

export default Navigation;