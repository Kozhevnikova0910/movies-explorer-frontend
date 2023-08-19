import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__content">
          <p className="footer__content-copyright">© 2023</p>
          <a className="footer__content-link" href="src/components/Footer/Footer" target="_blank" rel="noreferrer">
            Яндекс.Практикум
          </a>
          <a className="footer__content-link" href="https://github.com/EkaterinaVokin" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
    </footer>
  );
}
