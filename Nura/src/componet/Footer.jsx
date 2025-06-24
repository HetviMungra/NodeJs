import React from 'react'

export default function Footer() {
  return (
    <div>
        <section className="bg-black text-white">
        <footer className="py-12">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-8 md:mb-0 lg:w-1/3">
                        <img alt="Nura logo" className="mb-4" height="50"
                            src="/img/logo.png"
                            width="100" />
                        <p className="text-lg">
                            Nura designs headphones tuned to you. Bringing you closer to music with personalised sound.
                        </p>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap">
                        <div className="w-1/2 md:w-auto mb-8 md:mb-0 md:mr-16">
                            <h3 className="font-bold mb-4">
                                SHOP
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        NuraTrue Pro
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Audio Transmitter
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        NuraTrue
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        NuraBuds
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Nuraphone
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        NuraLoop
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Accessories
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Subscription
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-auto mb-8 md:mb-0 md:mr-16">
                            <h3 className="font-bold mb-4">
                                INFO
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Why Nura?
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Shipping
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Returns
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Warranty
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Patents
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-auto mb-8 md:mb-0 md:mr-16">
                            <h3 className="font-bold mb-4">
                                SUPPORT
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Help Centre
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-auto">
                            <h3 className="font-bold mb-4">
                                SOCIALS
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Instagram
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Facebook
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        YouTube
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Tidal
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Twitter
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:underline" href="#">
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-gray-500 text-sm flex flex-col md:flex-row justify-between">
                    <p>
                        Copyright © 2022 Nura Operations Pty Ltd. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a className="hover:underline" href="#">
                            Privacy Policy
                        </a>
                        <a className="hover:underline" href="#">
                            Terms of Use
                        </a>
                        <a className="hover:underline" href="#">
                            Legal
                        </a>
                    </div>
                </div>
            </div>

        </footer>
     </section>
    </div>
  )
}
