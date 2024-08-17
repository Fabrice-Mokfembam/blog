import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaHeartBroken,
} from "react-icons/fa";
import "./BlogDetail.scss";
import BlogCard from "../../components/BlogCard/BlogCard";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/DB";

function BlogDetail({ blogs }) {
  const [liked, setLiked] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    async function getblog(id) {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    }

    getblog(id);
  }, [id]); 
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="blog-detail">
        <h1 className="blog-title">{data.title}</h1>
        <div className="blog-meta">
          <span className="blog-author">{data.author}</span> |
          <span className="blog-date"> August 14, 2024</span>
        </div>
        <img src={data.image} alt="img" />
        <div className="blog-content">
          <p>{data.content}</p>
        </div>
        <div className="blog-actions">
          <div className="blog-share">
            <span>Share:</span>
            <FaFacebook className="share-icon" />
            <FaTwitter className="share-icon" />
            <FaLinkedin className="share-icon" />
          </div>
          <div className="blog-like" onClick={toggleLike}>
            {liked ? (
              <FaHeart className="like-icon liked" />
            ) : (
              <FaHeartBroken className="like-icon" />
            )}
            <span>{liked ? "Liked" : "Like"}</span>
          </div>
        </div>
        <div className="related-articles">
          <h2>Related Articles</h2>
          <div className="post-list">
            {blogs.slice(0, 3).map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                title={post.title}
                author={post.author}
                id={post.id}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogDetail;
