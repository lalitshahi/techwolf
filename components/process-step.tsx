import Image from "next/image";

interface ProcessStep {
  index: number;
  icon?: string;
  image?: string;
  title: string;
  info: string;
  subInfo: string;
}
const ProcessStep = ({
  index,
  icon,
  image,
  title,
  info,
  subInfo,
}: ProcessStep) => {
  return (
    <div
      className="absolute"
      style={{
        transformOrigin: 290,
        left: 0,
        transform: `rotate(calc(360deg/6 * ${index} + 30deg ))`,
      }}
    >
      <div
        className="flex flex-col text-center justify-center items-center"
        style={{ transform: `rotate(calc(360deg/-6 * ${index} - 30deg))` }}
      >
        {image && (
          <Image
            src={image}
            width={30}
            height={30}
            alt="planning"
            className="mb-2"
          />
        )}
        {icon && icon}
        <span className="tracking-wider">{title}</span>
        <span className="text-[#818181] text-sm tracking-wider">{info}</span>
        <span className="text-[#818181] text-sm tracking-wider">{subInfo}</span>
      </div>
    </div>
  );
};

export default ProcessStep;
