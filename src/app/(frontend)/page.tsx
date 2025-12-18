
import Experience from "../../components/experience";
import Eduction from "@/components/education";
import Projects from "@/components/projects";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Helena Agustsson</h1>
      <h2 className="text-2xl text-aqua">Frontend Developer</h2>
      <hr />
      <main className="mt-12">
        <div className="w-full lg:w-1/2">
          <Experience />
          <Projects />
          <Eduction />
        </div>
      </main>
    </section>
  );
}