import '../styles/Loader.css'
import React from 'react'
import { LineLoader } from "react-loaders-kit"


function Loader() {

  const loaderProps = {
    loading: true,
    size: 100,
    duration: 1.5,
  }
  

  return (
    <div className="loader">
        <h2>Uploading...</h2>
        <LineLoader {...loaderProps} className="loader-bar"/>
    </div>
    
  )
}

export default Loader