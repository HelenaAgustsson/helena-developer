import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Categories } from './categories';

describe('Categories', () => {
    it('renders categories list', () => {
        render(
            <Categories
                categories={['React', 'TypeScript', 'Tailwind']}
                color="lavender"
                highlighted={false}
            />
        );

        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
        expect(screen.getByText('Tailwind')).toBeInTheDocument();
    });

    it('applies lavender color scheme correctly', () => {
        const { container } = render(
            <Categories
                categories={['React']}
                color='lavender'
                highlighted={false}
            />
        )
        const categoryDiv = container.querySelector('div')
        expect(categoryDiv).toHaveClass('bg-thistle', 'text-violet')
    })

    it('applies aqua color scheme when not highlighted', () => {
        const { container } = render(
            <Categories
                categories={['React']}
                color="aqua"
                highlighted={false}
            />
        );

        const categoryDiv = container.querySelector('div');
        expect(categoryDiv).toHaveClass('bg-aqua', 'text-violet');
    });

    it('applies aqua color scheme when highlighted', () => {
        const { container } = render(
            <Categories
                categories={['React']}
                color="aqua"
                highlighted={true}
            />
        );

        const categoryDiv = container.querySelector('div');
        expect(categoryDiv).toHaveClass('bg-violet', 'text-aqua');
    });

    it('renders empty list when no categories provided', () => {
        const { container } = render(
            <Categories
                categories={[]}
                color="lavender"
                highlighted={false}
            />
        );

        const listItems = container.querySelectorAll('li');
        expect(listItems).toHaveLength(0);
    });
});