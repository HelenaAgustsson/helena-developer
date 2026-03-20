import { render, screen } from '@testing-library/react';
import { EduListing } from "./eduListing";
import { createEduItem } from '@/test/factories';

jest.mock('next-sanity', () => ({
    PortableText: () => <div>Mocked PortableText</div>,
}));

describe('EduListing', () => {


    it('renders correctly when all data is present', () => {
        const mockData = createEduItem()
        render(<EduListing key={0} data={mockData} />);

        expect(screen.getByText(/BSc Computer Science/)).toBeInTheDocument();

        expect(screen.getByText(/January 2020\s*-\s*January 2023/)).toBeInTheDocument();

        expect(screen.getByText('Mocked PortableText')).toBeInTheDocument();
    });


    it('renders nothing if required data is missing', () => {
        const incompleteData = createEduItem({ degree: null as any });

        const { container } = render(<EduListing data={incompleteData as any} />);

        expect(container.firstChild).toBeNull();
    });

});