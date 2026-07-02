import { FaCheckCircle } from "react-icons/fa";
import avtar from "../assets/images/avtar.jpg";
import about from "../data/about";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>

            {/* Image */}
            <img
              src={avtar}
              alt="Ankit Singh Rawat"
              className="relative rounded-3xl border border-cyan-400/20 w-full max-w-md object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {about.title[0]}{" "}
            <span className="text-cyan-400">{about.title[1]} </span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mb-8"></div>

          <p className="text-gray-300 leading-8 text-lg mb-6">{about.intro1}</p>

          <p className="text-gray-300 leading-8 text-lg mb-10">
            {about.intro2}
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-5">
            {about.features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-[#111827] p-4 rounded-xl border border-cyan-400/10 hover:border-cyan-400 transition"
              >
                <FaCheckCircle className="text-cyan-400 text-xl" />

                <span className="text-gray-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
