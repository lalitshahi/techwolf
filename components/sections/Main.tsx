const Main = () => {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <p className="uppercase font-headingText text-[300px] text-white opacity-5 absolute top-0 -left-28 leading-[300px]">
        creativity
      </p>
      <div className="px-24 pt-32 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-[120px] uppercase font-headingText text-primary tracking-wide leading-[110px]">
            From Idea <br />
            to Impact
          </h1>
          <p className="py-6 font-light tracking-wide text-lg">
            Welcome to TechWolf Solutions, where innovation meets impact,
            <br />
            technology meets creativity, and success is Re-imagined.
          </p>
        </div>
        <div className="flex flex-col top-0">
          <span className="text-primary font-bold">|</span>
          <span className="text-white font-bold">|</span>
          <span className="text-white font-bold">|</span>
          <span className="text-white font-bold">|</span>
        </div>
      </div>
      <p className="uppercase font-headingText text-[300px] overflow-hidden text-white opacity-5 absolute top-[30rem] -left-28 leading-[300px]">
        tech
      </p>
      <div className="text-right px-24 space-y-2 pt-14">
        <h2 className="text-[32px] font-semibold">
          Web Design and Development
        </h2>
        <p>
          We create visually captivating and user-centric <br />
          websites that are not just digital landmarks but <br /> also immersive
          experiences.
        </p>
        <p className="text-[20px] text-primary border-b-2 border-primary pb-1 w-fit cursor-pointer ml-auto">
          Find out more
        </p>
      </div>
    </div>
  );
};

export default Main;
