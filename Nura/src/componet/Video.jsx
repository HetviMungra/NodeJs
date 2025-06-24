import React from 'react'

export default function Video() {
  return (
    <div>
        <section className="bg-black flex items-center justify-center">
        <div className="bg-gray-200 w-3/4 md:w-1/2 lg:w-1/2 lg:m-10 aspect-video flex items-center justify-center mt-10 mb-10">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/hlxGJBwC_4Y?si=6EyfQOUByGaDncIv" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    </section>
    </div>
  )
}
