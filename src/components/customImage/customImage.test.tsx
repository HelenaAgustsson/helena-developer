import { render, screen } from "@testing-library/react";
import type { SanityImage } from "./customImage";
import { CustomImage } from "./customImage";

jest.mock("@/sanity/lib/image", () => ({
    urlFor: jest.fn(() => ({
        url: () => "https://test-image-url.jpg",
        width: () => ({
            quality: () => ({
                url: () => "https://test-blur-url.jpg",
            }),
        }),
    })),
}));

jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => {
        const {
            blurDataURL,
            placeholder,
            fill,
            sizes,
            priority,
            quality,
            ...rest
        } = props;
        // eslint-disable-next-line @next/next/no-img-element
        return <img {...rest} />;
    }
}));

describe("CustomImage", () => {
    it("renders the image with correct src and alt", () => {
        const mockImage: SanityImage = {
            _type: "image",
            asset: {
                _ref: "image-123",
                _type: "reference",
            },
            alt: "Test Image",
        };
        render(<CustomImage image={mockImage} width={100} height={100} />);

        const imgElement = screen.getByAltText("Test Image") as HTMLImageElement;
        expect(imgElement).toBeInTheDocument();
        expect(imgElement.src).toBe("https://test-image-url.jpg/");
    });

    it("renders fill image correctly", () => {
        const mockImage: SanityImage = {
            _type: "image",
            asset: {
                _ref: "image-123",
                _type: "reference",
            },
            alt: "Test Image",
        };
        render(<CustomImage image={mockImage} fill />);

        const imgElement = screen.getByAltText("Test Image") as HTMLImageElement;
        expect(imgElement).toBeInTheDocument();
        expect(imgElement.src).toBe("https://test-image-url.jpg/");
        expect(imgElement.parentElement).toHaveClass("relative w-full h-full");
    })

    it("returns null when no image is provided", () => {
        const { container } = render(<CustomImage image={null} />);
        expect(container.firstChild).toBeNull();
    });
});