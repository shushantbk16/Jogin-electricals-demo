import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import joginlogo from "@/assets/images/je-logo.png"
import Image from "next/image";


const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <header>
        <div className="container" style={{height:"23px"}}>
          <div className="logo">
             
            <Link href="/">
            <div className="title-card">
              <Image src={joginlogo} width={40} height={40} alt="image" style={{    marginTop:"12%", height:"37px"}}/>
              <TitleLogo title="JoginElectricals" caption="" className="logomin" />
              </div>
               {/* <Image src="./logo.jpg" alt="choose" width={20} height={20}/> */}
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Home
            </Link>
            
            <Link
              href="#experTise"
              className={activeLink == "#expertise" ? "activeLink" : "none"}
            >
              Services
            </Link>
            {/* <Link
              href="#portFolio"
              className={activeLink == "#portFolio" ? "activeLink" : "none"}
            >
              Portfolio
            </Link> */}
            <Link
              href="#about-us"
              className={activeLink == "#about-us" ? "activeLink" : "none"}
            >
             About
            </Link>
            <Link
              href="#foot"
              className={activeLink == "#foot" ? "activeLink" : "none"}
            >
              Contact
            </Link>
          </nav>
          {/* <button className="button-hidden" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button> */}
        </div>
      </header>
    </>
  );
};

export default Header;
