import {useEffect} from "react";
import { Inter } from 'next/font/google';
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "@/components/About";
import Skills from "@/components/Skill";
import Portfolio from "@/components/Portfolio";
import School from "@/components/School";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, opts) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    });
    observer.observe(document.querySelector('div.skills-container'));
    document.querySelectorAll('section').forEach(elem => {
      observer.observe( elem );
    });
  }, []);
  return (
    <main>
      <Header />
      <section id="skills">
      <div className="center">
        <h2>Skills used</h2>
        <div className={"skills-container"}>
          <div className="skill-box"><img src="/img/c.png" alt=""/><span>C</span></div>
          <div className="skill-box"><img src="/img/java.jpg" alt=""/><span>Java</span></div>
          <div className="skill-box"><img src="/img/php.png" alt=""/><span>PHP</span></div>
          <div className="skill-box"><img src="/img/html-5.png" alt=""/><span>HTML</span></div>
          <div className="skill-box"><img src="/img/css-3.png" alt=""/><span>CSS</span></div>
          <div className="skill-box"><img src="/img/js.png" alt=""/><span>Javascript</span></div>
          <div className="skill-box"><img src="/img/database.png" alt=""/><span>MySQL</span></div>
        </div>
      </div>
    </section>
      <section id="skills">
      <div className="center">
        <h2>Les projets</h2>
        <div className={"project-container"}>
            <h1>Les projets scolaires sont des projets fait en cours, en tp</h1>
            <p>Ils sont disponible ici : <a href="https://github.com/dup62/IG2I-scolaire">Lien Github</a></p>
        </div>
      </div>
    </section>
      <Contact/>
      <Footer/>
    </main>
  )
}
