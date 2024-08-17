import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../../config/DB';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import './Form.scss';

function Form() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null); 
  const [content, setContent] = useState('');
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(''); 
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUploadAndPreview = () => {
    if (image) {
      setUploading(true);

      const storageRef = ref(storage, `images/${new Date().getTime() + image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
        },
        (error) => {
          console.error('Upload error:', error);
          setUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL);
            setUploading(false);
            navigate('/preview', { state: { title, image: downloadURL, content } });
          });
        }
      );
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create Your Blog Post</h2>
      <form className="blog-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          required
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="form-input"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-textarea"
          required
        ></textarea>
        <button
          type="button"
          onClick={handleUploadAndPreview}
          className="form-button"
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Preview'}
        </button>
      </form>
    </div>
  );
}

export default Form;
