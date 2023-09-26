import Image from "next/image";

const TechStack = () => {
  return (
    <div className="py-24 flex justify-center items-center relative">
      <h1 className="text-[120px] uppercase font-headingText text-primary tracking-wide leading-[110px] text-center">
        Tech stack <br />
        for <br />
        tomorrow
      </h1>
      <span className="text-[30px] opacity-90 absolute top-0">React.js</span>
      <span className="text-[30px] opacity-90 absolute top-24 left-36">
        React.js
      </span>
      <span className="text-[30px] opacity-90 absolute top-42 left-48">
        React.js
      </span>
      <span className="text-[30px] opacity-90 absolute top-96 left-24">
        React.js
      </span>
      <span className="text-[30px] opacity-90 absolute top-72 left-96">
        React.js
      </span>
      <span className="text-[30px] opacity-90 absolute top-56 left-1/3">
        React.js
      </span>

      <span className="text-[30px] opacity-90 absolute bottom-0">React.js</span>
      <span className="text-[30px] opacity-90 absolute bottom-24 right-36">
        React.js
      </span>
      <span className="text-[30px] opacity-90 absolute bottom-42 right-48">
        React.js
      </span>
      <span className="text-[30px] opacity-90 absolute bottom-96 right-24">
        React.js
      </span>
      <span className="text-[30px] opacity-90 absolute bottom-64 right-96">
        React.js
      </span>
      <span className="text-[30px] opacity-90 absolute bottom-56 right-1/3">
        React.js
      </span>
      <Image
        src={"/round-arrow.svg"}
        alt="arrow"
        width={250}
        height={162}
        className="absolute right-52 -bottom-80"
      />
    </div>
  );
};

export default TechStack;
