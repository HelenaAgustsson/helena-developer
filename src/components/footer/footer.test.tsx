
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
    it('should render the footer component', () => {
        render(<Footer />);
        expect(screen.getByText(/Author: Helena Agustsson/)).toBeInTheDocument();
    });
});