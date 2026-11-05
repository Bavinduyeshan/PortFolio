import { site } from "../content/site";
import { Arrow } from "./Icons";
import Brand from "./Brand";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <Brand />
          <nav aria-label="Social profiles">
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub <Arrow diagonal />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <Arrow diagonal />
            </a>
            <a href="#home">
              Back to top <Arrow diagonal />
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {site.name}. All rights reserved.</span>
          <span>
            Colombo, Sri Lanka <span aria-hidden="true">·</span> Built with
            React
          </span>
        </div>
      </div>
    </footer>
  );
}
