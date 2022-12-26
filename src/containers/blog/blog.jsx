import React from 'react'
import './blog.css'

function Blog() {
  return (
    <div className="blog-container">
      <div className="big-section">
        <div className="post">
          <h3>Random first post</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse tempora velit blanditiis. Rem perferendis quasi qui ipsum, aliquid hic, quisquam ex reiciendis adipisci saepe nesciunt provident itaque, illo ullam!</p>
        </div>
        <div className="post">
          <h3>Random Second post</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatum nulla voluptas impedit quasi cum delectus reprehenderit harum autem minima ut odit velit rerum placeat eligendi asperiores iusto, beatae praesentium.</p>
        </div>
        <div className="post">
          <h3>Random Third post</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa possimus nihil, voluptatibus velit nostrum reprehenderit. Iusto repellendus similique, vitae deserunt beatae perferendis voluptas, aut cumque laudantium maxime aperiam animi!</p>
        </div>
        <div className="post" id='about'>
          <h3>Random Final post on the list</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, perferendis. Officia nesciunt sed, autem repellendus libero unde minus sunt, odio molestiae, voluptatibus et. Laudantium vel eos illo sint. Incidunt, facilis!</p>
        </div>
      </div>
      <div className="small-section">
        <div className="headline">
          <h3>Random headline one</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum, </p>
        </div>
        <div className="headline">
          <h3>Random headline two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum, </p>
        </div>
        <div className="headline">
          <h3>Random headline four</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum, </p>
        </div>
      </div>
    </div>
  )
}

export default Blog