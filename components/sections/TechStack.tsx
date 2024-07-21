import Image from "next/image";

const TechStack = () => {
  return (
    <div className="py-24 flex justify-center items-center relative">
      <h1 className="text-[40px] md:text-[120px] uppercase font-headingText text-primary tracking-wide md:leading-[110px] text-center">
        Tech stack <br />
        for <br />
        tomorrow
      </h1>
      <span className="text-[18px] md:text-[30px] opacity-50 absolute top-10">
        React.js1
      </span>
      <span className="text-[18px] md:text-[30px] opacity-50 absolute top-20 left-3 md:left-36">
        React.js2
      </span>
      <span className="text-[18px] md:text-[30px] opacity-50 absolute top-42 left-10 md:left-48">
        React.js3
      </span>
      <span className="text-[18px] md:text-[30px] opacity-50 absolute top-72 left-3 md:top-96 md:left-24">
        React.js4
      </span>
      <span className="text-[18px] md:text-[30px] opacity-50 absolute top-20 left-3/4 md:top-72 md:left-96">
        React.js5
      </span>
      <span className="text-[18px] md:text-[30px] opacity-50 absolute top-52 md:top-56 left-1/3">
        React.js6
      </span>

      <span className="text-[18px] md:text-[30px] opacity-50 absolute bottom-10 md:bottom-0">
        React.js7
      </span>
      <span className="hidden md:block text-[18px] md:text-[30px] opacity-50 absolute bottom-24 right-36">
        React.js8
      </span>
      <span className="text-[18px] md:text-[30px] opacity-50 absolute right-10 md:bottom-42 md:right-48">
        React.js9
      </span>
      <span className="hidden md:block text-[18px] md:text-[30px] opacity-50 absolute bottom-96 right-24">
        React.js10
      </span>
      <span className="hidden md:block text-[18px] md:text-[30px] opacity-50 absolute bottom-64 right-96">
        React.js11
      </span>
      <span className="text-[18px] md:text-[30px] opacity-50 absolute bottom-20 right-3 md:bottom-56 md:right-1/3">
        React.js12
      </span>
      <Image
        src={"/round-arrow.svg"}
        alt="arrow"
        width={250}
        height={162}
        className="hidden md:block absolute right-52 -bottom-80"
      />
    </div>
  );
};

export default TechStack;
