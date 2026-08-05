import { About, Hero, Skills } from "@Components/sections";


export default function Home() {
  return (
    <div className="relative -mt-[74px] flex flex-col">
      <Hero />
      <About />
      <Skills />
      {/* <SectionDivider /> */}
      {/* <Experience /> */}
      {/* <SectionDivider /> */}
      {/* <Projects /> */}
      {/* <SectionDivider /> */}
      {/* <Certificates /> */}
      {/* <SectionDivider /> */}
      {/* <Contact /> */}
    </div>
  );
}
