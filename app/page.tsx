// import { ModeToggle } from "@/components/mode-toggle";
import ContactUs from "@/components/sections/ContactUs";
import Header from "@/components/sections/Header";
import Main from "@/components/sections/Main";
import Process from "@/components/sections/Process";
import RecentBlogs from "@/components/sections/RecentBlogs";
import TechStack from "@/components/sections/TechStack";
import OurUSP from "@/components/sections/USP";
import WhatDrivesUs from "@/components/sections/WhatDrivesUs";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <TechStack />
      <WhatDrivesUs />
      <Process />
      <OurUSP />
      <RecentBlogs />
      <ContactUs />
    </div>
  );
}
