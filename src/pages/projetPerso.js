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
            <h1>Les projets personnels</h1>
            <p>Les projets sont de différents types : </p>
            <p> - Des plugins JAVA avec l'api SPIGOT (Minecraft)</p>
            <p>Ce sont des plugins qui permettent d'ajouter des fonctionnalités au jeu (Des commandes, des modes de jeu etc...)</p>
            <br />
            <p> - Des bots discord (Javascript - discord.js avec nodejs)</p>
            <p>Des bots de jeu, de modération, de musique etc...</p>
            <br />
            <p> - Des sites pour s'entrainer</p>
            <p>Javascript, HTML, CSS, Express, Nodejs, Jquery etc...</p>
            <br />
            <br />
            <br />
            <p>Les codes ne sont pas disponible ici mais pourront être fourni</p>
        </div>
      </div>
    </section>
      <Contact/>
      <Footer/>
    </main>
  )
}
