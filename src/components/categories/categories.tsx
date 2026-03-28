
interface CategoryProps {
    categories: string[];
    highlighted: boolean;
    color: 'lavender' | 'aqua';
}

export function Categories({ categories = [], color, highlighted }: CategoryProps) {
    const colorSchemes = {
        lavender: 'bg-thistle text-violet',
        aqua: highlighted ? 'bg-violet text-aqua' : 'bg-aqua text-violet',
    };
    const colorScheme = colorSchemes[color] || '';

    if (categories.length === 0) {
        return null;
    } else {
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
}