import { render, screen } from '@testing-library/react';
import { EduListing } from './edu-listing';
import { createEduItem } from "@/test/factories";

jest.mock('@portabletext/react', () => ({
    PortableText: () => <div>Mocked PortableText</div>,
}));

describe('EduListing', () => {
    const mockData = createEduItem()

    it('renders correctly when all data is present', () => {
        render(<EduListing data={mockData} />);

        expect(screen.getByText('BSc Computer Science')).toBeInTheDocument();

        expect(screen.getByText('January 2020 - January 2023')).toBeInTheDocument();

        expect(screen.getByText('Mocked PortableText')).toBeInTheDocument();
    });

    it('renders nothing if required data is missing', () => {
        const incompleteData = { ...mockData, degree: null };

        const { container } = render(<EduListing data={incompleteData as any} />);

        expect(container.firstChild).toBeNull();
    });
});