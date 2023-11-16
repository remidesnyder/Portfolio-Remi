export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="center">
        <h2>
          Portfolio
          <a href="">Voir plus</a>
        </h2>
        <div className="portfolio-container">
          <div className="project">
            <a href=""><img src="/img/projet-movielist.png" alt="Projet MyMovieList"/></a>
            <p className="title">2022 - MyMovieList (En cours)</p>
            <a href="/movielist">Read more</a>
          </div>

          <div className="project">
            <a href=""><img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RCVDMyVBOXZlbG9wcGVtZW50JTIwV2VifGVufDB8fDB8fHww" alt="Projet"/></a>
            <p className="title">2023 - Projet moteur de jeu</p>
            <a href="/moteurDeJeux">Read more</a>
          </div>

          <div className="project">
            <a href=""><img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RCVDMyVBOXZlbG9wcGVtZW50JTIwV2VifGVufDB8fDB8fHww" alt="Projet"/></a>
            <p className="title">2022 - Projet scolaire (En cours)</p>
            <a href="/projetScolaire">Read more</a>
          </div>

          <div className="project">
            <a href=""><img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RCVDMyVBOXZlbG9wcGVtZW50JTIwV2VifGVufDB8fDB8fHww" alt="Projet"/></a>
            <p className="title">2018 - Projet personnel (En cours)</p>
            <a href="/projetPerso">Read more</a>
          </div>

        </div>
      </div>
    </section>
  );
}