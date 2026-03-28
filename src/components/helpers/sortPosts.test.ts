import { sortPosts } from "./sortPosts";

describe("sortPosts", () => {
  it("sorts posts by start_date descending (newest first)", () => {
    const posts = [
      { title: "Old", start_date: "2020-01-01" },
      { title: "New", start_date: "2023-01-01" },
      { title: "Middle", start_date: "2021-01-01" },
    ];

    const sortedPosts = sortPosts(posts);

    expect(sortedPosts.map(p => p.title)).toEqual([
      "New",
      "Middle",
      "Old",
    ]);
  });
});