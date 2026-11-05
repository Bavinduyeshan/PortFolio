import { site } from "../content/site";
export default function Brand() {
  return (
    <a href="#home" className="brand" aria-label={`${site.name} home`}>
      <span className="brand-monogram">
        BY<span>.</span>
      </span>
      <span className="brand-name">
        Bavindu Yeshan<span>Software Developer</span>
      </span>
    </a>
  );
}
