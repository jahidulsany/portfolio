import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Projects from "../components/Projects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Clients />
        <Experience />
        <Approach />
      </div>
    </main>
  );
}
