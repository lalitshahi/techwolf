const Main = () => {
  return (
    <div className="relative h-fit pb-24 md:h-screen max-h-fit overflow-x-hidden">
      <p className="uppercase font-headingText text-[100px] md:text-[300px] text-white opacity-5 absolute top-0 md:-left-28 leading-[300px]">
        creativity
      </p>
      <div className="px-6 md:px-24 pt-11 md:pt-32 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-[40px] md:text-[120px] uppercase font-headingText text-primary tracking-wide md:leading-[110px]">
            From Idea <br />
            to Impact
          </h1>
          <p className="py-6 font-light tracking-wide text-lg">
            Welcome to TechWolf Solutions, where innovation meets impact,
            <br />
            technology meets creativity, and success is Re-Imagined.
          </p>
        </div>
        <div className="flex flex-col top-0">
          <span className="text-primary font-bold">|</span>
          <span className="text-white font-bold">|</span>
          <span className="text-white font-bold">|</span>
          <span className="text-white font-bold">|</span>
        </div>
      </div>
      <p className="text-[100px] uppercase font-headingText md:text-[300px] overflow-hidden text-white opacity-5 absolute top-[30rem] md:-left-28 md:leading-[300px]">
        tech
      </p>
      <div className="text-right px-6 md:px-24 space-y-2 pt-14">
        <h2 className="text-[22px] md:text-[32px] font-semibold">
          Web Design and Development
        </h2>
        <p className="opacity-80">
          We create visually captivating and user-centric websites{" "}
          <br className="hidden md:block" /> that are not just digital landmarks
          but <br className="hidden md:block" /> also immersive experiences.
        </p>
        <p className="md:text-[20px] text-primary border-b-2 border-primary pb-1 w-fit cursor-pointer ml-auto">
          Find out more
        </p>
      </div>
    </div>
  );
};

export default Main;
