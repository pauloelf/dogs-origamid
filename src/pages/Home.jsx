import React from "react"
import Feed from "../Components/feed/Feed.jsx"
import Head from "../Components/global/Head"

const Home = () => {
  return (
    <div className="mt-8 mx-auto max-w-[50rem] px-4">
      <Head title='Fotos' description='Home do site dogs, com o feed de fotos' />
      <Feed />
    </div>
  )
}

export default Home
