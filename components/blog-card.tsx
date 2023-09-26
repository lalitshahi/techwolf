import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="bg-white p-8 flex text-[#151616] space-x-12">
      <Image src={"/blog1.svg"} alt="blog thumbnail" width={443} height={334} />
      <div className="flex flex-col">
        <h2 className="text-[40px]">
          How to Choose the Right Technology Stack for Your Web Project
        </h2>
        <p>
          We don&apos;t just create designs; we create solutions that align with
          your business objectives. Every pixel is purposeful and every line of
          code is a step towards achieving your goals.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
