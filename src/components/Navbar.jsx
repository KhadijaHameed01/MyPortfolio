import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-wrap items-center justify-between py-3 px-4">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <p className="mx-2 text-3xl font-bold">PORTFOLIO</p>
      </div>

      {/* Social Media Icons */}
      <div className="mt-4 flex items-center justify-center gap-4 text-2xl md:mt-0">
        <a href="https://www.linkedin.com/in/khadija-hameed-a67320341/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/KhadijaHameed01" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61571976560471" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
        </a>
        <a href="https://www.upwork.com" aria-label="Upwork" target="_blank" rel="noopener noreferrer">
        <FaSquareUpwork />
        </a>
        <a href="https://www.fiverr.com" aria-label="Fiverr" target="_blank" rel="noopener noreferrer">
        <TbBrandFiverr />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
