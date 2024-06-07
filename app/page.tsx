import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from "next/link";
import { Project, Skill, Social, pageInfo } from "@/type";
import { GetStaticProps } from "next";
import { fetchPageInfo } from "./utils/fetchPageInfo";
import { fetchProjects } from "./utils/fetchProjects";
import { fetchSkills } from "./utils/fetchSkills";
import { fetchSocials } from "./utils/fetchSocials";

type Props = {
  pageinfo: pageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({ pageinfo, skills, projects, socials }: Props) {
  return (
    <div className="bg-[rgba(36,36,36)] text-white h-screen snap-y  snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* <section id="about" className="snap-center">
        <About />
      </section> */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              src="https://www.shutterstock.com/image-vector/young-man-anime-style-character-600nw-2313503433.jpg"
              alt=""
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getInitialProps: GetStaticProps<Props> = async () => {
  const pageinfo: pageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageinfo,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
