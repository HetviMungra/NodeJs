import React, { useState } from 'react'
import { Provider} from 'react-redux'
import { store } from './App/Store'
import { BrowserRouter, NavLink, Route, Routes, Link } from 'react-router-dom'
import Header from './JsonAPI/Header'
import Milk from './JsonAPI/Milk'
import Bread from './JsonAPI/Bread'
import Eggs from './JsonAPI/Eggs'
import Energy from './JsonAPI/Energy'
import Muesli from './JsonAPI/Muesli'
import Oats from './JsonAPI/Oats'
import Paneer from './JsonAPI/Paneer'
import Footer from './JsonAPI/Footer'

export default function App() {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>          
          <div>
            <Header/>
            <center>
              <div className="flex_div">
                <div className="left_side_div">

                  <Link to="/" className={`link_component ${activeLink === '/' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/922_1643384380004.png" alt="" />
                    </div>
                    <h1>Milk</h1>
                  </Link>

                  <Link to="/Bread" className={`link_component ${activeLink === '/Bread' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/Bread')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png" alt="" />
                    </div>
                    <h1>Bread & Pav</h1>
                  </Link>

                  <Link to="/Eggs" className={`link_component ${activeLink === '/Eggs' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/Eggs')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/1200_1657599895699.png" alt="" />
                    </div>
                    <h1>Eggs</h1>
                  </Link>


                  <Link to="/Energy" className={`link_component ${activeLink === '/Energy' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/Energy')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1700735371138-2" alt="" />
                    </div>
                    <h1>Energy Bars</h1>
                  </Link>

                  <Link to="/Muesli" className={`link_component ${activeLink === '/Muesli' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/Muesli')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png" alt="" />
                    </div>
                    <h1>Muesli & Granola</h1>
                  </Link>

                  <Link to="/Oats" className={`link_component ${activeLink === '/Oats' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/Oats')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/584_1680251645977.png" alt="" />
                    </div>
                    <h1>Oats</h1>
                  </Link>

                  <Link to="/Paneer" className={`link_component ${activeLink === '/Paneer' ? 'active-link' : ''}`} onClick={() => handleLinkClick('/Paneer')}>
                    <div className="link_img">
                      <img src="https://cdn.grofers.com/app/images/category/cms_images/icon/923_1643384369257.png" alt="" />
                    </div>
                    <h1>Paneer & Tofu</h1>
                  </Link>
                </div>

                <div className="right_side_div">
                  <Routes>
                    <Route path="/" element={<Milk />} />
                    <Route path="/Bread" element={<Bread />} />
                    <Route path="/Eggs" element={<Eggs />} />
                    <Route path="/Energy" element={<Energy />} />
                    <Route path="/Muesli" element={<Muesli />} />
                    <Route path="/Oats" element={<Oats />} />
                    <Route path="/Paneer" element={<Paneer />} />
                  </Routes>
                </div>
              </div>
            </center>
            <Footer/>
          </div>
          
        </Provider>
      </BrowserRouter>
    </div>
  )
}

