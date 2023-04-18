import Link from "next/link";
import React, { useState, useEffect } from "react";
import { dancingScript } from "@/fonts";
const NavBar = () => {

  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 400;

    if (backgroundTransparacyVar < 1) {
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <div
      className="w-full bg-white backdrop-blur-sm fixed top-0"
      style={{
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`
      }}
    >
      <nav className="py-8 text-lg">
        <ul className="flex">
          <div className="flex w-4/6 mx-10">
            <li className={dancingScript.className} style= {{fontSize: 30, fontWeight: "bold", marginLeft: 190}}>
              <Link href="/">Aditya</Link>
            </li>
          </div>
          <div className="flex w-2/6 text-gray-600 justify-center">
            <li className="w-1/4 hover:text-black">
              <Link href="/">Products</Link>
            </li>
            <li className="w-1/4 hover:text-black">
              <Link href="/">Posts</Link>
            </li>
            <li className="w-1/4 hover:text-black">
              <Link href="/">Thoughts</Link>
            </li>
            <li className="w-1/4 hover:text-black">
              <Link href="/">Bucket List</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
