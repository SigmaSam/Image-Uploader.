import React from 'react'
import image from '../assets/image.svg'

function Uploader() {
  return (
    <div className="App">
        <h1 className="app-name">Image Uploader</h1>
        <p>File should be Jpeg, Png,...</p>
        <div className="drag-drop">
        <img className="drag-image"src={image} alt="placeholder"/>
        <p>Drag & Drop your image here</p>  
        </div>
        <p>Or</p>
        <form>
            <label for="files" class="App-btn">Choose a file</label>
            <input id="files" className="App-input" type="file"/>
        </form>
    </div>
  )
}

export default Uploader