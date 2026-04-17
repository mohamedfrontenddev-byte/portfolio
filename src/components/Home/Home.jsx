import React, { useState, useRef } from 'react'
import './Home.css'
import bg from '../../assets/bg.jpeg'
import cv from '../../assets/cv.pdf'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'

const Home = () => {
  const [home, sethome] = useState(false)
  const servicesRef = useRef(null)

  const handel = () => {
    sethome(true)
    setTimeout(() => {
      servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <div className='container'>
        <h4>Hello I`m</h4>
        <h1>Mohamed Allam</h1>
        <h4>Frontend Developer</h4>

        <div className='btns'>
          <a href={cv} className='btn-sucses' download>
            Download Cv
          </a>
          <a href='https://wa.me/201027511205' target="_blank" rel="noreferrer" className='btn btn-primary'>
             Let's Talk
          </a>

        </div>

        
        <div className='bg'>
          <img src={bg} alt='' className='img-anim' />

          {!home && (
            <button className='show-btn' onClick={handel}>
              see for yourself
            </button>
          )}
        </div>
      </div>

      {home && (
        <div ref={servicesRef} className='section-anim'>
          <Services />
          <Footer />
        </div>
      )}
    </>
  )
}

export default Home