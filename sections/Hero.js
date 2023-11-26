
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { TfiRulerPencil } from "react-icons/tfi";
import { VscFileSubmodule } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import Choose from "@/components/Choose";
import Development from "@/components/Development";
import { motion } from "framer-motion";
import Portfolio from "@/components/Portfolio";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container cont">
          <TitleLogo title="We Welcome You To" caption="" className="logobg" />
          <h1 className="hero-title">JOGIN ELECTRICALS</h1>

          <div className="sub-heading">
            <TitleSm title="A QUALITY COMMITMENT"/> 
            {/* <span>.</span>
            <TitleSm title="APP DEVELOPMENT"/> <span>.</span>
            <TitleSm title="UI/UX DESIGN" /> */}
          </div>
        </div>
        

      </section>
      <Expertise />
      <Development/>
     
      <Choose/>
      {/* <Portfolio/> */}
      <Brand/>
      {/* <Banner/> */}
      {/* <Testimonial /> */}
      {/* <ShowCase /> */}

      {/* <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
      <BlogCard/> */}
      
    </>
  );
};

export default Hero;
