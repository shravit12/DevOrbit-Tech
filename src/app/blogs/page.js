import BlogsClient from "./BlogsClient";

export const metadata = {
  title: "Latest Blogs | DevOrbit",
  description:
    "Read latest tech blogs about web development, AI, coding roadmap, and tutorials.",
};

export default function Page() {
  return <BlogsClient />;
}