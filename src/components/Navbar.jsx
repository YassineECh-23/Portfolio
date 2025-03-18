import logo from "../assets/he.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/yassine-ech-chairi-9444b2272/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/YassineECh-23" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="mailto:echchairi.yassine@gmail.com">
                    <FaEnvelope />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;