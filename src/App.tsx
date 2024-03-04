import { useState } from 'react'
import { Provider } from 'react-redux'


import {useBlogDispatch} from './store/hooks.ts'
import {useBlogSelector} from './store/hooks.ts'

import {store} from './store/store.ts'
import reactLogo from './assets/react.svg'
import vectortLogo from './assets/Vector.png'
import viteLogo from '/vite.svg'
import image6 from './assets/image6.png'
import frame69 from './assets/Frame69.png'
import frame72 from './assets/frame72.png'
import Rectangle21 from './assets/Rectangle21.png'
import customerlogos from './assets/customer-logos.png'
import Footer from './assets/Footer.png'

import { DUMMY_BLOGS } from './dummy-blogs.ts';
import BlogPosts from './components/BlogPosts';
import Blog from './components/Blog';
import './App.css'
import { saveData } from './store/blog-slice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useBlogDispatch();

  function handleClick() {
    dispatch(saveData(DUMMY_BLOGS))
  }
  

  return (
    <Provider store={store}>
      
    <div className="container">

      <div className="header">
        <a href="#" className="logo">
        <img  src={vectortLogo} alt="vectorlogo"/ > <span >Digital agency</span>
        </a>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li><a href="#" className="main-nav-link">About</a>  </li>
            <li><a href="#" className="main-nav-link">Services</a></li>
            <li><a href="#" className="main-nav-link">Projects</a></li>
            <li><button href="#" className="button">Get in Touch</button></li>
          </ul>
        </nav>
      </div>


     <div className="section-hero">

       <div className="heading-hero">
              <h1>Building Brands in the <span>Digital Age</span></h1>

              <p>Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights.</p>

              <button className="button">Learn More</button>

            </div>
            <div className="image-hero">
              <div className="image1"> <img src={image6} alt="image6" /> </div>
              <div className="image2">  <img src={frame69} alt="frame69" /></div>

            </div>
     </div>

     <div className="section-feature">
      <p className="feature-para">Powering next-gen companies</p>
      <img src={customerlogos} alt="customerlogos" />
     </div>


     <div className="section-frame72">
      <img src={frame72} alt="frame72" />
     </div>

     <div className="section-testimonial">
      <h1 className="apos" >"</h1>
      <img src={Rectangle21} alt="Rectangle21" />
      <div className="testimonial-des">
      <p className="testimonial-description">“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”</p>

<p className="testimonial-person">David Calathan - Director of Design Operations, New York</p>
      </div>
      
     </div>



     <div className="coding-section">
 
      <h2>Our Blogs</h2>

      <BlogPosts>
        {DUMMY_BLOGS.map((blog) => (
          <li key={blog.id} className="blog">
            <Blog {...blog} />
          </li>
        ))}
      </BlogPosts>

      <div className="fetch"><button href="#" className="button" onClick={handleClick}>View all posts</button></div>




     </div>

     <div className="footer">
      <img src={Footer} className="footer-img" alt="Footer" />
     </div>

    </div>


        </Provider>

   
  );
}

export default App
