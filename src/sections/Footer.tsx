import { mySocials } from "../constants";
const Footer = () => {
  return (
    <footer className="site-footer flex flex-col items-start gap-5 pb-5 text-sm text-neutral-400 c-space sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <a
        href="mailto:mohamedyassine.taieb@insat.ucar.tn"
        className="max-w-full break-all transition-colors hover:text-white sm:break-normal"
      >
        mohamedyassine.taieb@insat.ucar.tn
      </a>
      <div className="footer-socials flex flex-wrap items-center gap-x-5 gap-y-3">
        {mySocials.map((social) => (
          <a
            href={social.href}
            key={social.name}
            target="_blank"
            rel="noreferrer"
            className="footer-social flex items-center gap-2 transition-colors hover:text-white"
          >
            <img
              src={social.icon}
              className={`size-5 ${social.name === "GitHub" ? "invert" : ""}`}
              alt=""
            />
            <span>{social.name}</span>
          </a>
        ))}
      </div>
      <p className="footer-copyright w-full sm:w-auto">
        © {new Date().getFullYear()} Taieb Mohamed Yassine.
      </p>
    </footer>
  );
};

export default Footer;
