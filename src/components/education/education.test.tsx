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
    it('renders education items correctly', async () => {
        const mockPosts = [
            { title: "University A" },
            { title: "University B" },
        ];

        (sanityFetch as jest.Mock).mockResolvedValue({
            data: mockPosts,
        });

        const component = await Education();
        render(component);

        expect(screen.getByText("Education")).toBeInTheDocument();
        expect(sortPosts).toHaveBeenCalledWith(mockPosts);
    })

});
