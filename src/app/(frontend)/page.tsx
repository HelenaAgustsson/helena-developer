import About from "@/components/about";
import Experience from "../../components/experience";
import Eduction from "@/components/education";
import Projects from "@/components/projects";
import Navigation from "@/components/navigation";
import Intro from "@/components/intro";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Helena Agustsson</h1>
      <h2 className="text-2xl text-aqua">Frontend Developer</h2>
      <hr />
      <main className="mt-12">
        <div className="w-full lg:flex lg:justify-between lg:gap-4">
          <div className="lg:w-1/3 lg:sticky lg:top-0 lg:max-h-screen lg:pr-5">
          <Intro />
            <Navigation />
          </div>
          <div className="lg:w-2/3 lg:pl-5">
             <About />
            <Experience />
            <Projects />
            <Eduction />
          </div>
        </div>
      </main>
    </section>
  );
}