import profile from "../data/profile";
import socialLinks from "../data/socialLink";
import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot"></span>

            <span className="uppercase text-sm tracking-widest text-emerald-400 font-semibold">
              Available for Work
            </span>
          </div>

          {/* Intro */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Hi, I'm {profile.firstName} {profile.middleName}{" "}
              <span className="text-cyan-400">{profile.lastName}</span>
            </h1>

            <div className="text-4xl md:text-6xl font-bold min-h-27.5 md:min-h-20">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1800,
                  "MERN Stack Developer",
                  1800,
                  "React.js Developer",
                  1800,
                  "Backend Developer",
                  1800,
                  "Building Modern Web Apps",
                  2200,
                ]}
                speed={65}
                repeat={Infinity}
                cursor
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-8 max-w-xl">
            MERN Stack Developer passionate about building scalable,
            high-performance web applications with modern technologies and clean
            architecture.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 pt-4">
            <a
              href="#projects"
              className="group bg-cyan-400 text-black px-7 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#contact"
              className="border border-cyan-400 px-7 py-4 rounded-xl font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              Let's Talk
            </a>
          </div>
          <div className="flex gap-6 mt-10 justify-center md:justify-start">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                              w-12 h-12
                              rounded-full
                              border border-gray-700
                              flex items-center justify-center
                              hover:bg-cyan-400
                              hover:text-black
                              hover:border-cyan-400
                              hover:-translate-y-1
                              transition-all
                              duration-300
                              "
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:block">
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"></div>

            <div className="font-mono text-lg space-y-2 text-gray-300">
              <p>
                <span className="text-green-400">const</span>{" "}
                <span className="text-cyan-400">developer</span> = {"{"}
              </p>

              <p className="pl-5">
                name:
                <span className="text-pink-400">
                  {" "}
                  "{profile.firstName} {profile.middleName} {profile.lastName}",
                </span>
              </p>

              <p className="pl-5">
                role:
                <span className="text-pink-400"> "Full Stack Developer",</span>
              </p>

              <p className="pl-5">
                stack: [
                <span className="text-pink-400">
                  "React.js","Node.js","Express.js", "MongoDB"
                </span>
                ],
              </p>

              <p className="pl-5">
                passion:
                <span className="text-pink-400">
                  {" "}
                  "Building scalable solutions"
                </span>
              </p>

              <p>{"};"}</p>

              <p className="text-cyan-400 pt-4">
                // Ready to build amazing products 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
