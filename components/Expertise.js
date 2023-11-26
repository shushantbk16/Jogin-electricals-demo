import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";
import { motion } from "framer-motion";
import { showcase  } from "@/assets/data/dummydata";

const Expertise = () => {
  return (
    <>
      <section className="expertise" >
        <div className="container" >
       
          <div className="heading-title" >
         
          <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
      >
       <div id="experTise" style={{height:"50px"}}></div>
        <Title title="Our expertise" />
            <p >
            Company undertakes following type of work: Contracting & Engineering from Designing to Project Execution for the following trade as Beautification of cities by providing UG cable system with decorative lighting, Electrical internal wiring, Telecommunications, Data Networking, Structured cabling and Energy Management & Conservation.
            </p>
      </motion.div>
            
          </div>
          
          <div className="marketPlaces-portfolio ">
        {showcase.map((item) => {
          return (
            <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, y: 0 },
              hidden: { y: 60, opacity: 0, scale: 0.5 },
            }}
            transition={{
              type: "spring",
              duration: "1.5",
              ease: "easeInOut",
              // delay: "0.",
            }}
            style={{ top: "-22px" }}
            >
            <div className="marketplace-portfolio">
              <div className="image-portfolio ">
                <img src={item.cover} alt="marketplace-portfolio "  style={{ width:"275px",height: "250px"}}/>
              </div>
              <div className="name-portfolio ">
                <h4>{item.title}</h4>
               
              </div>
              <h6 className="username-portfolio ">{item.catgeory}</h6>
             
            </div>
            </motion.div>
          );
        })}
         </div>
        
        </div>
      </section>
    </>
  );
};

export default Expertise;
