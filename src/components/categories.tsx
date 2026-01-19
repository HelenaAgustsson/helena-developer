
interface CategoryProps {
    categories: string[];
    highlighted: boolean;
    color: 'lavender' | 'aqua';
}

const Categories = ({ categories, color, highlighted }: CategoryProps) => {
    return (
        <ul className="my-2 flex flex-wrap">
            {categories.map((cat, index) => (
                <li key={index} className="mr-1.5 mb-1.5">
                    <div className={
                        `
                         ${color == 'lavender' ? 'bg-thistle' : 'bg-aqua'} 
                         ${highlighted && color == 'aqua' ? 'bg-violet text-aqua' : 'text-violet'}
                         flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5`}>
                        {cat}
                    </div>
                </li>
            )
            )}
        </ul>
    )
}

export default Categories;