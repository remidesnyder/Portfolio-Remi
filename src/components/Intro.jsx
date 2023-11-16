import {useEffect, useState} from "react";

export default function Intro() {
  const [classes,setClasses] = useState('');

  useEffect(() => {
    setClasses('visible');
  }, []);

  return (
    <section id="intro" className={classes}>
      <div>
        <p>I&apos;m <span>Rémi Desnyder</span><br />backend developer,<br />code enthusiast</p>
        <a href="">Contact me</a>
      </div>
      <div>
      </div>
    </section>
  );
}
//<img src="/img/logo.jpeg" alt=""/>