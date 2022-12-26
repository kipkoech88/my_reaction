import React from 'react'
import './article.css'

function Article() {
  return (
    <div className="article-container" id='gallery'>
      <div className="article-header">
        <h2>Our Favourite Destinations</h2>
      </div>
      <div className="images-container">
        <div className="gallery-image">
          <h1>Image1</h1>
        </div>
        <div className="gallery-image">
          <h1>image2</h1>
        </div>
        <div className="gallery-image">
          <h1>image3</h1>
        </div>
        <div className="gallery-image">
          <h1>image4</h1>
        </div>
      </div>
    </div>
  )
}

export default Article