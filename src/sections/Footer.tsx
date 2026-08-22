import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <a
        href="mailto:mohamedyassine.taieb@insat.ucar.tn"
        className="transition-colors hover:text-white"
      >
        mohamedyassine.taieb@insat.ucar.tn
      </a>
      <div className="flex items-center gap-4">
        {mySocials.map((social) => (
          <a
            href={social.href}
            key={social.name}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-white"
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
      <p>© {new Date().getFullYear()} Taieb Mohamed Yassine.</p>
    </section>
  );
};

export default Footer;
