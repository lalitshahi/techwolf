import WhyUsCard from "@/components/why-us-card";

const OUR_USP = [
  {
    title: "Innovation Meets Strategy",
    desc: "We don't just create designs; we create solutions that align with your business objectives. Every pixel is purposeful and every line of code is a step towards achieving your goals.",
  },
  {
    title: "User-Centric Approach",
    desc: "We don't just create designs; we create solutions that align with your business objectives. Every pixel is purposeful and every line of code is a step towards achieving your goals.",
  },
  {
    title: "Cutting-Edge Technology",
    desc: "We harness the power of the latest technologies and frameworks to build robust and scalable solutions that stand the test of time.",
  },
  {
    title: "Your Success, Our Priority",
    desc: "Your success is our ultimate goal. We work tirelessly to understand your needs, exceed your expectations, and deliver outcomes that drive growth.",
  },
  {
    title: "Your Success, Our Priority",
    desc: "Your success is our ultimate goal. We work tirelessly to understand your needs, exceed your expectations, and deliver outcomes that drive growth.",
  },
];
const OurUSP = () => {
  return (
    <div className="space-y-20 py-24">
      <h1 className="px-24 text-[120px] uppercase font-headingText text-primary tracking-wide leading-[128px]">
        What Sets Us
        <br /> Apart
      </h1>
      <div className="pl-24 flex space-x-8 overflow-scroll pr-24">
        {OUR_USP.map((usp) => (
          <WhyUsCard key={usp.title} {...usp} />
        ))}
      </div>
    </div>
  );
};

export default OurUSP;
