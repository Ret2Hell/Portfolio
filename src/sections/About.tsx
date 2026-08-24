import { motion } from "motion/react";
import { useRef } from "react";
import { Frameworks } from "../components/Frameworks";

const focusAreas = [
  { name: "AI Agents", position: "left-[5%] top-[12%]", rotate: -4, delay: 0 },
  { name: "MCP", position: "left-[45%] top-[10%]", rotate: 3, delay: 0.2 },
  { name: "Observability", position: "right-[5%] top-[13%]", rotate: 5, delay: 0.4 },
  { name: "Full-Stack", position: "left-[5%] top-[43%]", rotate: 2, delay: 0.6 },
  { name: "API Design", position: "right-[6%] top-[44%]", rotate: 2, delay: 1 },
  { name: "Distributed Systems", position: "left-[4%] bottom-[11%]", rotate: -3, delay: 1.2 },
  { name: "Microservices", position: "left-[42%] bottom-[9%]", rotate: -2, delay: 1.4 },
  { name: "Event Streaming", position: "right-[4%] bottom-[12%]", rotate: 3, delay: 1.6 },
];

const About = () => {
  const focusContainer = useRef<HTMLDivElement>(null);

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt="Code editor showing a software project"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Taieb Mohamed Yassine</p>
            <p className="subtext">
              I'm a software engineer building AI-powered products, distributed analytics systems,
              and developer tools with TypeScript, Go, and Python.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div ref={focusContainer} className="grid-default-color grid-2">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(122,87,219,0.16),transparent_48%)]" />
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:36px_36px]" />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <p className="select-none text-center text-5xl font-bold leading-[0.82] tracking-[-0.06em] text-white/[0.055] md:text-6xl">
              CODE
              <br />
              IS CRAFT
            </p>
          </div>

          {focusAreas.map((area) => (
            <motion.div
              key={area.name}
              className={`absolute ${area.position} z-10 cursor-grab rounded-full border border-white/10 bg-[#171a33]/90 px-3 py-1.5 text-xs font-medium text-neutral-200 shadow-lg shadow-black/20 backdrop-blur-sm active:cursor-grabbing sm:px-4 sm:text-sm`}
              initial={{ opacity: 0, y: 6, rotate: area.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: area.rotate }}
              whileHover={{ scale: 1.04, borderColor: "rgba(122, 87, 219, 0.55)" }}
              whileDrag={{ scale: 1.06, zIndex: 30 }}
              transition={{ duration: 0.35, delay: area.delay / 3 }}
              viewport={{ once: true }}
              drag
              dragConstraints={focusContainer}
              dragElastic={0.12}
              dragMomentum={false}
            >
              {area.name}
            </motion.div>
          ))}
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              TypeScript, JavaScript, Go, Python, React, Next.js, NestJS, Flask, PostgreSQL, Redis,
              RabbitMQ, Docker, and GitHub Actions.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
