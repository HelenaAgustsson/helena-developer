import { render, screen } from '@testing-library/react';
import { sanityFetch } from '@/sanity/lib/live';
import { Projects } from './projects';

// mock definequery from next sanity to return a string query 
jest.mock("next-sanity", () => ({
    defineQuery: (query: string) => query,
}));

// mock the sanityFetch function to return a resolved promise with mock data
jest.mock("@/sanity/lib/live", () => ({
    sanityFetch: jest.fn(),
}));

// mock the ProjectListing component to return a simple list item with the project title
jest.mock("./projectListing", () => ({
    ProjectListing: ({ data }: any) => <li data-testid="project-item">{data.title}</li>,
}));

describe('Projects', () => {
    it('renders project section correctly', async () => {
        const mockPosts = [
            { title: "React Project" },
            { title: "Full stack project" },
        ];

        (sanityFetch as jest.Mock).mockResolvedValue({
            data: mockPosts,
        });

        const component = await Projects();
        render(component);

        expect(screen.getByText("Projects")).toBeInTheDocument();
        const items = screen.getAllByTestId("project-item");
        expect(items).toHaveLength(2);

        expect(items[0]).toHaveTextContent("React Project");
        expect(items[1]).toHaveTextContent("Full stack project");
    })

});