import { useState } from "react";
import socialLinks from "../data/socialLink";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // We'll connect this to your backend later

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#08111f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto my-5"></div>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project idea or want to work together? Feel free to reach
            out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side */}

          <div>
            <h3 className="text-3xl font-semibold mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="glass-card p-5 rounded-xl flex items-center gap-5">
                <FaEnvelope className="text-cyan-400 text-2xl" />

                <div>
                  <h4 className="font-semibold">Email</h4>

                  <p className="text-gray-400">ankitrawat7n@gmail.com</p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-xl flex items-center gap-5">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />

                <div>
                  <h4 className="font-semibold">Location</h4>

                  <p className="text-gray-400">Chandigarh, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}

            <div className="flex gap-5 mt-10">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card p-4 rounded-xl hover:text-cyan-400 transition"
                  >
                    <Icon size={28} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side */}

          <form
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-2xl space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-4 outline-none resize-none focus:border-cyan-400"
            />

            <button className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold hover:bg-cyan-300 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
