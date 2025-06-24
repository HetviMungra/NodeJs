import React from 'react'

export default function Subscription() {
  return (
    <div>
         <section id="subscription" className="pt-0">
        <div style={{backgroundImage: "url(/img/img-subscription.png)"}} className="bg-cover h-full w-full lg:h-screen bg-center">
            <div className="container">
                <div className="flex flex-wrap mx-auto pt-20 pb-20 lg:pb-0 lg:pt-56">
                    <div className="w-full self-center lg:w-full items-center text-center">
                        <h1 className="text-4xl lg:text-7xl py-4 text-white font-PTmono font-semibold md:text-xl text-center">
                            A sound subscription
                        </h1>
                        <p className="text-base lg:text-3xl lg:px-20 text-white font-light">Experience personalised sound across our devices on a low monthly fee with NuraNow, Cancel anytime.</p>
                        <div className="flex justify-center mt-5">
                            <a href="" target="_blank">
                                <button
                                    className="text-sm flex text-white rounded-full bg-blue-700 hover:opacity-60 hover:text-dark py-2 px-4 gap-2">
                                    DISCOVER NURANOW
                                    <img src="dist/img/arrow-white.png" alt="" width="18"/>
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
