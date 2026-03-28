import dayjs from "dayjs";

type WithStartDate = {
  start_date?: string | null;
};

export const sortPosts = <T extends WithStartDate>(posts: T[]): T[] => {
  return [...posts].sort((a, b) => {
    const aDate = a.start_date ? dayjs(a.start_date) : dayjs(0);
    const bDate = b.start_date ? dayjs(b.start_date) : dayjs(0);
    return bDate.diff(aDate);
  });
};