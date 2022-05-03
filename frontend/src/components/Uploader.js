import {useState}from 'react'
import placeholderImage from '../assets/image.svg'

function Uploader() {
  const [image, setImage] = useState({ featured_image: null })

  const onImageChange = (e) => {
    e.preventDefault();
    setImage({ featured_image: e.target.files[0]})
    console.log(image)
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('featured_image', this.state.featured_image);    
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: formData
    })
    .catch(error=>console.log(error));
    }

  return (
    <div className="App">
        <h1 className="app-name">Image Uploader</h1>
        <p>File should be Jpeg, Png,...</p>
        <div className="drag-drop">
        <img className="drag-image" src={placeholderImage} alt="placeholder"/>
        <p>Drag & Drop your image here</p>  
        </div>
        <p>Or</p>
        <form>
            <label type="button" for="files" class="App-btn">Choose a file</label>
            <input 
              id="files" 
              className="App-input" 
              type="file"
              accept="image/*" 
              multiple={false}
              onChange={onImageChange}
            />
        </form>
    </div>
  )
}

export default Uploader