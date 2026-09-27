import { About, Certificates, Experience, Hero, Projects, Skills } from "@Components/sections";


export default function Home() {
  return (
    <div className="relative -mt-[74px] flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      {/* <Contact /> */}
    </div>
  );
}
