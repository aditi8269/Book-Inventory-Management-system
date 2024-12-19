// import React from 'react'

import { useContext, useEffect, useState } from "react"
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../contect/AuthProvider";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const {user} = useContext(AuthContext);
  console.log(user);

  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100){
        setSticky(true);
      }
      else{
        setSticky(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[]);

  // navItems here
  const navItems = [
    { label: "Home  ", href: "/" },
    { label: "About", href: "/about" },
    { label: "Shop", href: "/shop" },
    { label: "Sell Your Books", href: "/admin/dashboard"},
    { label: "Blog", href: "/blog" },
  ]

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={`py-7 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`} >
        <div className="flex justify-between items-center text-base gap-8">
          {/* {logo} */}
          <Link to = "/" className="text-2xl font-bold text-blue-700 flex item-center gap-2"><FaBlog className="inline-block"/>Books</Link>

          {/* {navitems for large icons in navItems} */}
          <ul className="md:flex space-x-12 hidden " >
          {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link to={href} className="block text-base text-black uppercase cursor-point hover:text-blue-700">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* {button for large devices} */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button><FaBarsStaggered className="w-s hover:text-blue-700"></FaBarsStaggered></button>
          </div>
        </div>

        {/* {menu button for mobile devices} */}
        <div className="md:hidden" >
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {
              isMenuOpen ? <FaXmark className="h-5 w-5 text-black"/>: <FaBarsStaggered className="h-5 w-5 text-black"/>
            }
          </button>
        </div>
        {/* {navitems for small devices} */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        <ul>
        {
        navItems.map(({ label, href }) => (
              <li key={href}>
                <Link to={href} className="block text-base text-white uppercase cursor-point">
                  {label}
                </Link>
              </li>
            ))}
            </ul>
        </div>
        

      </nav>
    </header>
  )
}
