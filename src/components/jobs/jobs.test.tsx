import { render, screen } from '@testing-library/react';
import { sanityFetch } from '@/sanity/lib/live';
import { Jobs } from './jobs';

// mock definequery from next sanity to return a string query 
jest.mock("next-sanity", () => ({
    defineQuery: (query: string) => query,
}));

// mock the sanityFetch function to return a resolved promise with mock data
jest.mock("@/sanity/lib/live", () => ({
    sanityFetch: jest.fn(),
}));

// mock the JobListing component to return a simple list item with the job title
jest.mock("./jobListing", () => ({
    JobListing: ({ data }: any) => <li data-testid="job-item">{data.title}</li>,
}));

describe('Jobs', () => {
    it('renders job section correctly', async () => {
        const mockPosts = [
            { title: "Frontend Developer" },
            { title: "Conversion Optimizer" },
        ];

        (sanityFetch as jest.Mock).mockResolvedValue({
            data: mockPosts,
        });

        const component = await Jobs();
        render(component);

        expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    })

});