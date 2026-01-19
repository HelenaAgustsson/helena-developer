import About from "@/components/about";
import Jobs from "@/components/jobs/jobs";
import Eduction from "@/components/education/education";
import Projects from "@/components/projects/projects";
import Navigation from "@/components/navigation";
import Intro from "@/components/intro";
import Footer from "@/components/footer";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12 text-mist">
      <h1 className="text-4xl font-semibold">Helena Agustsson</h1>
      <h2 className="text-3xl">Frontend Developer</h2>
      <hr className="border-thistle border-1" />
      <main className="mt-12">
        <div className="w-full lg:flex lg:justify-between lg:gap-4">
          <div className="lg:w-1/3 lg:sticky lg:top-0 lg:max-h-screen lg:pr-5">
            <Intro />
            <Navigation />
          </div>
          <div className="lg:w-2/3 lg:px-[100px]">
            <About />
            <Jobs />
            <Projects />
            <Eduction />
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}