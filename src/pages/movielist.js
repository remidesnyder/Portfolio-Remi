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
          <div className="skill-box"><img src="/img/html-5.png" alt=""/><span>HTML</span></div>
          <div className="skill-box"><img src="/img/css-3.png" alt=""/><span>CSS</span></div>
          <div className="skill-box"><img src="/img/js.png" alt=""/><span>Javascript</span></div>
          <div className="skill-box"><img src="/img/database.png" alt=""/><span>MySQL</span></div>
          <div className="skill-box"><img src="/img/php.png" alt=""/><span>PHP</span></div>
        </div>
      </div>
    </section>
      <section id="skills">
      <div className="center">
        <h2>Le projet</h2>
        <div className={"project-container"}>
            <p>Le projet MovieList connait 2 versions. Une version que j'ai eu l'occasion de faire en projet scolaire en 2023 et une autre version plus personnel qui a commencé en 2022 et qui n'est pas encore terminé complétement</p>
            <br />
            <h1>MovieList - Version scolaire</h1>
            <p>La version scolaire disponible ici : <a href="https://github.com/remidesnyder/Projet-Web">Le projet github</a></p>
            <p>Ce projet est assez limité on ne peut ajouter que des films dans des listes vus, à voir, favori</p>
            <p>Cependant, le projet a demandé une réfléxion supplémentaire puisqu'il a été codé en PHP avec une structure MVC</p>
            <br />
            <h1>MovieList - Version personnel</h1>
            <p>Cette version est plus avancé, en effet, en plus des films, ici on peut ajouter des séries et intéragir avec chaque épisode</p>
        </div>
      </div>
    </section>
      <Contact/>
      <Footer/>
    </main>
  )
}
