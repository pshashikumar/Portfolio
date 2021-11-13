import React from "react";
import { SiGithub, SiLinkedin, SiPolywork } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";

const Socials = () => (
  <nav className="flex flex-row justify-center items-center mt-5 space-x-6 lg:justify-start lg:items-start">
    <a
      href="https://github.com/pshashikumar"
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10"
      title="Go to GitHub profile"
      aria-label="Go to GitHub profile"
    >
      <SiGithub className="w-full h-full transition-opacity hover:opacity-75" />
    </a>
    <a
      href="https://www.linkedin.com/in/shashikumar-p"
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10"
      title="Go to LinkedIn profile"
      aria-label="Go to LinkedIn profile"
    >
      <SiLinkedin className="w-full h-full transition-opacity hover:opacity-75" />
    </a>

    <a
      href="mailto:pshashikumar538@gmail.com"
      className="w-10 h-10"
      title="Contact via email"
      aria-label="Contact via email"
    >
      <FaEnvelope className="w-full h-full transition-opacity hover:opacity-75" />
    </a>
  </nav>
);

export default Socials;
