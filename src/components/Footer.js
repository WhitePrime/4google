import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__mete">
        <!--<p>SearchPro is made by HeJ</p>-->
      </div>
      <div className="footer__contact">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://t.me/ITHard"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/ITHardNews"
            >
              Twitter
            </a>
          </li>
          <!--<li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/he-j-lee-a2620413b/"
            >
              Linkedin
            </a>
          </li>-->
        </ul>
      </div>
    </footer>
  );
}
