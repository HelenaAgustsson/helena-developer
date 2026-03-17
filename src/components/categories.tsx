
interface CategoryProps {
    categories: string[];
    highlighted: boolean;
    color: 'lavender' | 'aqua';
}

export function Categories({ categories, color, highlighted }: CategoryProps) {
    let colorScheme = ''
    if (color === 'lavender') {
        colorScheme = 'bg-thistle text-violet'
    } else if (color === 'aqua' && !highlighted) {
        colorScheme = 'bg-aqua text-violet'
    } else if (color === 'aqua' && highlighted) {
        colorScheme = 'bg-violet text-aqua'
    }

    return (
        <ul className="my-2 flex flex-wrap">
            {categories.map((cat, index) => (
                <li key={index} className="mr-1.5 mb-1.5">
                    <div className={`${colorScheme} flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5`}>
                        {cat}
                    </div>
                </li>
            ))}
        </ul>
    )
}