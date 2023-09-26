import Image from "next/image";
import ProcessStep from "@/components/process-step";

const processes = [
  {
    step: 1,
    title: "Planning",
    info: "Discovery Phase",
    subInfo: "UX Research",
    image: "/planning.svg",
  },
  {
    step: 2,
    title: "Design",
    info: "Wireframing",
    subInfo: "Prototyping",
    image: "/planning.svg",
  },
  {
    step: 3,
    title: "Development",
    info: "Frontend",
    subInfo: "Backend",
    image: "/planning.svg",
  },
  {
    step: 4,
    title: "Testing",
    info: "Quality Assurance",
    subInfo: "Optimization",
    image: "/planning.svg",
  },
  {
    step: 5,
    title: "Release",
    info: "Final Quality Check",
    subInfo: "Product release",
    image: "/planning.svg",
  },
  {
    step: 6,
    title: "Support",
    info: "Ongoing Support",
    subInfo: "Maintenance",
    image: "/planning.svg",
  },
];
const Process = () => {
  return (
    <div className="flex justify-between p-24 relative space-y-4 items-center">
      <h1 className="flex-1 text-[40px] tracking-normal text-left font-normal">
        We begin by understanding your{" "}
        <span className="font-headingText text-primary tracking-widest">
          vision
        </span>
        ,{" "}
        <span className="font-headingText text-primary tracking-widest">
          goals
        </span>
        , and{" "}
        <span className="font-headingText text-primary tracking-widest">
          target audience
        </span>
        . This crucial step forms the foundation for the entire project.
      </h1>
      <div className="flex-1 flex justify-center items-center">
        <div
          className="relative flex justify-center items-center"
          style={{ width: 600, height: 600 }}
        >
          <Image src={"/process.svg"} alt="process" width={250} height={250} />
          {processes.map((process) => (
            <ProcessStep
              key={process.step}
              index={process.step}
              title={process.title}
              info={process.info}
              subInfo={process.subInfo}
              image={process.image}
            />
          ))}
          {[1, 2, 3, 4, 5, 6].map((process) => (
            <div
              key={process}
              className="absolute"
              style={{
                transformOrigin: 240,
                left: 60,
                transform: `rotate(calc(360deg/6 * ${process} ))`,
              }}
            >
              <Image
                src={"/circle-arrow.svg"}
                alt={"process arrows"}
                width={60}
                height={60}
                style={{
                  transform: `rotate(calc(360deg/-6))`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
