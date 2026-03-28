
import { render, screen } from '@testing-library/react';
import { Education } from './education';
import { sanityFetch } from "@/sanity/lib/live";
import { sortPosts } from '../helpers/sortPosts';

jest.mock("next-sanity", () => ({
    defineQuery: (query: string) => query,
}));

// mock the sanityFetch function to return a resolved promise with mock data
jest.mock("@/sanity/lib/live", () => ({
    sanityFetch: jest.fn(),
}));

jest.mock("../helpers/sortPosts", () => ({
    sortPosts: jest.fn(),
}));

jest.mock("./eduListing", () => ({
    EduListing: ({ data }: any) => <li data-testid="edu-item">{data.title}</li>,
}));

describe('Education', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders education items correctly', async () => {
        const mockPosts = [
            { title: "University A" },
            { title: "University B" },
        ];

        (sanityFetch as jest.Mock).mockResolvedValue({
            data: mockPosts,
        });
        (sortPosts as jest.Mock).mockReturnValue(mockPosts);

        const component = await Education();
        render(component);

        expect(screen.getByText("Education")).toBeInTheDocument();
        const items = screen.getAllByTestId("edu-item");
        expect(items).toHaveLength(2);

        expect(items[0]).toHaveTextContent("University A");
        expect(items[1]).toHaveTextContent("University B");
        expect(sortPosts).toHaveBeenCalledWith(mockPosts);
    })

    it('renders error message when no data is available', async () => {
        (sanityFetch as jest.Mock).mockResolvedValue({
            data: null,
        });

        const component = await Education();
        render(component);

        expect(screen.getByText("Error loading education data.")).toBeInTheDocument();
    });

    it('renders error message when data is not an array', async () => {
        (sanityFetch as jest.Mock).mockResolvedValue({
            data: "invalid data",
        });

        const component = await Education();
        render(component);

        expect(screen.getByText("Error loading education data.")).toBeInTheDocument();
    });


});
