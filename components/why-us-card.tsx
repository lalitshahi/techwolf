interface WhyUsCardProps {
  title: string;
  desc: string;
}
const WhyUsCard = ({ title, desc }: WhyUsCardProps) => {
  return (
    <div className="group flex flex-col bg-[#1E211F] hover:bg-primary transition duration-500 p-10 space-y-4 min-w-[330px]">
      <h2 className="text-[22px] font-semibold text-[#fff] group-hover:text-[#151616]">
        {title}
      </h2>
      <p className="text-[18px] font-light text-[#818181] group-hover:text-[#151616]">
        {desc}
      </p>
    </div>
  );
};

export default WhyUsCard;
