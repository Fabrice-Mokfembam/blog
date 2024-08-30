import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import Posts from "./Pages/Posts/Posts";
import Login from "./Pages/WriterPages/Auth/Login";
import Form from "./Pages/WriterPages/Form/Form";
import Preview from "./Pages/WriterPages/Preview/Preview";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/DB";



function App() {
  const [blogs, setBlogs] = useState([]);

   useEffect(() => {
    getAllBlogs();

     
  }, []);

  async function getAllBlogs() {
    const colRef = collection(db, 'blogs');

    const unsubscribe = onSnapshot(colRef, snapshot => {
      const list = [];
      snapshot.forEach(doc => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setBlogs(list); 
    });

    return unsubscribe;
  }

  useEffect(() => {
    console.log('Blogs:', blogs);
  }, [blogs]);


  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home blogs={blogs} />,
  },
  {
    path: "/blogs",
    element: <Posts blogs={ blogs} />,
  },
  {
    path: "/blogdetail/:id",
    element: <BlogDetail blogs={ blogs} />,
  },
  {
    path: '/writer/auth',
    element:<Login/>
  },
  {
    path: '/write',
    element:<Form/>
  },
  {
    path: '/preview',
    element:<Preview/>
  }
  ]);
  

  return <RouterProvider router={router} />;
}

export default App;
