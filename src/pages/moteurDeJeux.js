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
        </div>
      </div>
    </section>
      <section id="skills">
      <div className="center">
        <h2>Le projet</h2>
        <div className={"project-container"}>
            <p>Le projet Moteur de jeux est un projet scolaire sur le jeu Avalam</p>
            <br />
            <h1>Le projet</h1>
            <p>Dans un premier temps, nous avons du réaliser une interface pour pouvoir jouer au jeu avalam en ligne</p>
            <p>Puis nous avons du exploiter un moteur de jeu (fourni) et intégrer a ce moteur de jeu, un "bot" capable de jouer seul et de gagner</p>
        </div>
      </div>
    </section>
      <Contact/>
      <Footer/>
    </main>
  )
}
