
interface CategoryProps {
    categories: string[]
}

const Categories = ({categories}:CategoryProps ) => {
    return (
        <ul className="my-2 flex flex-wrap">
            {categories.map((cat, index) => (
                <li key={index} className="mr-1.5 mt-2">
                     <div className="bg-thistle text-violet flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5">{cat}</div>
                </li>
                )
            )}
        </ul>
    )
}

export default Categories;