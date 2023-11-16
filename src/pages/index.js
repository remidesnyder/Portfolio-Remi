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
      <Intro />
      <About/>
      <Skills/>
      <Portfolio/>
      <School/>
      <Contact/>
      <Footer/>
    </main>
  )
}
