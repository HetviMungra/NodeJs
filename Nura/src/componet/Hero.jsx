import React from 'react'

export default function Hero() {
  return (
    <div>
        <section id="home" className="pt-0">
            <div style={{backgroundImage: "url(/img/hero-img.png)"}} className=" bg-cover w-full h-screen bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="container">
                    <div className="flex flex-wrap mx-auto pt-60 lg:pt-80 z-10">
                        <div className="w-full self-center lg:w-full items-center text-center">
                            <p className="text-sm lg:text-2xl text-white font-light">OUR BIGGEST SALE NOW LIVE</p>
                            <h1 className="text-4xl lg:text-7xl py-4 text-white font-PTmono font-semibold md:text-xl text-center">Black Friday Starts Now!
                            </h1>
                            <div className="flex justify-center mt-5">
                                <a href="" target="_blank">
                                    <button
                                        className="text-sm flex text-BLACK border rounded-full bg-white hover:opacity-60 hover:text-dark py-2 px-4 gap-2">
                                        SHOP SALE NOW  &nbsp; →
                                        <img src="dist/img/arrow-BLACK.png" alt="" width="18"/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    </div>
  )
}
