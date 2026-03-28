import { render, screen } from '@testing-library/react';
import { createJobItem } from '@/test/factories';
import { JobListing } from "./jobListing";

jest.mock('next-sanity', () => ({
    PortableText: () => <div>Mocked PortableText</div>,
}));

describe('JobListing', () => {
    const mockData = createJobItem();

    it('renders correctly when all data is present', () => {
        render(<JobListing data={mockData} highlighted={false} />);

        expect(screen.getByText(/Frontend Developer/)).toBeInTheDocument();
        expect(screen.getByText(/Tech Company/)).toBeInTheDocument();
        expect(screen.getByText(/January 2020\s*-\s*January 2023/)).toBeInTheDocument();
        expect(screen.getByText('Mocked PortableText')).toBeInTheDocument();
        expect(screen.getByText(/React/)).toBeInTheDocument();
        expect(screen.getByText(/Typescript/)).toBeInTheDocument();
    });

    it('renders correctly when optional data is missing', () => {
        const incompleteData = createJobItem({ body: undefined, categories: undefined });

        render(<JobListing data={incompleteData} highlighted={false} />);

        expect(screen.getByText(/Frontend Developer/)).toBeInTheDocument();
        expect(screen.getByText(/Tech Company/)).toBeInTheDocument();
        expect(screen.getByText(/January 2020\s*-\s*January 2023/)).toBeInTheDocument();
        expect(screen.queryByText('Mocked PortableText')).not.toBeInTheDocument();
        expect(screen.queryByText(/React/)).not.toBeInTheDocument();
        expect(screen.queryByText(/Typescript/)).not.toBeInTheDocument();
    });

    it('renders "Present" when end_date is missing', () => {
        const ongoingData = createJobItem({ end_date: undefined });

        render(<JobListing data={ongoingData} highlighted={false} />);

        expect(screen.getByText(/January 2020\s*-\s*Present/)).toBeInTheDocument();
    });

    it('renders "…" when start_date is missing', () => {
        const missingStartData = createJobItem({ start_date: undefined });

        render(<JobListing data={missingStartData} highlighted={false} />);

        expect(screen.getByText(/…\s*-\s*January 2023/)).toBeInTheDocument();
    });

    it('applies highlighted styles when highlighted is true', () => {
        render(<JobListing data={mockData} highlighted={true} />);

        const listing = screen.getByText(/Frontend Developer/).closest('li');
        expect(listing).toHaveClass('bg-aqua');
        expect(listing).toHaveClass('text-violet');
    });
});