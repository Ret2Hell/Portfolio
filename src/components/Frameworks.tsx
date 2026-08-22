import { OrbitingCircles } from "./OrbitingCircles";

const outerSkills = [
  "typescript",
  "go",
  "python",
  "nextjs",
  "nestjs",
  "flask",
  "docker",
  "githubactions",
];

const innerSkills = ["react", "nodejs", "postgresql", "mongodb", "redis", "rabbitmq", "fastapi"];

export function Frameworks() {
  return (
    <div className="relative flex h-[15rem] w-full items-center justify-center">
      <OrbitingCircles iconSize={40} radius={112} duration={28}>
        {outerSkills.map((skill) => (
          <TechIcon key={skill} skill={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={66} reverse duration={20}>
        {innerSkills.map((skill) => (
          <TechIcon key={skill} skill={skill} />
        ))}
      </OrbitingCircles>
      <img
        src="assets/logos/github.svg"
        className="size-11 rounded-full bg-white/90 p-1.5"
        alt="GitHub"
      />
    </div>
  );
}

const TechIcon = ({ skill }: { skill: string }) => (
  <img
    src={`assets/logos/${skill}.svg`}
    className="size-full rounded-md bg-white/90 p-1.5 shadow-lg shadow-black/20 transition-transform hover:scale-110"
    alt={`${skill} logo`}
  />
);
