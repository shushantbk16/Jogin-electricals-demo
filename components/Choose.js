import React from "react";
import styled from "styled-components";
import cl from "../public/images/choose.png";
import Image from "next/image";
import light from "../assets/images/streetlight.png"

export default function Choose() {
  const onButtonClick = () => {
    const pdfUrl = "profile.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "download"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
   };
  return (
    <div id="about-us" >
    <div className="choose"  >
      <div className="image" >
        <Image src={light} alt="choose" style={{ marginLeft:"-270px", color: "transparent",height: "104vh",width:"700px"}} />
      </div>
      <div className="content">
        <h2 style={{color:"black",fontSize:"40px"}}>Throwing Some Light On Us</h2>
        <p style={{fontSize:"15px",justifyContent:"center"}}>
        M/s. Jogin Electricals Belagavi Karnataka India is a leading contracting & manufacturing firm in electrical decorative lighting like pathway as well as median poles along with beautification of cities including UG cabling work, external, Internal, wiring for IT sectors, Hospitality, Corporate sector And HT, LT & Substation and outdoor lighting work in Karnataka, Goa, Orissa & West Bengal States since last 20 yrs. It has earned an excellent reputation over the years as being an effective, efficient and reliable contracting firm. Our core strengths are unparallel dedication towards our projects in terms of quality and time commitments. Our goal is to exceed the expectations of every client by offering quality execution of electrical Internal wiring for IT sectors, Hospitality, Corporate sector And HT & LT electrical assignments and other simultaneous activities like liasoning with local state electricity board & Government Electrical Inspectorate.
        </p>
        <button style={{backgroundColor:"black",width:"50%",height:"50px",borderRadius:"20px"}} onClick={onButtonClick}>Download Brochure</button>
        {/* <a href="../public/profile.pdf" target="_blank" download style={{color:"black"}}>Link</a> */}
      </div>
    </div>
    <div style={{borderBottom:"3px solid black",marginTop:"-11.2%"}}>

    </div>
    </div>
  );
}

// const Section = styled.section`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   margin: 0 9rem;
//   gap: 3rem;
//   margin-bottom: 5rem;
//   .image {
//   }
//   .content {
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     gap: 3rem;
//     h2 {
//       font-size: 4rem;
//     }
//     p {
//       color: #7b7e86;
//       line-height: 2rem;
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     flex-direction: column;
//     margin: 2rem;
//     .image {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       img {
//         height: 50vw;
//       }
//     }
//     .content {
//       gap: 1rem;
//       h2 {
//         font-size: 1rem;
//       }
//       p {
//         line-height: 1.3rem;
//         font-size: 0.9rem;
//       }
//     }
//   }
// `;