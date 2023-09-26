import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="flex justify-between px-24 pt-5">
      <Image src={"/logo.svg"} alt={"logo"} width={50} height={40} />
      <Button variant={"outline"} className="rounded-full">
        Let&apos;s connect
      </Button>
    </div>
  );
};

export default Header;
