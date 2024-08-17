import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Preview.scss';
import { db } from '../../../config/DB';
import { addDoc,collection } from 'firebase/firestore';

const authors = ['John Harinton', 'James Akaba','Neil Simon','Thiago Fabrice']

function Preview() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, image, content } = location.state;

  const handlePost = async () => {
    const post = {
      title,
      image,
      content,
      author: authors[Math.floor(Math.random() * 4)] 
    }
    const colRef = collection(db, 'blogs');
    console.log(post)

    try {
      const doc = await addDoc(colRef, post);
      console.log(doc.id);
    } catch (error) {
      console.error(error)
    }
    finally {
    navigate('/'); 
    }
  };

  return (
    <div className="preview-container">
      <h2 className="preview-title">{title}</h2>
      <img src={image} alt="Blog Post" className="preview-image" />
      <p className="preview-content">{content}</p>
      <button onClick={handlePost} className="post-button">
        Post Blog
      </button>
    </div>
  );
}

export default Preview;
