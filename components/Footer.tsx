import React from "react";
import { FaHeart } from "react-icons/fa";

import Socials from "./Socials";
import InlineLink from "./InlineLink";

const Footer = () => (
  <footer className="justify-center items-center flex flex-col space-y-5 md:space-y-10 min-h-[33vh] min-w-screen bg-black text-center rounded-t-3xl">
    <p className="px-20 text-xl">
      Made with <FaHeart className="inline h-[24px]" /> by shashi
    </p>
    <Socials />
  </footer>
);

export default Footer;
