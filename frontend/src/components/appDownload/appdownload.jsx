import React from 'react'
import './appdownload.css'
import { assets } from '../../assets/assets'

const appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> Tomato App</p>
      <div className="app-download-platforms"></div>
      <img src={assets.play_store} alt="" />
      <img src={assets.app_store} alt="" />
    </div>
  )
}

export default appdownload
