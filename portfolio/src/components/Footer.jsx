import socialLinks from "../data/socialLink";

const Footer = () => {
  return (
    <footer className="bg-[#060e20] border-t border-gray-700/30 w-full py-24">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-300 mx-auto px-6 gap-8">
        {/* Left side */}
        <div className="space-y-2 text-center md:text-left">
          <a
            href="#"
            className="text-2xl font-bold text-cyan-400 tracking-tight"
          >
            ANKIT.DEV
          </a>

          <p className="text-sm text-gray-400">
            © 2026 Ankit Singh Rawat. Built with MERN Stack.
          </p>
        </div>

        {/* Right links */}
        <div className="flex gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              href={social.href}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
