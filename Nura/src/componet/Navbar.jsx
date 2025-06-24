import React, { useEffect } from 'react'

export default function Navbar() {
    useEffect(() => {
    // Scroll handler for fixed navbar
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (!header) return;
      
      const fixedNav = header.offsetTop;
      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    // Hamburger menu toggle
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
    
    const handleHamburgerClick = () => {
      hamburger?.classList.toggle("hamburger-active");
      navMenu?.classList.toggle("hidden");
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const containerElements = document.querySelectorAll(".container");
    containerElements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    if (hamburger) {
      hamburger.addEventListener('click', handleHamburgerClick);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hamburger) {
        hamburger.removeEventListener('click', handleHamburgerClick);
      }
      containerElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div>
         <header className="flex justify-between items-center px-6 py-8 lg:py-4 lg:px-12 absolute w-full top-0 left-0 z-[9999]">
        <div className="flex items-center justify-between w-full relative">
            <div className="inline-flex lg:pr-6">
                <a href="#home">
                    <img alt="Nura logo" className="w-20" src="/img/logo.png" />
                </a>
            </div>
            <nav id="nav-menu" className="hidden items-end md:flex absolute py-5 bg-neutral-950 shadow-lg rounded-lg max-w-[250px] w-full -right-28 top-10 lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:py-0 lg:rounded-none">
                <ul className="block lg:flex text-center gap-3">
                    <li className="group">
                        <a className="text-white hover:text-gray-300 py-2 mx-4 flex" href="#product">Products</a>
                    </li>
                    <li className="group">
                        <a className="text-white hover:text-gray-300 py-2 mx-4 flex" href="#subscription">Subscription</a>
                    </li>
                    <li className="group">
                        <a className="text-white hover:text-gray-300 py-2 mx-4 flex" href="#why">Why Nura?</a>
                    </li>
                    <li className="group">
                        <a className="text-white hover:text-gray-300 py-2 mx-4 flex" href="#support">Support</a>
                    </li>
                </ul>
            </nav>
        </div>
        <a className="lg:block over text-white hover:text-gray-300" href="#">Cart(0)</a>
        <div className="lg:hidden flex items-center px-8">
            <button id="hamburger" name="hamburger" type="button" className="block absolute lg:hidden">
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
        </div>
    </header>
    </div>
  )
}
