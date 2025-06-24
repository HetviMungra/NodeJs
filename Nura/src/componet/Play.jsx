import React from 'react'

export default function Play() {
  return (
    <div>
         
<section id="why" className="pt-28 pb-32 bg-gradient-to-br from-blue-700 to-sky-500">
        <div className="container">
            <div className="flex flex-wrap px-4 lg:px-10">
                <div className="w-full self-end lg:w-1/2 z-40">
                    <div className="relative lg:mt-0 lg:right-0">
                        <img src="/img/device.png" alt="farhan" className="max-w-full mx-auto dir=rtl"
                            width="350" />
                    </div>
                </div>
                <div className="w-full self-center lg:w-1/2 mb-10">
                    <h1 className="block font-light text-white text-6xl lg:text-7xl mt-1 mb-5">
                        For your <br/>ears only.
                    </h1>
                    <p className="font-base text-lg text-white mb-5 leading-relaxed">Normal hearing varies significantly from person to person, and these variations make a <span className="text-green-400">big difference</span> to how you experience music.
                    </p>
                    <p className="font-base text-lg text-white mb-5 leading-relaxed">The first time you use Nura earbuds, they <span className="text-green-400"> measure your hearing</span> to create your personalised hearing profile.
                    </p>
                    <a href="" target="_blank">
                        <button
                            className="text-sm flex text-white border rounded-full bg-transparent hover:opacity-60 hover:text-dark py-2 px-4 gap-2">
                            LEARN MORE
                            <img src="/img/arrow-white.png" alt="" width="18"/>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <main className="pt-28 pb-32 bg-neutral-900">
        <div className="container">
            <div className="flex flex-wrap px-4 lg:px-10">
                <div className="w-full self-center lg:w-1/2 mb-10">
                    <h1 className="block font-light text-white text-6xl lg:text-7xl mt-1 mb-5">
                        Play from <br/> any device.
                    </h1>
                    <p className="font-base text-lg text-white mb-5 leading-relaxed">your hearing profile is <span
                            className="text-green-400">stored on the earbuds</span>, and is applied to whatever you listen to, <span
                            className="text-green-400">on any device</span>.
                    </p>
                    <p className="font-base text-lg text-white mb-5 leading-relaxed">Use the Nura app to create a hearing profile,
                        configure touch buttons, adjust immersion mode and more.
                    </p>
                </div>
                <div className="w-full self-end lg:w-1/2 z-40">
                    <div className="relative lg:mt-0 lg:right-0">
                        <img src="/img/bird.png" alt="farhan" className="max-w-full mx-auto dir=rtl" width="350" />
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
  )
}
