import Image from "next/image";
import BlogCard from "@/components/blog-card";

const RecentBlogs = () => {
  return (
    <div className="p-24 flex-col space-y-8">
      <h2 className="font-headingText text-[50px] text-primary">Insights</h2>
      <div className="flex">
        <p className="leading-[30px]">
          Explore the intricate thought processes of our talented techy wolves
          at TechWolf by delving into our blog, <br />
          which will provide you with a profound insight into our identity.
        </p>
        <p className="text-primary border-b-2 border-primary pb-1 w-fit h-fit cursor-pointer ml-auto">
          More Blogs
        </p>
      </div>

      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default RecentBlogs;
