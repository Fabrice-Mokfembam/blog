import React from 'react'
import Header from '../../components/Header/Header'
import Postlist from '../../components/PostList/Postlist'
import Footer from '../../components/Footer/Footer'

function Home({blogs}) {
  return (
    <div>
      <Header />
      <Postlist posts={ blogs} />
      <Footer/>
    </div>
  )
}

export default Home